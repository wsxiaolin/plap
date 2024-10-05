## 实验管理类 API

请先导入库，并且完成非匿名登录，确保你有足够权限完成这一操作

### 1. 获取实验存档

权限：非匿名用户，参数为作品 ID 和类型

```javascript
async function main() {
  const re = await user.experimet.get("668d3bdb9e258e6b2f4fbaa4", "Discussion");
  console.log(re);
}
```

### 2. 更新实验介绍等

权限：作者或合作者，直接修改作品的 summary

```javascript
async function main() {
  let summary = await user.projects.getSummary(
    "66a7940d744ed757b46f7f1d",
    "Discussion"
  );
  summary.Data.Description.push("[故事]这个实验通过调用物实网络api更新");

  await user.projects.update(summary.Data);
}
```

### 3. 改封面

权限同 2

```javascript
async function main() {
  await user.experimet
    .cover(
      "/sdcard/Pictures/Screenshots/Screenshot_20240807_101242_com.huawei.browser.jpg",
      "Discussion",
      "66b2d93a197f935d74b46c6e"
    )
    .then(() => {
      console.log("成功");
    })
    .catch((e) => {
      console.log(e);
    })
    .finally(() => {
      process.exit(0);
    });
}
```
