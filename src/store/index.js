/**
 *  使用vuex 进行状态管理
 *  在这里关联 vue,vuex
 */
import Vue from 'vue'
import vuex from 'vuex'
//引入mutations的状态类型
import {
  ISCOLLAPSE,
  ADDSUBTAGS,
  CLOSESUBTAGS,
  SIGNIN,
  SIGNOUT,
  UPDATENAME
} from './mutations-type'

//引入vuex的action操作
import * as actions from './action'

//深拷贝状态初始值
function deepClone(_obj) {
  return JSON.parse(JSON.stringify(_obj))
}


//使用vuex
Vue.use(vuex)

//需要维护的状态
const state = {
  //这里指headers.vue与slide.vue关于侧边栏的收缩和展开状态
  collapse: false,
  //这里侧边栏与小标签状态 默认一个首页
  subTags: [{
    title: '首页',
    path: '/welcome'
  }],
  //存储token
  token: '',
  //登录名
  username: '',
  //登录id
  userid: 0,
  //是否登录
  isLogin: false
}

//复制初始值
const initState = deepClone(state)

//每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)
//类似于处理事件
const mutations = {
  //1.展开or收缩
  ISCOLLAPSE(state, payload) {
    //接收state和另一个对象参数
    state.collapse = payload.isCollapse
  },
  //2.添加小标签
  ADDSUBTAGS(state, payload) {
    //判断是否早存在
    if (state.subTags.length == 0) {
      state.subTags.push(payload)
    } else {
      let i = 0,
        len = state.subTags.length,
        onOff = false;
      for (i; i < len; i++) {
        if (state.subTags[i].path === payload.path) {
          onOff = true
          break
        }
      }!onOff && state.subTags.push(payload)
    }
  },
  //3.关闭小标签
  CLOSESUBTAGS(state, payload) {
    let arr = state.subTags.filter((item, index) => {
      return item.path !== payload.path
    })
    state.subTags = arr
  },
  //4.记录登录信息
  SIGNIN(state, payload) {
    localStorage.setItem('userid', payload.id)
    localStorage.setItem('username', payload.username)
    state.isLogin = true
    state.username = payload.username
    state.userid = payload.id
  },
  //5.登出：清除本地缓存和vuex重复值
  SIGNOUT(state) {
    localStorage.clear()

    //1.用户体验不太好的 刷新重置
    //window.location.reload()

    //2.太low的分别恢复至初始值
    this.state.collapse = initState.collapse
    this.state.subTags = initState.subTags
    this.state.token = initState.token
    this.state.username = initState.username
    this.state.isLogin = initState.isLogin
    this.state.userid = initState.userid

    //3.直接删除state的属性 但是没搞清楚 它又是在什么时候赋值的
    //Object.keys(state).forEach(k => Vue.delete(state, k))
  },
  //6.修改用户名
  UPDATENAME(state,payload){
    this.state.username = payload.username
    localStorage.setItem('username',this.username)
  }
}

export default new vuex.Store({
  state,
  mutations,
  actions
})
