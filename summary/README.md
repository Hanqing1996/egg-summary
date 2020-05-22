#### web 框架
* express
* egg.js（阿里）
* koa（精简，直接支持 async,await）
* hapi（高性能）
* fastify

#### fork 进程
> 作用是克隆进程，也就是将原先的一个进程再克隆出一个来，克隆出的这个进程就是原进程的子进程，这个子进程和其他的进程没有什么区别，同样拥有自己的独立的地址空间。不同的是子进程是在fork返回之后才开始执行的，就像一把叉子一样，执行fork之后，父子进程就分道扬镳了，所以fork这个名字就很形象，叉子的意思。


#### egg.js 允许 post 请求
```
// config/config.default.js

config.security = {
    csrf:{
      enable:false
    }
};
```

#### 为什么 app 目录下默认没有 model 文件夹
> 因为 egg 的 model 一般是基于 sequelize 的

#### 高内聚
> 同一模型内部，具有强共性和强联系

#### 低耦合
> 改A必改B

#### sequelize
* 是一种 ORM（Object Relationship Map）

#### service 
> 在现代的 web 应用中，MVC 中的 Model 承担的部分过重，因此需要 service 做更具体的封装

#### loader
> 将文件以属性形式加载到对象上
* 比如我想通过 this.ctx.model.product 访问 model/product.js 文件
```
// app.js
'use strict';
const path=require('path');

module.exports=app=>{
    const modelPaths=app.loader.getLoadUnits().map(unit=>path.join(unit.path,'app/model'));
    app.loader.loadToContext(modelPaths,'model')
}
```