/**
 *  node:express服务器入口文件
 */
  //引入接口文件
  const API = require('./api/api')

   //引入body-parser:解决post方式访问
 const BODYPARSER = require('body-parser')

 //引入express服务
 const EXPRESS = require('express')

 //声明express对象
 let app = EXPRESS()



 //使用body-parser
 app.use(BODYPARSER.json())
 app.use(BODYPARSER.urlencoded({
     extended:false
 }))

 //后端路由API
 app.use('/api',API)

 //启动服务器
 let server = app.listen(3003,'127.0.0.1', ()=> {
    console.log('已启动了node服务在：'+server.address().address+":"+server.address().port)
 })
