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
|`api_request_duration_milliseconds`|histogram|method<br/>path<br/>le|API requests duration|
|`api_request_size_bytes`|histogram|method<br/>path<br/>le|API requests size|
|`api_response_size_bytes`|histogram|method<br/>path<br/>le|API response size|

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
api_all_request_total 80
. . . .
# HELP api_request_total The total number of all API requests
# TYPE api_request_total counter
api_request_total{method="GET",path="/v2/pet/{petId}",code="200"} 1
api_request_total{method="GET",path="/v2/pet/{petId}",code="302"} 1
. . . .
# HELP api_request_duration_milliseconds API requests duration
# TYPE api_request_duration_milliseconds histogram
api_request_duration_milliseconds_bucket{method="GET",path="/v2/pet/{petId}",le="5"} 3
api_request_duration_milliseconds_bucket{method="GET",path="/v2/pet/{petId}",le="10"} 3
api_request_duration_milliseconds_bucket{method="GET",path="/v2/pet/{petId}",le="25"} 4
api_request_duration_milliseconds_bucket{method="GET",path="/v2/pet/{petId}",le="50"} 4
api_request_duration_milliseconds_bucket{method="GET",path="/v2/pet/{petId}",le="100"} 4
api_request_duration_milliseconds_bucket{method="GET",path="/v2/pet/{petId}",le="250"} 4
api_request_duration_milliseconds_bucket{method="GET",path="/v2/pet/{petId}",le="500"} 4
api_request_duration_milliseconds_bucket{method="GET",path="/v2/pet/{petId}",le="1000"} 4
api_request_duration_milliseconds_bucket{method="GET",path="/v2/pet/{petId}",le="2500"} 4
api_request_duration_milliseconds_bucket{method="GET",path="/v2/pet/{petId}",le="5000"} 4
api_request_duration_milliseconds_bucket{method="GET",path="/v2/pet/{petId}",le="10000"} 4
api_request_duration_milliseconds_bucket{method="GET",path="/v2/pet/{petId}",le="+Inf"} 4
api_request_duration_milliseconds_count{method="GET",path="/v2/pet/{petId}"} 4
api_request_duration_milliseconds_sum{method="GET",path="/v2/pet/{petId}"} 12
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