// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//引入vue.js
import Vue from 'vue'

import App from './App'

//引入前端路由
import router from './router'

//引入vuex状态管理
import store from './store/index'

//引入阿里巴巴图标库
import './assets/icon/iconfont.css'

//引入axios并改写vue原型链
//import axios from 'axios'
import axios from './axios/index'
Vue.prototype.$ajax = axios

//引入elementUI及其配套的样式 并使用
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(elementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //使用路由
  store, //使用vuex

  //这里使用render来替代字符串模板
  //render:h => h(App)

  components: { App },
  template: '<App/>'
})
