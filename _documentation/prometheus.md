---
title:  "Prometheus"
categories: doc
---

# Prometheus Support

**swagger-stats** exposes metrics in [Prometheus](https://prometheus.io/) format, so you may use [Prometheus](https://prometheus.io/) and [Grafana](https://grafana.com/) for API monitoring and alerting

swagger-stats exposes Prometheus metrics via `/swagger-stats/metrics`:

> **GET /swagger-stats/metrics** 

The following metrics are provided:

|Name           |Type     |Labels |Description
|:--------------|:--------|:----------|:----------
|`api_all_request_total`|counter|-|The total number of all API requests received|
|`api_all_success_total`|counter|-|The total number of all API requests with success response|
|`api_all_errors_total`|counter|-|The total number of all API requests with error response|
|`api_all_client_error_total`|counter|-|The total number of all API requests with client error response|
|`api_all_server_error_total`|counter|-|The total number of all API requests with server error response|
|`api_all_request_in_processing_total`|gauge|-|The total number of all API requests currently in processing (no response yet)|
|`nodejs_process_memory_rss_bytes`|gauge|-|Node.js process resident memory (RSS) bytes|
|`nodejs_process_memory_heap_total_bytes`|gauge|-|Node.js process memory heapTotal bytes|
|`nodejs_process_memory_heap_used_bytes`|gauge|-|Node.js process memory heapUsed bytes|
|`nodejs_process_memory_external_bytes`|gauge|-|Node.js process memory external bytes|
|`nodejs_process_cpu_usage_percentage`|gauge|-|Node.js process CPU usage percentage|
|`api_request_total`|counter|method<br/>path<br/>code|The total number of all API requests|
|`api_request_duration_milliseconds`|histogram|method<br/>path<br/>code<br/>le|API requests duration|
|`api_request_size_bytes`|histogram|method<br/>path<br/>code<br/>le|API requests size|
|`api_response_size_bytes`|histogram|method<br/>path<br/>code<br/>le|API response size|

<br/>
<br/>


## Grafana Dashboards

> **swagger-stats** Grafana Dashboards are published at [https://grafana.com/dashboards?search=swagger-stats](https://grafana.com/dashboards?search=swagger-stats)

<br/>
<br/>

## Getting Prometheus Metrics 

```
$ curl http://<your app host:port>/swagger-stats/metrics
```
```
# HELP api_all_request_total The total number of all API requests received
# TYPE api_all_request_total counter
api_all_request_total 302

# HELP api_all_success_total The total number of all API requests with success response
# TYPE api_all_success_total counter
api_all_success_total 267

# HELP api_all_errors_total The total number of all API requests with error response
# TYPE api_all_errors_total counter
api_all_errors_total 35

. . . .

# HELP api_request_total The total number of all API requests
# TYPE api_request_total counter
api_request_total{method="GET",path="/v2/pet/findByStatus",code="200"} 13
api_request_total{method="GET",path="/v2/store/order/{orderId}",code="200"} 16
api_request_total{method="GET",path="/v2/store/inventory",code="200"} 16
api_request_total{method="GET",path="/v2/user/{username}",code="200"} 18
api_request_total{method="POST",path="/v2/pet/{petId}",code="404"} 1
api_request_total{method="POST",path="/v2/pet/{petId}/uploadImage",code="200"} 18
api_request_total{method="POST",path="/v2/pet",code="200"} 16
api_request_total{method="PUT",path="/v2/user/{username}",code="200"} 12
api_request_total{method="GET",path="/v2/pet/findByTags",code="200"} 15

. . . .
# HELP api_request_duration_milliseconds API requests duration
# TYPE api_request_duration_milliseconds histogram
api_request_duration_milliseconds_bucket{le="5",method="GET",path="/v2/store/order/{orderId}",code="200"} 1
api_request_duration_milliseconds_bucket{le="10",method="GET",path="/v2/store/order/{orderId}",code="200"} 1
api_request_duration_milliseconds_bucket{le="25",method="GET",path="/v2/store/order/{orderId}",code="200"} 3
api_request_duration_milliseconds_bucket{le="50",method="GET",path="/v2/store/order/{orderId}",code="200"} 7
api_request_duration_milliseconds_bucket{le="100",method="GET",path="/v2/store/order/{orderId}",code="200"} 16
api_request_duration_milliseconds_bucket{le="250",method="GET",path="/v2/store/order/{orderId}",code="200"} 16
api_request_duration_milliseconds_bucket{le="500",method="GET",path="/v2/store/order/{orderId}",code="200"} 16
api_request_duration_milliseconds_bucket{le="1000",method="GET",path="/v2/store/order/{orderId}",code="200"} 16
api_request_duration_milliseconds_bucket{le="2500",method="GET",path="/v2/store/order/{orderId}",code="200"} 16
api_request_duration_milliseconds_bucket{le="5000",method="GET",path="/v2/store/order/{orderId}",code="200"} 16
api_request_duration_milliseconds_bucket{le="10000",method="GET",path="/v2/store/order/{orderId}",code="200"} 16
api_request_duration_milliseconds_bucket{le="+Inf",method="GET",path="/v2/store/order/{orderId}",code="200"} 16
api_request_duration_milliseconds_sum{method="GET",path="/v2/store/order/{orderId}",code="200"} 911
api_request_duration_milliseconds_count{method="GET",path="/v2/store/order/{orderId}",code="200"} 16
. . . . 

```

<br/>
<br/>

## Example Prometheus scrape configuration

```
scrape_configs:

  - job_name: 'sws-testapp'
    scrape_interval: '10s'
    metrics_path: '/swagger-stats/metrics'
    static_configs:
      - targets: ['localhost:3030']

  - job_name: 'sws-spectest'
    scrape_interval: '10s'
    metrics_path: '/swagger-stats/metrics'
    static_configs:
      - targets: ['localhost:3040']

```