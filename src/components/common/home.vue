<template>
  <div class="home" id="home">
    <el-container class='cont0'>

      <el-header>
        <!-- 头部组件 -->
        <c-header></c-header>
      </el-header>

      <el-container class='cont1'>

        <el-aside width='auto'>
          <!-- 左侧菜单栏 -->
          <c-slide></c-slide>
        </el-aside>

        <el-main>
          <el-container class='cont'>

            <el-header height='auto'>
              <!-- 中上tags标签栏 -->
              <c-tags></c-tags>
            </el-header>

            <el-main class='main-content'>
              <div class="div-content">
                <transition name="pageView" mode="out-in">
                  <router-view></router-view>
                </transition>
              </div>
            </el-main>

          </el-container>
        </el-main>

      </el-container>

    </el-container>
  </div>
</template>

<script>
  import cHeader from './headers'
  import cSlide from './slide'
  import cTags from './tags'

  //引入通知组件
  import {Notification} from 'element-ui'

  export default {
    name: 'cHome',
    data() {
      return {
        //记录当前视口宽度
        curScreenWidth: document.body.clientWidth,
        //定时器
        timer:false,
        //常量定义指定宽度
        MYWIDTH:900
      }
    },
    mounted() {
      //显示欢迎通知（暂时放在这里）
      Notification({
        title:'欢迎',
        message:'记得每一天开心哟！',
        duration:1000,
        showClose:false,
        type:'success',
        customClass:'notification'
      })

      const that = this
      window.onresize = function () {
        return (function () {
          window.screenWidth = document.body.clientWidth;
          that.curScreenWidth = window.screenWidth
        })()
      }
    },
    watch:{
      //监听当前页面宽度
      curScreenWidth(newVal,oldVal){
        if(!this.timer){
          //当视口(不保存y向滚动条)小于自定义的宽度时 收起侧边栏
          if(newVal < this.MYWIDTH){
            this.$store.commit('ISCOLLAPSE',{isCollapse:true})
          }else{
            this.$store.commit('ISCOLLAPSE',{isCollapse:false})
          }
          this.timer = true
          let _this = this
          setTimeout(function(){
            _this.timer = false
          },500)
        }
      },
      //这种方式也可以检测路由的变化
      //"$route":"text"
    },
    methods:{
      // text(){
      //   alert(1)
      // }
    },
    components: {
      'c-header': cHeader,
      'c-slide': cSlide,
      'c-tags': cTags
    }
  }

</script>

<style>
  .home {
    width: 100%;
    height: 100%;
  }

  .cont0{
    width:100%;
    height:100%;
  }

  .el-header {
    padding: 0;
  }

  .cont1{
    width:100%;
  }

  .cont{
    width:100%;
    height:100%;
  }

  /*侧边栏*/

  /* .el-aside {
     /* background-color:#545c64 
  } */

  /*标签栏*/

  .el-main {
    padding: 4px 0px 0px 0px;
  }

  /*内容栏*/

  .main-content {
    background-color: #EEE9E9;
  }

  .div-content {
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
    padding: 10px;
  }

  /*通知*/
  .notification{
    background-color:beige;
  }

</style>
