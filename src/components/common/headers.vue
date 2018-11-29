<template>
  <div class="headers" id="headers">
    <el-row class='header-row'>
      <el-col :span="24">
        <el-row :gutter="20">
          <el-col :xs="14" :sm="10" :md="8" :lg="6" :xl="4">
            <div class='headers-Logo'>博客后台管理系统<i class="el-icon-setting" @click="isCollapse"></i></div>
          </el-col>
          <el-col :xs="10" :sm="14" :md="16" :lg="18" :xl="20">
            <div class='headers-right'>
              <el-row>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <div class='headers-right-info'>
                    <div class='info-user-img'>
                      <!--用户头像-->
                      <img src='../../assets/logo.png' />
                    </div>
                    <el-dropdown :hide-on-click="false" @command='handleCommand'>
                      <span class="el-dropdown-link">
                        <!-- 直接访问vuex里面的登录名 -->
                        {{this.getUserName()}}
                        <i class="el-icon-caret-bottom el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command='info'>个人信息</el-dropdown-item>
                        <el-dropdown-item command='signout'>退出登录</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'myHeaders',
    data() {
      return {
        collapse:false
      }
    },
    computed:{
      
    },
    methods:{
      isCollapse:function(){
          this.collapse = !this.collapse
          this.$store.commit('ISCOLLAPSE',{isCollapse:this.collapse})
      },
      //2.防止刷新 从localstorage获取
      getUserName(){
        if(this.$store.state.username === ''){
          return localStorage.getItem('username')
        }else{
          return this.$store.state.username
        }
      },
      //3.用户名下拉路由跳转
      handleCommand(command){
        if(command === 'info'){
          //跳转至用户信息页
          this.$router.push('/user')

        }else if(command === 'signout'){
          //分发登出action
          this.$store.dispatch('SIGNOUT')
          //跳转至登录页
          this.$router.push('/login')
        }
      }
    }
  }

</script>

<style>
  /*header栏*/

  .headers {
    width: 100%;
    height: 100%;
  }

  .header-row{
    background-color: #1E90FF;
  }

  .el-row {
    width: 100%;
    height: 100%;
  }

  /*headers左侧系统logo*/
  .headers-Logo {
    min-height: 60px;
    /* text-align: center; */
    line-height: 60px;
    font-size: 24px;
    color: beige;
    padding-left:10px;
  }

  /*headers右侧操作*/
  .headers-right {
    min-height: 60px;
  }

  .headers-right-info {
    /* background-color: aqua; */
    min-height: 60px;
    /*这里使用了flex布局*/
    display: flex;
    /*排列方向*/
    flex-direction: row;
    /*水平方向*/
    align-items: center;
    /*右对齐*/
    justify-content:flex-end;
  }

  .info-user-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color:gainsboro;
    /* border:1px solid #fff; */
    overflow: hidden;
    /*其他项缩小 该项不调整*/
    flex-shrink: 0
  }

  .info-user-img img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .el-dropdown-link{
      color:azure;
      margin-left: 10px;
      font-size:16px;
      cursor: pointer;
  }

  .el-icon-setting{
    margin-left:20px;
    cursor: pointer;
  }

</style>
