/**
 *  前台请求数据API接口
 */

 //引入文件模块
 const FS = require('fs')

 //引入路径模块
 const PATH = require('path')



 //引入图片处理
 const FORMIDABLE = require('formidable')

//引入mysql配置文件
const dbModels = require('../db')

//引入express框架
const EXPRESS = require('express')

//声明express路由
const router = EXPRESS.Router()

//引入mysql模块
const mysql = require('mysql')

//引入sql语句的映射
const $sql = require('../sqlMap')

//引入token文件
const token = require('../token')

//创建数据库连接
let conn = mysql.createConnection(dbModels.mysql)

//连接
conn.connect()


//1.登录接口
router.post('/login', (req, res) => {
  //获取seq语句
  let sql = $sql.login.post
  //获取前台传入用户名和密码
  let params = req.body

  conn.query(sql, [params.username, params.password], (err, result) => {
    if (err) {
      res.json({
        success: false,
        msg: '查询失败'
      })
    }
    if (result) {
      if (typeof result === 'undefined') {
        res.json({
          successs: false,
          msg: 'sql操作失败'
        })
      } else {
        //用户名密码验证成功 生成token返回客户端
        //console.log(token.createToken())
        res.json({
          success: true,
          token: token.createToken(),
          dataset: result
        })
      }
    }
  })
})

//2.获取所有标签
router.get('/tips', (req, res, next) => {
  //验证token
  if (token.checkToken(req)) {
    let sql = $sql.tips.get
    conn.query(sql, (err, result) => {
      if (err) {
        res.json({
          success: false,
          msg: '查询失败'
        })
      }
      if (result) {
        if (typeof result === 'undefined') {
          res.json({
            successs: false,
            msg: 'sql操作失败'
          })
        } else {
          res.json({
            success: true,
            dataset: result
          })
        }
      }
    })
  }
})

//3.修改用户名
router.post('/updateName',(req,res,next) => {
    //验证token
    if(token.checkToken(req,res)){
      let sql = $sql.updateName.post
      let params = req.body

      conn.query(sql,[params.username,params.id],(err,result) => {
        if (err) {
          res.json({
            success: false,
            msg: '查询失败'
          })
        }
        if (result) {
          if (typeof result === 'undefined') {
            res.json({
              successs: false,
              msg: 'sql操作失败'
            })
          } else {
            res.json({
              success: true,
              dataset: params.username
            })
          }
        }
      })
    }
})

//4.修改密码
router.post('/updatePsd',(req,res,next) => {
  if(token.checkToken(req,res)){
    let sql = $sql.updatePsd.post
    let params = req.body
    conn.query(sql,[params.psd,params.id],(err,result) => {
      if (err) {
        res.json({
          success: false,
          msg: '查询失败'
        })
      }

      if (result) {
        if (typeof result === 'undefined') {
          res.json({
            successs: false,
            msg: 'sql操作失败'
          })
        } else {
          res.json({
            success: true,
            dataset: params.psd
          })
        }
      }
    })
  }
})

//5.修改头像
router.post('/upload',(req,res,next) => {
  let form = new FORMIDABLE.IncomingForm()
  form.encoding = 'utf-8'
  form.uploadDir = PATH.join(__dirname+'/../upload')
  form.keepExtensions = true //保留后缀
  form.maxFieldSize = 2*1024*1024

  //处理图片
  form.parse(req,(err,fields,files) => {
    let filename = files.file.name,
    nameArray = filename.split('.'),
    type = nameArray[nameArray.length - 1],
    name = '';

    for(var i = 0;i<nameArray.length - 1;i++){
      name = name + nameArray[i]
    }

    let date = new Date(),
    time = '_' + date.getFullYear() + "_" + date.getMonth() + "_" + date.getDay() + "_" + date.getHours() + "_" + date.getMinutes(),
    avatarName = name + time + '.' + type,
    newPath = form.uploadDir + '/' + avatarName;

    //存入数据库
    

    //反写磁盘上的图片名称
    FS.renameSync(files.file.path,newPath)

    //返回前台
    res.send({data:"/upload/"+avatarName})
  })
})

module.exports = router
