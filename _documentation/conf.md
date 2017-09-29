---
title:  "Configuration"
categories: doc configuration
---

# Configuration

> swagger-stats supports multiple configurations options that you can pass when initializing swagger-stats middleware


Here is the list of supported options:


|Option         |Description |Example Value
|:--------------|:----------|:----------
|`name`|Your Service Name. Defaults to hostname if not specified. Will be returned in stats as specified.|`myservice`|
|`version`|Your Service Version. Will be returned in stats as specified.|`1.0.0`|
|`hostname`|Hostname. Will attempt to detect if not provided|`myhost.mydomain.com`|
|`ip`|IP Address. Will attempt to detect if not provided|`127.0.0.1`|
|`swaggerSpec`|Swagger specification object. Should be pre-validated and with resolved references. Optional.|swagger spec object|
|`uriPath`|Base path for swagger-stats APIs.<br/>If specified, will be used to serve UI, stats and metrics like this:<br>`/{uriPath}/ui`, `/{uriPath}/stats`, `/{uriPath}/metrics`<br/>If not specified, defaults to `/swagger-stats`|`/myservice`|
|`timelineBucketDuration`|Duration of timeline bucket in milliseconds. Default: `60000` (1min) making timeline 1 hour. Timeline always stores 60 last time buckets, with this option you may adjust timeline granularity and length.|`10000`|
|`durationBuckets`|Buckets for duration histogram metrics, in Milliseconds. Default:<br/>`[5, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000]`<br/>The default buckets are tailored to broadly measure API response time.Most likely needs to be defined per app to account for application specifics.|`[25, 100, 500, 5000, 10000]`|
|`requestSizeBuckets`|Buckets for request size histogram metric, in Bytes. Default:<br/>`[5, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000]`<br/>The default buckets are tailored to broadly measure API request size.Most likely needs to be defined per app to account for application specifics.|`[500, 10000, 10000]`|
|`responseSizeBuckets`|Buckets for response size histogram metric, in Bytes. Default:<br/>`[5, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000]`<br/>The default buckets are tailored to broadly measure API response size.Most likely needs to be defined per app to account for application specifics.|`[100, 200, 3000, 400,1000,10000]`|

<br/>
<br/>


## Simplest Configuration

The simplest configuration for swagger-stats is no options at all. If you pass no options, swagger-stats will work based on defaults.
In this case, without swagger specification, swagger-stats will detect API operations on the fly based on express routes (i.e. `/myapi/:param`),
and it will calculate statistics for detected API operations.

> If your existing app does not have swagger specification, you can still use swagger-stats to monitor API defined by Express routes 

```javascript
var express = require('express');
var app = module.exports = express();

var swStats = require('swagger-stats');
app.use(swStats.getMiddleware({}));
```

<br/>
<br/>


## Just the Spec Configuration

> Typically you would provide just the Swagger specification to swagger-stats and rely on defaults for other options

```javascript
var express = require('express');
var app = module.exports = express();
var swStats = require('swagger-stats');    
var apiSpec = require('swagger.json');
// Enable swagger-stats middleware in express app, passing swagger specification as option 
app.use(swStats.getMiddleware({swaggerSpec:apiSpec}));

```  