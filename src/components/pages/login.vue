<template>
  <div class='myLogin'>
    <div class="login-content">
      <div class='center-filter'></div>
      <div class='center-login'>
        <h1 class='animated bounceInLeft'>Caristop3博客后台管理系统</h1>
        <div class='login-form animated bounceInRight'>
          <div class='login-content'>
            <div class='login-head'>
              <img src='../../assets/logo.png' />
            </div>
            <div class='login-load'>
              <el-form :model='ruleForm' ref='ruleForm' :rules='rules' label-width='70px'>
                <el-form-item label='用户名' prop="username">
                  <el-input v-model='ruleForm.username' auto-complete='off'></el-input>
                </el-form-item>
                <el-form-item label='密码' prop="password">
                  <el-input type='password' v-model='ruleForm.password' auto-complete='off' @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <div class='login-btn'>
                  <el-button type="primary" @click="submitForm('ruleForm')" >登录</el-button>
                </div>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  //手动加载动画 就不需要跟vue transition配合
  import 'animate.css/animate.min.css'

  //引入elementUI的loading服务 移至axios拦截器
  //import {Loading} from 'element-ui'

  export default {
    name: 'myLogin',
    data() {
      return {
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }]
        },
        loadings:false
      }
    },
    components: {

    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //登录遮盖 移至axios拦截器中
            // let loadingInstance = Loading.service({
            //   fullscreen:true,//是否全屏
            //   text:'登录中...',
            //   spinner: 'el-icon-loading',
            //   background: 'rgba(0, 0, 0, 0.7)'
            // })
            //alert(1)
            //this.loadings = true


            //后台验证
            this.$ajax.post('/api/login',{
              username:this.ruleForm.username,
              password:this.ruleForm.password
            }).then((res)=>{
              if(res.data['dataset'][0]['f_isexist'] === 0){
                //表示用户名或者密码错误
                this.$message.error('用户名或者密码错误');
              }else if(res.data['dataset'][0]['f_isexist'] > 0){
               
                //方式一：localStorage保存token
                localStorage.setItem('token',res.data['token'])

                //方式二：保存到vuex中
                this.$store.state.token = res.data['token']

                //记录登录人信息
                this.$store.commit('SIGNIN',res.data['dataset'][0])

                //表示登录成功
                this.$router.push('/welcome');
              }
              //this.loadings = false
              //关闭遮盖
              //oadingInstance.close()
            }).catch((err)=>{
              //关闭遮盖
              //loadingInstance.close()
              //this.loadings = false

              if(err.response.status === 504)
              this.$message.error(err.response.statusText);
            })

            //存储到本地方便后面使用
            //localStorage.setItem('ms_username', this.ruleForm.username);
          } else {
            this.$message.error('填写有误 请更正');
            return false;
          }
        });
      }
    }
  }

</script>

<style>
  /**/

  .myLogin {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  .myLogin .login-content {
    width: 100%;
    height: 100%;
  }

  /*毛玻璃背景*/

  .center-filter {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    /* 设置毛玻璃效果 */
    filter: blur(7px);
    background-color: #EEDFCC;
    /*设置背景图跟随窗口大小变化*/
    background: url('../../assets/bg.png') no-repeat center fixed;
    /* 背景图大小 */
    background-size: cover;

  }

  .center-login {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /*标题*/

  .center-login h1 {
    display: inline-block;
    padding: 10px 15px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.3);
    margin: 20px auto;
  }

  /*登录框*/

  .login-form {
    width: 380px;
    height: 450px;
    background: #fff;
    position: relative;
    box-shadow: 0 0px 2px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    margin-bottom: 10px;
  }

  .login-form::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: inherit;
    border-radius: inherit;
    background: inherit;
    opacity: .9;

    margin-bottom: 10px;
    transform: rotate(-6deg);
    top: -2px;
    left: -2px;
  }

  .login-form::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: inherit;
    border-radius: inherit;
    background: inherit;
    opacity: .9;

    transform: rotate(6deg);
    top: -2px;
    left: -2px;
    margin-bottom: 10px;
  }

  .login-content {
    width: 380px;
    height: 450px;
    background: #fff;
    box-shadow: 0 0px 2px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    margin-bottom: 10px;
    position: absolute;
    z-index: 100;
    padding: 30px 15px;
    box-sizing: border-box;
  }

  .login-head {
    text-align: center;
  }

  .login-head img {
    width: 128px;
    border-radius: 50%;
  }

  .login-load {
    margin-top: 20px;
  }

  .login-btn {
    text-align: center;
  }

  .login-btn button {
    width: 50%;
    height: 36px;
  }

  @media screen and (max-width: 440px) {
    .center-login h1 {
      font-size: 18px;
    }
    .login-head img {
      width: 80px;
    }

  }
  .el-form-item__label{
    font-weight: bolder;
  }

</style>
