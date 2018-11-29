/**
 *  整个系统的前台路由配置处
 *  使用了页面重定向redirect
 *  使用了页面懒加载resolve
 * 
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//定义路由集合
const routers = {
  routes: [
    //初次登录系统重定向
    {
      path: '/',
      redirect:'/login' //vue-router的重定向到登录界面
    },
    //后台主界面
    {
      path: '/',
      //resolve代表懒加载
      component: resolve => require(['../components/common/home.vue'], resolve),
      meta: {
        title: '首页',
        requiresAuth: true
      },
      children: [{
        path: '/welcome',
        component:resolve => require(["../components/pages/welcome.vue"],resolve),
        meta:{
          title:'首页',
          requiresAuth: true
        }
      },
      {
        path: '/publishBlog',
        component:resolve => require(["../components/pages/publishBlog.vue"],resolve),
        meta:{
          title:'发布博客',
          requiresAuth: true
        }
      },
      {
        path: '/schart',
        component:resolve => require(["../components/pages/schart.vue"],resolve),
        meta:{
          title:'分析图表',
          requiresAuth: true
        }
      },
      {
        path: '/user',
        component:resolve => require(["../components/pages/user.vue"],resolve),
        meta:{
          title:'用户信息',
          requiresAuth: true
        }
      },
      {
        path: '/configType',
        component:resolve => require(["../components/pages/configType.vue"],resolve),
        meta:{
          title:'设置博客分类',
          requiresAuth: true
        }
      },
      {
        path: '/configTags',
        component:resolve => require(["../components/pages/configTags.vue"],resolve),
        meta:{
          title:'设置博客标签',
          requiresAuth: true
        }
      },
      {
        path: '/blogArchive',
        component:resolve => require(["../components/pages/blogArchive.vue"],resolve),
        meta:{
          title:'博客归档',
          requiresAuth: true
        }
      }
    ]
    },
    {
      path: '/login',
      component: resolve => require(['../components/pages/login.vue'], resolve),
      meta: {
        title: '登录'
      }
    },
    {
      path: '*',
      component: resolve => require(['../components/pages/404.vue'], resolve),
      meta: {
        title: '404'
      }
    }
  ]
}

const rs = new Router(routers)

//遍历路由路径时，使用钩子判断是否需要token
rs.beforeEach((to,from,next)=>{
  let token = localStorage.getItem('token')
  if(to.matched.some(record => record.meta.requiresAuth) && (!token || token === null)){
    next({
      path:'/login',
      query:{redirect:to.fullPath}
    })
  }else{
    next()
  }
})

export default rs
