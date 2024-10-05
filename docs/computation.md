## 简介

computation 提供一些**非原生**的计算方法，**第一个参数均需要传入`pl.User()`的实例**（需要登录），调用 computaion 的方法后，会自动调用实例对象的原生方法并且返回最终结果

## 方法

### count 类

- count.supports(user,works:[id:str]): 获取传入序列号的作品中，每个支持者共支持了几次

## 使用示例

```javascript
const user = new pl.User();
await user.user.login();
const re = await pl.computation.count.supporter(user, [
	"66febdd83c7548d804bc4054",
    "66aba6d4b833e126e377899a",
]);
console.log(re.size())
```
