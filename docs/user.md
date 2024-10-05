###User 对象

在创建 `User` 实例时，请传入用户名和密码。若传入 `null`，则自动进行匿名登录；未传参数时，将读取本地环境变量 `USERNAME` 和 `PASSWORD`，如果不存在则进行匿名登录。请注意，匿名状态下部分功能可能会受到限制，**登录时不要传递参数**。


####属性

-`username`:用户名  
-`password`:密码  
-`token`:认证令牌  
-`authCode`:授权码

####方法

#####user

-**login**:用户登录(username,password)  
-**getUser**:获取用户信息(userID)  
-**getUserByComments**:根据评论获取用户信息(cmmentID)

#####messages

-**get**:获取留言/评论，实验+讨论+用户留言板均可(id,type[,take,from,skip])  
-**comment**:留言或评论(id,content[,type,被回复的人的序列号])

#####projects

-**query**:筛选作品列表(type,query{tags,excludeTags,take,from,skip})  
-**getSummary**:获取作品简略信息(id,type)  
-**getDerivatives**:获取作品详细信息(id,type)  
-**star**:收藏作品(id,type[,true/false])  
-**getSupporters**:获取作品支持者(id,type)

#####experiment

-**update**:更新实验(summary,workspace)  
-**cover**:更新实验封面(imagePath,id,type)  
-**get**:获取实验信息(id,type)
