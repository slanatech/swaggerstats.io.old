---
title:  "Prometheus"
categories: doc
---

# Prometheus Queries

> Examples of Prometheus Queries using swagger-stats metrics

<br/>


## Get Request Rate, Error Rate, Success Rate

```
sum (irate(api_request_total[1m]))

sum (irate(api_request_total{code=~"^5..$"}[1m]))

sum (irate(api_request_total{code=~"^4..$"}[1m]))

sum (irate(api_request_total{code=~"^2..$"}[1m]))

```
<br/>

## Get % of errors 

```
( api_all_errors_total / api_all_request_total ) * 100
```

<br/>

## Get Apdex Score

> How Apdex Score is calculated: [Apdex Score](https://en.wikipedia.org/wiki/Apdex) 

```
(
  sum(irate(api_request_duration_milliseconds_bucket{le="25",code=~"^2..$"}[1m]))
+
  (sum(irate(api_request_duration_milliseconds_bucket{le="100",code=~"^2..$"}[1m])) / 2)
) / sum(irate(api_request_duration_milliseconds_count[1m]))
```

<br/>

## Get Apdex Score Trend

```
(
  sum(irate(api_request_duration_milliseconds_bucket{le="25",code=~"^2..$"}[1m]))
+
  (sum(irate(api_request_duration_milliseconds_bucket{le="100",code=~"^2..$"}[1m]))/2)
) / sum(irate(api_request_duration_milliseconds_count[1m]))
```
 
<br/>

## Get Request Rate by Method

```
sum by(method) (irate(api_request_total[1m]))
``` 

<br/>

## Get % of request answered within threshold, over time 

> Use `le="XX"` to set threshold, i.e. `le="25"` for % of request answered under 25 msec.
> Values of `le` should be from the list of bucket values specified in swagger-stats option `durationBuckets` 

```
( sum(irate(api_request_duration_milliseconds_bucket{le="25"}[1m])) /  sum(irate(api_request_duration_milliseconds_count[1m])) ) * 100
``` 
 
<br/>

## Get Top 3 API Calls by Path, over time 

```
topk(3, sum(irate(api_request_total[1m])) by (path))
```   

<br/>

## Get Top 3 5XX Errors By Path, over time 

```
topk(3, sum(irate(api_request_total{code=~"^5..$"}[1m])) by (path))
```   


<br/>

## Get Node.js process CPU Usage % 

```
nodejs_process_cpu_usage_percentage
```

<br/>

## Get Node.js process Used Heap in MB

```
(nodejs_process_memory_heap_used_bytes)/1048576
```

