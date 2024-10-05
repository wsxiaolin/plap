# 物理实验室网络 API 接口

这是[物理实验室 APP](https://turtlesim.com/products/physics-lab/index-cn.html)的一些常用网络接口的封装，便于自建脚本机器人、收集作品数据等公开的个人信息。请勿用于违规内容。

## 优势

- 专注于webapi，轻便，针对性强
- 利用async/await语法，面向过程变成，代码可读性强，开发易如拖拽式变成
- 专门提供机器人实例，三分钟在物实部署你自己的AI助手
- 更佳优秀的报错机制，包含请求头、体、链接等内容，快捷溯源
- 权限认证等问题无需您再处理
- 挖掘API新用法，实现APP无法达到的功能，甚至还能体验未公开的api
- 自定义超时、日志记录、代理服务器（BaseURL）等
- 10kb文档，详细，所有接口均有示例用法
- 经常借鉴()其他物实库的功能，像换封面等都已在第一时间封装

## 安装

使用 npm 进行安装：

```bash
npm install plweb
```

## 使用方法

欢迎使用 `plap`（，导入相关包后，可以直接调用相应的方法。有关方法的详细列表，请查看[仓库](https://github.com/wsxiaolin/plap)，**请务必阅读文档**

库导出一个 pl 对象：

```JavaScript
{
  User,
  Bot,
  computation,
  setConfig: function(newConfig) {
    setConfig(newConfig);
  },
  getConfig: function() {
    return getConfig();
  }
};
```

pl.User：创建一个物实用户对象，可调用**物实原生 API“**，注意：创建后需要先调用`userinstance.user.login()`方法

pl.Bot：物实脚本机器人是一个用于自动回复和处理消息的工具，内置了回复、读取信息、过滤消息、异步处理和任务队列等功能。

pl.set/getConfig：主要用于控制台的输出和报错，详见文档

## 参与贡献

使用 jest 测试框架以及 axios 库，对代码风格没有过大要求，格式化即可，但是请注意：

- 尽量使用 async/await 语法
- 写文档注释
- pr之前记得跑测试：`npm test`
- 请直接使用 axios 实例对象封装接口（位于/src 下），无需操心登录问题，例如：

```Javascript
const plrequest = require("../axiosInstance");
module.exports = async function(id) {
  const response = await plrequest.post(
    "/Users/GetUser",
    {
      body
    },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Accept-Language": "zh-CN",
        "x-API-Token": this.token,
        "x-API-AuthCode": this.authCode,
      },
    }
  );
  return response.data;
};
```

请联系：xiegushi2022@outlook.com
