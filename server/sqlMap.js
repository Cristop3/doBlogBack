/**
 *  sql语句的映射
 */

 const sqlMap = {
     //登录
     login:{
         post:'select count(1) as f_isexist,t.id,t.username,t.headPic from tb_doblogback_user t where t.username = ? and t.password = ? GROUP BY t.id;'
     },
     //获取所有标签
     tips:{
         get:'select t.* from tb_doblogback_tips t ORDER BY t.f_tipsorder'
     },
     //修改用户名
     updateName:{
         post:'update tb_doblogback_user t set t.username = ? where t.id = ?'
     },
     //修改密码
     updatePsd:{
         post:'update tb_doblogback_user t set t.password =? where t.id = ?'
     }
 }

 module.exports = sqlMap