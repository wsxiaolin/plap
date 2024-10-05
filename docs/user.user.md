## 简介

- login: 登录物实账号（不支持第三方登录），返回活动信息+个人账号信息
- getUser: 获取**其他**用户的资料卡信息(id)
- getUserByComments: 根据留言/评论 ID获取评论者详细信息(id:从getComents获取到的Data.Commnets[i].ID)


```JavaScript
	const user = new pl.User();
	await user.user.login();
	const re = await user.user.getUser("60e933da4ad4cae147f48a66");}
```
