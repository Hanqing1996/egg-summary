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
> 在现代的 web 应用中，MVC 中的 Model 承担的部分过重，因此需要 service 做更具体的封装/扩展

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

#### context
一次请求的上下文

#### 什么样的逻辑放 service
> 将 model 的部分逻辑转移至 service 中
1. 跨 model 操作
    * userModel 不要调用 productModel，放到 service 里去处理。
    * cartService 最好不要调用 userService，而让 cartController 中去调用 userService
2. model 中涉及复杂运算的部分
3. model 抽象方法的调用（对 controller 与 model 解耦），比如库存的查询

#### 需求
1. 用户系统->支持登录验证
2. 商品->支持商品查看，购买
3. 购物车->支持用户在购物车中添加商品

#### 将基础的 service 封装成中间件
* 以 auth.js 为例
1. 在 middleware 目录下创建 auth.js
2. 在 router.js 中指定中间件的插入位置

#### AOP
* [AOP 的作用：](https://www.zhihu.com/question/24863332/answer/29265319)
* middleware 就是 AOP 的应用例子

#### 鉴权的正确流程
1. password 不能以明文形式存于数据库（要加盐）
2. 



#### child_process
* 一个方法：spawn
* 一个类：ChildProcess
* 进程通讯
    * stdin,stdout  
    * ipc

#### [egg 的多进程](https://eggjs.org/zh-cn/core/cluster-and-ipc.html)
* 为什么一段时间内，只能有一个 Node.js 进程运行在一个 CPU 上
1. 我们说 Node.js 是单线程的（其实不太准确，因为 libuv 在IO，网络请求方面用到了多线程），是因为 用于解析 js 的 v8 是单线程的。
2. 所以一个 Node.js 进程只由一个 js 线程构成（只考虑计算等任务）
3. 而 OS 大多支持线程调度（即线程是 CPU 的最小调度单位，某一时间段内某个 CPU 上只有一个进程在运行） 
2. 所以说，一段时间内，只能有一个 Node.js 进程运行在一个 CPU 上
* [HTTP和TCP的区别](https://www.zhihu.com/question/38648948)
1. TCP 只负责建立连接及保证连接可靠，至于传输内容，它不理会。
2. HTTP 规定了传输的内容（请求体，响应体内容，格式...）。可以认为 HTTP 是基于 TCP 的。 
3. Node.js 的进程端口监听由 TCP 实现。
* [为什么通过 cluster 模块 fork 出的多个子进程可以同时监听一个端口](https://cnodejs.org/topic/56e84480833b7c8a0492e20c)
1. 端口仅由master进程中的内部TCP服务器监听了一次。
2. 不会出现端口被重复监听报错，是由于，worker进程中，最后执行监听端口操作的方法，已被cluster模块主动hack。
* Node.js 是非阻塞的，怎么理解？
1. web service 相关任务可以分为计算密集型（CPU耗时）和IO密集型（IO，网络请求等耗时）
2. JavaScript 是单线程，非阻塞的。具体来说它利用 EventLoop 机制保证那些耗时的 IO 操作由其他线程（C++等）执行，执行完毕后通知 js 单进程拿结果（异步）。所以说 js 不会被 IO 阻塞。
3. 相比之下，java 比较实诚，它会开多个线程，然后耐性地等IO完成再执行自己下一步的任务。


















