---
title:  "sysstats"
categories: doc api
---
<a name="jsd-sysstats">

# sysstats

> System statistics - memory usage and CPU usage of node process. As returned by process.memoryUsage() and process.cpuUsage().

|Name           |Type     |Description
|:--------------|:--------|:----------
|`rss`|integer|Memory Usage - Resident Set Size, as returned by process.memoryUsage()
|`heapTotal`|integer|Memory Usage - Total Size of the Heap, as returned by process.memoryUsage()
|`heapUsed`|integer|Memory Usage - Heap actually Used, as returned by process.memoryUsage()
|`external`|integer|Memory Usage - External memory, as returned by process.memoryUsage()
|`cpu`|integer|CPU Usage % - as returned by process.cpuUsage(), calculated per [https://github.com/nodejs/node/pull/6157](https://github.com/nodejs/node/pull/6157)
