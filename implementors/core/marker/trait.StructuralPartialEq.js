(function() {var implementors = {};
implementors["document_metrics"] = [{"text":"impl StructuralPartialEq for MetricPath","synthetic":false,"types":[]}];
implementors["relay_auth"] = [{"text":"impl StructuralPartialEq for RelayVersion","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for KeyParseError","synthetic":false,"types":[]}];
implementors["relay_common"] = [{"text":"impl StructuralPartialEq for EventType","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for DataCategory","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for SpanStatus","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for GlobOptions","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ProjectKey","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for UnixTimestamp","synthetic":false,"types":[]}];
implementors["relay_config"] = [{"text":"impl StructuralPartialEq for ConfigErrorKind","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Credentials","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for RelayMode","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for KafkaTopic","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for UpstreamParseError","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; StructuralPartialEq for UpstreamDescriptor&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["relay_filter"] = [{"text":"impl StructuralPartialEq for FilterStatKey","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for LegacyBrowser","synthetic":false,"types":[]}];
implementors["relay_general"] = [{"text":"impl StructuralPartialEq for PatternRule","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for MultipleRule","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for AliasRule","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for RedactPairRule","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for RuleType","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for RuleSpec","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Vars","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ReplaceRedaction","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Redaction","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ValueType","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for MaxChars","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for BagSize","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Pii","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; StructuralPartialEq for Chunk&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for SelectorPathItem","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for SelectorSpec","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Breadcrumb","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ClientSdkPackage","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ClientSdkInfo","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for DeviceContext","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for OsContext","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for RuntimeContext","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for AppContext","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for BrowserContext","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for GpuContext","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for TraceId","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for SpanId","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for TraceContext","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Context","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ContextInner","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Contexts","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for NativeImagePath","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for SystemSdkInfo","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for AppleDebugImage","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for DebugId","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for CodeId","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for NativeDebugImage","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for DebugImage","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for DebugMeta","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for EventId","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ExtraValue","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for EventProcessingError","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for GroupingConfig","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Event","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Exception","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Fingerprint","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for LogEntry","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Message","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Measurements","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for CError","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for MachException","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for PosixSignal","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for MechanismMeta","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Mechanism","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Metrics","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Cookies","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for HeaderName","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for HeaderValue","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Headers","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Query","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Request","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Csp","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ExpectCt","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Hpkp","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ExpectStaple","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for SecurityReportType","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for SessionStatus","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for SessionAttributes","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for SessionUpdate","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for SessionAggregateItem","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for SessionAggregates","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Span","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Frame","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for FrameVars","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for FrameData","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for RawStacktrace","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Stacktrace","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for TagEntry","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Tags","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for TemplateInfo","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ThreadId","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Thread","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; StructuralPartialEq for Values&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; StructuralPartialEq for PairList&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for RegVal","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Addr","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for IpAddr","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Level","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for LenientString","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for JsonLenientString","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Timestamp","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Geo","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for User","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ProcessingAction","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; StructuralPartialEq for Annotated&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for RemarkType","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Remark","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ErrorKind","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Error","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for SkipSerialization","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Value","synthetic":false,"types":[]}];
implementors["relay_log"] = [{"text":"impl StructuralPartialEq for LogFormat","synthetic":false,"types":[]}];
implementors["relay_quotas"] = [{"text":"impl StructuralPartialEq for QuotaScope","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ReasonCode","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for RetryAfter","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for RateLimitScope","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for RateLimit","synthetic":false,"types":[]}];
implementors["relay_redis"] = [{"text":"impl StructuralPartialEq for RedisConfig","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()