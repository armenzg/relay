use std::collections::HashMap;
use std::ops::{Deref, DerefMut};

use serde::{Deserialize, Serialize};

use crate::protocol::{Event, Measurement, Measurements, Timestamp};
use crate::types::{Annotated, Error, FromValue, Object, Value};

#[derive(Clone, Debug)]
struct TimeWindowSpan {
    start_timestamp: Timestamp,
    end_timestamp: Timestamp,
}

impl TimeWindowSpan {
    fn new(start_timestamp: Timestamp, end_timestamp: Timestamp) -> Self {
        if end_timestamp < start_timestamp {
            return TimeWindowSpan {
                start_timestamp: end_timestamp,
                end_timestamp: start_timestamp,
            };
        }

        TimeWindowSpan {
            start_timestamp,
            end_timestamp,
        }
    }
}

type OperationName = String;
#[derive(PartialEq, Eq, Hash)]
enum OperationBreakdown {
    Emit(OperationName),
    DoNotEmit(OperationName),
}

type OperationNameIntervals = HashMap<OperationBreakdown, Vec<TimeWindowSpan>>;

fn merge_intervals(mut intervals: Vec<TimeWindowSpan>) -> Vec<TimeWindowSpan> {
    // sort by start_timestamp in ascending order
    intervals.sort_unstable_by(|a, b| a.start_timestamp.partial_cmp(&b.start_timestamp).unwrap());

    intervals.into_iter().fold(
        vec![],
        |mut merged, current_interval| -> Vec<TimeWindowSpan> {
            // merged is a vector of disjoint intervals

            if merged.is_empty() {
                merged.push(current_interval);
                return merged;
            }

            let mut last_interval = merged.last_mut().unwrap();

            if last_interval.end_timestamp < current_interval.start_timestamp {
                // if current_interval does not overlap with last_interval,
                // then add current_interval
                merged.push(current_interval);
                return merged;
            }

            // current_interval and last_interval overlaps; so we merge these intervals

            // invariant: last_interval.start_timestamp <= current_interval.start_timestamp

            last_interval.end_timestamp =
                std::cmp::max(last_interval.end_timestamp, current_interval.end_timestamp);

            merged
        },
    )
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(tag = "type", rename_all = "camelCase")]
pub struct SpanOperationsConfig {
    matches: Vec<String>,
}

impl SpanOperationsConfig {
    pub fn parse_event(&self, event: &Event) -> Option<Measurements> {
        let operation_name_breakdowns = &self.matches;

        if operation_name_breakdowns.is_empty() {
            return None;
        }

        let spans = match event.spans.value() {
            None => return None,
            Some(spans) => spans,
        };

        // Generate span operation breakdowns
        let mut intervals: OperationNameIntervals = HashMap::new();

        for span in spans.iter() {
            let span = match span.value() {
                None => continue,
                Some(span) => span,
            };

            let cover = TimeWindowSpan::new(
                *span.start_timestamp.value().unwrap(),
                *span.timestamp.value().unwrap(),
            );

            let operation_name = span.op.value().unwrap().clone();

            // Only emit an operation breakdown measurement if the operation name matches any
            // entries in operation_name_breakdown.
            let results = operation_name_breakdowns
                .iter()
                .find(|maybe| operation_name.starts_with(*maybe));

            let operation_name = match results {
                None => OperationBreakdown::DoNotEmit(operation_name),
                Some(operation_name) => OperationBreakdown::Emit(operation_name.clone()),
            };

            intervals
                .entry(operation_name)
                .or_insert_with(Vec::new)
                .push(cover);
        }

        if intervals.is_empty() {
            return None;
        }

        let mut breakdown = Measurements::default();

        let mut total_time_spent: f64 = 0.0;

        for (operation_name, intervals) in intervals {
            let op_time_spent: f64 = merge_intervals(intervals)
                .into_iter()
                .map(|interval| -> f64 {
                    let delta: f64 = (interval.end_timestamp.timestamp_nanos()
                        - interval.start_timestamp.timestamp_nanos())
                        as f64;
                    // convert to milliseconds (1 ms = 1,000,000 nanoseconds)
                    (delta / 1_000_000.00).abs()
                })
                .sum();

            total_time_spent += op_time_spent;

            let operation_name = match operation_name {
                OperationBreakdown::DoNotEmit(_) => continue,
                OperationBreakdown::Emit(operation_name) => operation_name,
            };

            let time_spent_measurement = Measurement {
                value: Annotated::new(op_time_spent),
            };

            let op_breakdown_name = format!("ops.time.{}", operation_name);

            breakdown.insert(op_breakdown_name, Annotated::new(time_spent_measurement));
        }

        let total_time_spent_measurement = Measurement {
            value: Annotated::new(total_time_spent),
        };
        breakdown.insert(
            "ops.total.time".to_string(),
            Annotated::new(total_time_spent_measurement),
        );

        Some(breakdown)
    }
}

/// Configuration to define breakdown to be generated based on properties and breakdown type.
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(tag = "type", rename_all = "camelCase")]
pub enum BreakdownConfig {
    SpanOperations(SpanOperationsConfig),
}

impl BreakdownConfig {
    pub fn parse_event(&self, event: &Event) -> Option<Measurements> {
        match self {
            BreakdownConfig::SpanOperations(config) => config.parse_event(event),
        }
    }
}

type BreakdownName = String;

/// Represents the breakdown configuration for a project.
/// Generate a named (key) breakdown (value).
///
/// Breakdowns are product-defined numbers that are indirectly reported by the client, and are materialized
/// during ingestion.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BreakdownsConfig(pub HashMap<BreakdownName, BreakdownConfig>);

impl Deref for BreakdownsConfig {
    type Target = HashMap<BreakdownName, BreakdownConfig>;

    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

/// A map of breakdowns.
/// Breakdowns may be available on any event type. A breakdown are product-defined measurement values
/// generated by the client, or materialized during ingestion. For example, for transactions, we may
/// emit span operation breakdowns based on the attached span data.
#[derive(Clone, Debug, Default, PartialEq, Empty, ToValue, ProcessValue)]
#[cfg_attr(feature = "jsonschema", derive(JsonSchema))]
pub struct Breakdowns(pub Object<Measurements>);

impl Breakdowns {
    pub fn is_valid_breakdown_name(name: &str) -> bool {
        name.chars()
            .all(|c| matches!(c, 'a'..='z' | 'A'..='Z' | '0'..='9' | '-' | '_' | '.'))
    }
}

impl FromValue for Breakdowns {
    fn from_value(value: Annotated<Value>) -> Annotated<Self> {
        let mut processing_errors = Vec::new();

        let mut breakdowns = Object::from_value(value).map_value(|breakdowns| {
            let breakdowns = breakdowns
                .into_iter()
                .filter_map(|(name, object)| {
                    let name = name.trim();

                    if Breakdowns::is_valid_breakdown_name(name) {
                        return Some((name.into(), object));
                    } else {
                        processing_errors.push(Error::invalid(format!(
                            "breakdown name '{}' can contain only characters a-z0-9.-_",
                            name
                        )));
                    }

                    None
                })
                .collect();

            Self(breakdowns)
        });

        for error in processing_errors {
            breakdowns.meta_mut().add_error(error);
        }

        breakdowns
    }
}

impl Deref for Breakdowns {
    type Target = Object<Measurements>;

    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

impl DerefMut for Breakdowns {
    fn deref_mut(&mut self) -> &mut Self::Target {
        &mut self.0
    }
}
