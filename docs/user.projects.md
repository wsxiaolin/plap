## 概述

包括用户登录、获取项目摘要、详细信息、支持者以及查询作品列表等。以下是该库的功能介绍及使用示例。


## 使用方法

首先，导入库并创建一个 `User` 实例：

```javascript
const pl = require("plweb");
const User = pl.User;

const user = new User(process.env.XIAOLIN, process.env.PASSWORD);
await user.user.login();
```

## 功能

### 1. 获取项目详细信息

- **方法**: `user.projects.getDerivatives(id, type)`
- **参数**:
  - `id` (string): 项目的唯一标识符。
  - `type` (string): 项目的类型，例如 `"Discussion"`。
- **返回**: Promise，解析为包含项目详细信息的对象。

```javascript
const details = await user.projects.getDerivatives(id, type);
console.log(details.Data.Supporters);
```

### 2. 获取项目摘要

- **方法**: `user.projects.getSummary(id, type)`
- **参数**:
  - `id` (string): 项目的唯一标识符。
  - `type` (string): 项目的类型，例如 `"Discussion"`。
- **返回**: Promise，解析为包含项目摘要的对象。

```javascript
let summary = await user.projects.getSummary(id, type);
console.log(summary.Data.Description[0]);
```

### 3. 获取项目支持者

- **方法**: `user.projects.getSupporters(id, type, pageNumber)`
- **参数**:
  - `id` (string): 项目的唯一标识符。
  - `type` (string): 项目的类型，例如 `"Discussion"`。
  - `pageNumber` (number): 获取支持者的页码。
- **返回**: Promise，解析为包含支持者信息的对象。

```javascript
const supporters = await user.projects.getSupporters(id, type, 4);
console.log(supporters.Data.$values[0]);
```

### 4. 查询作品列表

- **方法**: `user.projects.query(type, options)`
- **参数**:
  - `type` (string): 查询的项目类型，例如 `"Discussion"`。
  - `options` (object): 查询选项，包括：
    - `tags` (array): 标签数组，例如 `["精选"]`。
    - `take` (number): 获取的项目数量。
- **返回**: Promise，解析为包含项目列表的对象。

```javascript
const results = await user.projects.query("Discussion", {
  tags: ["精选"],
  take: 30,
});
console.log(results.Data.$values.length);
```

### 5. 收藏项目

- **方法**: `user.projects.star(id, type, isStarred)`
- **参数**:
  - `id` (string): 项目的唯一标识符。
  - `type` (string): 项目的类型，例如 `"Discussion"`。
  - `isStarred` (boolean): 是否收藏该项目。
- **返回**: Promise，解析为包含收藏状态的对象。

```javascript
const response = await user.projects.star(id, type, true);
console.log(response.Data.User.ID);
```
