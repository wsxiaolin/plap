## 简介

导出的对象支持对请求进行一些配置，可用配置如下：

```JavaScript
const Pl = require("physics-lab-web-api");

Pl.setConfig({
  timeout: 5000,
  consolelog: false,
  consoleResponse: false,
  consoleError: false, // 打印详细的错误信息
  checkHttpsAgent: false,
});

```