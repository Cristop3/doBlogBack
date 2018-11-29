/**
 *  客户端请求集合 拦截之类的
 */

//引入axios
import axios from 'axios'
//引入elementUI的loading服务
import {
  Loading,
  Message
} from 'element-ui'
let loadingInstance

//设置axios请求超时 5秒
axios.defaults.timeout = 5000

//作axios请求拦截器设置
axios.interceptors.request.use(config => {
  loadingInstance = Loading.service({
    fullscreen: true, //是否全屏
    text: '正在努力加载...',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  // config.headers = {
  //   'content-Type': 'application/x-www-form-urlencoded',
  //   withCredentials: true
  // }
  //所有请求添加token给后台验证
  if(localStorage.getItem('token') != undefined && localStorage.getItem('token') != null)
    config.headers.Authorization = localStorage.getItem('token')

    loadingInstance.close()
  return config
}, err => {
  loadingInstance.close()
  Message.error({
    message: '请求超时'
  })
  return Promise.reject(err)
})

//作axios响应拦截器
axios.interceptors.response.use(data => {
  return data
}, error => {
  loadingInstance.close()
  Message.error({
    message: '加载超时'
  })
  return Promise.reject(error)
})


export default  axios
