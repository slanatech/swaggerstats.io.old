---
title:  "baselinestats"
categories: doc api
---
<a name="jsd-baselinestats">

# baselinestats

> Baseline statistics object. Provides core metrics on request-reponse processing. Baseline statistics are calculated in in several different contexts.
* `all` stats contains total values for all requests and responses
* In `timeline`, each bucket contains baseline stats calculated for a time interval
* In `method` baseline stats are calculated per each request method
* `apistats` provides baseline stats per each API Operation


|Name           |Type     |Description
|:--------------|:--------|:----------
|`requests`|integer|Total number of requests received
|`responses`|integer|Total number of responses sent
|`errors`|integer|Total number of error responses
|`info`|integer|Total number of informational responses
|`success`|integer|Total number of success responses
|`redirect`|integer|Total number of redirection responses
|`client_error`|integer|Total number of client error responses
|`server_error`|integer|Total number of server error responses
|`total_time`|integer|Sum of total processing time (from request received to response finished)
|`max_time`|integer|Maximum observed processed time
|`avg_time`|number|Average processing time
|`total_req_clength`|integer|Total (Sum) of Content Lengths of received requests
|`max_req_clength`|integer|Maximum observed Content length in received requests
|`avg_req_clength`|number|Average Content Length in received requests
|`total_res_clength`|integer|Total (Sum) of Content Lengths of sent responses
|`max_res_clength`|integer|Maximum observed Content Length in sent responses
|`avg_res_clength`|number|Average Content Length in sent responses
|`req_rate`|number|Request Rate
|`err_rate`|number|Error Rate
