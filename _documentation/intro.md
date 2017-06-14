---
title:  "Introduction"
categories: doc
---

{% include logo.html %}

# Introduction

```javascript
var swStats = require('swagger-stats');    
swStats.init({swaggerSpec:swaggerSpec});
app.use(swStats.getMiddleware());
```


```json
{
  "name": "swagger-stats",
  "version": "0.40.1",
  "description": "Collect and monitor REST API statistics in node app, based on Swagger API specification",
  "main": "lib/index.js",
  "scripts": {
    "start": "node example/app.js",
    "test": "mocha",
    "webpack": "webpack"
  },
  "keywords": [
    "statistics",
    "usage",
    "monitoring",
    "restful",
    "api",
    "express",
    "swagger",
    "schema"
  ],
  "license": "MIT",
  "dependencies": {
    "log4js": "^1.1.0"
  },
  "devDependencies": {
    "express": "^4.14.1",
    "body-parser": "^1.15.0",
    "serve-favicon": "^2.3.0",
    "serve-static": "^1.11.0",
    "swagger-jsdoc": "^1.9.1",
    "swagger-parser": "^3.4.1",
    "cuid": "^1.3.8",
    "chai": "^3.5.0",
    "chokidar": "^1.6.1",
    "istanbul": "^0.4.2",
    "jscs": "^3.0.0",
    "mocha": "^3.2.0",
    "mocha-jscs": "^5.0.0",
    "mocha-jshint": "^2.3.1",
    "supertest": "^2.0.1",
    "webpack": "^2.2.1",
    "moment": "^2.17.1",
    "jquery": "^3.1.1",
    "bootstrap": "^3.3.7",
    "datatables": "^1.10.13",
    "font-awesome": "^4.7.0",
    "chart.js": "^2.5.0"
  }
}
```
