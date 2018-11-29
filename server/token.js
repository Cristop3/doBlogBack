/**
 *  在node端 生成token 返回给客户端
 *  每次请求验证token(是否过期，是否正确)
 */

//引入node crypto模块的目的是为了提供通用的加密和哈希算法
const crypto = require('crypto')

//引入jsonwebtoken
const jwt = require('jsonwebtoken')

//私密钥匙
const secretOrPrivateKey = 'i am a body'

//token负荷说明
let payload = {
  iss: 'caristop3',
  sub: 'token',
  created: Math.floor(Date.now() / 1000) //创建时间 到时候好对比
}

let token = {
  //创建token
  createToken() {
    let myToken = jwt.sign(payload, secretOrPrivateKey, {
      expiresIn: 60 * 60 * 24
    })
    return myToken
  },
  //验证token
  checkToken(req, res) {
    let token = req.headers.authorization || req.headers['x-access-token']

    return jwt.verify(token, secretOrPrivateKey, function (err, decoded) {
      if (err || !decoded) {
        res.send({
          data: null,
          success: false,
          msg: err
        })
        return false
      }
      return true
    })

  }
}

module.exports = token
