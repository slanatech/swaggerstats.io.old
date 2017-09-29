---
title:  "conf-sample"
categories: doc sample
---

# Swagger-stats full configuration 

```javascript

// Express 
var express = require('express');
var app = module.exports = express();

// Using swagger-parser to validate swagger spec
var swaggerParser = require('swagger-parser');

var specLocation = 'petstore.yaml';
var swaggerSpec = null;
var parser = new swaggerParser();


parser.validate(specLocation,function(err, api) {
    if (!err) {
        debug('Success validating swagger file!');
        swaggerSpec = api;

        // Enable swagger-stats middleware with all options
        app.use(swStats.getMiddleware({
            name: 'swagger-stats-spectest',
            version: '0.91.0',
            hostname: "hostname",
            ip: "127.0.0.1",
            timelineBucketDuration: 60000,
            swaggerSpec:swaggerSpec,
            uriPath: '/swagger-stats',
            durationBuckets: [100, 1000, 5000, 20000],
            requestSizeBuckets: [500, 5000, 15000, 50000],
            responseSizeBuckets: [600, 6000, 6000, 60000]
        }));
        
        // . . . . . . . . 

    }
});
```




