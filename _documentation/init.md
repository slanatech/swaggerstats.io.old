---
title:  "Initialization"
categories: doc 
---

### Initialization

Initialize swagger-stats in your app:

```javascript
var swStats = require('swagger-stats');    
swStats.init({swaggerSpec:swaggerSpec});
app.use(swStats.getMiddleware());
```

Then 
