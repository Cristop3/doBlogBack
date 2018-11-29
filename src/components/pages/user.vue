<template>
  <div class='myUser'>
    <el-row>
      <el-col :span='12' :push="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>用户详情</span>
          </div>
          <el-form label-position='left' label-width="80px">
            <el-form-item label="用户名：">
              <el-input v-model="name" style='width:75%'></el-input>
              <el-tooltip class="item" effect="dark" content="修改用户名" placement="top-start">
                <el-button @click='isShowDlg = true' type="primary" icon="iconfont ico-edit" size="mini" circle></el-button>
              </el-tooltip>
            </el-form-item>
            <el-form-item label="密码：">
              <el-input :type='this.isShowPassword' v-model="psd" style='width:75%'></el-input>
              <el-tooltip class="item" effect="dark" :content="this.psdTips" placement="bottom">
                <el-button @click='changePassword' type="success" :icon="this.isShowPassword === 'password' ? 'iconfont ico-17yanjing2' : 'iconfont ico-biyanjing'"
                  size="mini" circle></el-button>
              </el-tooltip>

              <el-tooltip class="item" effect="dark" content="修改密码" placement="bottom">
                <el-button @click='isShowDlgPsd = true' type="primary" icon="iconfont ico-edit" size="mini" circle></el-button>
              </el-tooltip>

            </el-form-item>
            <el-form-item label="头像：">
              <el-upload class="avatar-uploader" action="/api/upload" :show-file-list="false" :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload" :data='id'>
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>

    <!--用户名弹框-->
    <el-dialog width='30%' title="修改用户名" :show-close='false' :visible.sync="isShowDlg" :before-close='closeName'>
      <el-form :model='nameForm' :rules='rules' ref="nameForm">
        <el-form-item prop="username">
          <el-input v-model="nameForm.username" auto-complete="off" placeholder='请输入新用户名...'></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelDlg('nameForm','isShowDlg')" round size="small">取 消</el-button>
        <el-button type="primary" @click="submitForm('nameForm')" round size="small">确 定</el-button>
      </div>
    </el-dialog>

    <!--密码弹框-->
    <el-dialog width='30%' title='修改密码' :show-close='false' :visible.sync='isShowDlgPsd' :before-close='closePsd'>
      <el-form :model="psdForm" status-icon :rules="rulesPsd" ref="psdForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="密码：" prop="pass">
          <el-input type="password" v-model="psdForm.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" prop="checkPass">
          <el-input type="password" v-model="psdForm.checkPass" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelDlg('psdForm','isShowDlgPsd')" round size="small">取 消</el-button>
        <el-button type="primary" @click="submitForm('psdForm')" round size="small">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  export default {
    name: 'myUser',
    data() {

      //自定义校验密码
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.psdForm.checkPass !== '') {
            this.$refs.psdForm.validateField('checkPass');
          }
          callback();
        }
      }

      var validateCheckPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.psdForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      }

      return {
        psd: '1234',
        imageUrl: '',
        isShowPassword: 'password', //默认看不见密码
        psdTips: '查看密码',
        isShowDlg: false, //是否显示用户名弹框
        isShowDlgPsd: false, //是否显示密码弹框
        nameForm: {
          username: ''
        },
        psdForm: {
          pass: '',
          checkPass: ''
        },
        rules: {
          username: [{
              required: true,
              message: '请输入用户名',
              trigger: 'blur'
            },
            {
              min: 2,
              message: '长度不少于2个字符',
              trigger: 'blur'
            }
          ]
        },
        rulesPsd: {
          pass: [{
            validator: validatePass,
            trigger: 'blur'
          }],
          checkPass: [{
            validator: validateCheckPass,
            trigger: 'blur'
          }]
        }
      }
    },
    computed: {
      name() {
        return this.$store.state.username || localStorage.getItem('username')
      },
      id(){
        return this.$store.state.userid || localStorage.getItem('userid')
      }
    },
    components: {

    },
    mouted:{
      
    },
    methods: {
      //1.更改是否查看密码
      changePassword() {
        this.isShowPassword === 'password' ? this.isShowPassword = 'text' : this.isShowPassword = 'password'
        this.isShowPassword === 'password' ? this.psdTips = '查看密码' : this.psdTips = '隐藏密码'
      },
      //2.关闭弹框 清除重置表单
      cancelDlg(formName, witchDlg) {
        this[witchDlg] = false
        this.$refs[formName].resetFields();
      },
      //3.修改用户名 提交
      submitForm(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            form === 'nameForm' ? this.nameApi(form) : this.psdApi(form)
          } else {
            this.$message.error('填写有误 请更正');
            return false;
          }
        })
      },
      //4.关闭密码弹框
      closePsd(done) {
        this.$refs['psdForm'].resetFields();
        done()
      },
      //5.关闭用户弹框
      closeName(done) {
        this.$refs['nameForm'].resetFields();
        done()
      },
      //6.修改用户名接口
      nameApi(form) {
        //请求接口 修改用户名
        this.$ajax.post('/api/updateName', {
          username: this.nameForm.username,
          id: localStorage.getItem('userid')
        }).then((res) => {
          //修改成功
          if (res.data['success']) {
            this.isShowDlg = false
            this.$refs[form].resetFields();
            this.$message({
              message: '修改成功',
              type: 'success',
              center: true,
              duration: 1000
            })

            //修改vuex和本地的用户名
            this.$store.dispatch('UPDATENAME', {
              username: res.data['dataset']
            })
          } else {
            this.$message.error(res.data['msg'])
            return false
          }
        }).catch((err) => {
          this.$message.error(err.message)
          return false
        })
      },
      //7.修改密码
      psdApi(form){
        this.$ajax.post('/api/updatePsd',{
          psd:this.psdForm.pass,
          id:this.$store.state.userid || localStorage.getItem('userid')
        }).then((res) => {
          if(res.data['success']){
            this.isShowDlgPsd = false
            this.$refs[form].resetFields()
            this.$message({
              message: '修改成功',
              type: 'success',
              center: true,
              duration: 1000
            })
          }
        }).catch((err) => {
          this.$message.error(err.message)
            return false
        })
      },
      //8.上传成功返回url显示在前台
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      //9.上传前检验
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }

</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>
