<template>
  <div class="slide" id="slide">
    <el-scrollbar style='height:100%;overflow-x:hidden'>
      <el-menu default-active="2" class="slide-menu" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="isCollapse"
        :collapse-transition="true" :default-active="defaultActive" :default-openeds="opends" :router='true' @select="select">
        <!-- 渲染出侧边栏菜单 -->
        <template v-for="(item,index) of arrSlideBar">
          <template v-if="!item.subs">
            <!-- 一级菜单 -->
            <el-menu-item :index="item.index" :key="index">
              <i :class="item.icon"></i>
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
          </template>
          <template v-else>
            <!-- 包含子菜单 -->
            <el-submenu :index='item.index' :key="item.index">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.title}}</span>
              </template>

              <!-- 二级菜单 -->
              <el-menu-item-group v-for="(keys,i) of item.subs" :key="i">
                <template slot="title">{{keys.title}}</template>
                <el-menu-item v-for="(child,j) of keys.subschild" :index="child.index" :key="j">
                  {{child.title}}
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </template>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
  export default {
    name: 'cSlide',
    data() {
      return {
        //默认打开一级菜单
        opends: ['xx'],
        //侧边栏伪数据
        arrSlideBar: [{
            title: '系统首页',
            index: 'welcome',
            icon: 'el-icon-star-on'
          },
          {
            title: '管理博客',
            index: 'xx',
            icon: 'el-icon-tickets',
            subs: [{
                title: '配置',
                subschild: [{
                    title: '设置博客标签',
                    index: 'configTags',
                  },
                  {
                    title: '设置博客分类',
                    index: 'configType',
                  }
                ]
              },
              {
                title: '维护',
                subschild: [{
                  title: '博客归档',
                  index: 'blogArchive',
                }]
              }
            ]
          },
          {
            title: '发布博客',
            index: 'publishBlog',
            icon: 'el-icon-rank'
          },

          {
            title: '分析图表',
            index: 'schart',
            icon: 'el-icon-warning'
          },
          {
            title: '用户信息',
            index: 'user',
            icon: 'el-icon-error'
          }
        ]
      }
    },
    computed: {
      //使用计算属性来接收state状态
      isCollapse() {
        return this.$store.state.collapse
      },
      //菜单栏active根据路由来
      defaultActive(){
        return this.$route.fullPath.replace('/','')
      }
    },
    methods: {
      //侧边栏菜单选中事件
      select(index, indexPath) {

      }
    },
    watch: {
      //监听路由的改变 表示切换了侧边栏菜单
      $route(newValue, oldValue) {
        this.$store.commit('ADDSUBTAGS',{
          title:newValue.meta.title,
          path:newValue.fullPath
        })
      }
    },
  }

</script>

<style>
  .slide {
    height: 100%;
    overflow-x:hidden;
  }

  .el-scrollbar .el-scrollbar__wrap {
    overflow-y:scroll;
    overflow-x:hidden;
  }
  .el-scrollbar__view{
    height:100%;
  }
  .el-scrollbar__view>ul{
    height:100%;
  }

  /*侧边栏折叠时默认宽度*/

  .el-menu--collapse {
    width: 66px;
  }

  /*侧边栏未折叠时默认宽度*/

  .slide-menu:not(.el-menu--collapse) {
    width: 200px;
  }

</style>
