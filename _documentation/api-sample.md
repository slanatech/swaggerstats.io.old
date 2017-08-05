---
title:  "api-sample"
categories: doc sample
---

## How to get statistics via API 

```
$ curl http://<your app host:port>/swagger-stats/stats
```
```json
{
  "startts": 1501647865959,
  "all": {
    "requests": 7,
    "responses": 7,
    "errors": 3,
    "info": 0,
    "success": 3,
    "redirect": 1,
    "client_error": 2,
    "server_error": 1,
    "total_time": 510,
    "max_time": 502,
    "avg_time": 72.85714285714286,
    "total_req_clength": 0,
    "max_req_clength": 0,
    "avg_req_clength": 0,
    "total_res_clength": 692,
    "max_res_clength": 510,
    "avg_res_clength": 98,
    "req_rate": 1.0734549915657108,
    "err_rate": 0.4600521392424475
  },
  "sys": {
    "rss": 59768832,
    "heapTotal": 36700160,
    "heapUsed": 20081776,
    "external": 5291923,
    "cpu": 0
  },
  "name": "swagger-stats-testapp",
  "version": "0.90.1",
  "hostname": "hostname",
  "ip": "127.0.0.1"
}
```




