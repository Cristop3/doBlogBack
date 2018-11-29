<template>
  <div class='myConfigTags'>

    <el-row>
      <el-col :span='12' :push="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>标签详情</span>
          </div>
          <span v-for="tag in arrTags" :key="tag.id">
            <el-tag :type="tag.type" closable :disable-transitions='false' @close='closeTag(tag.id)'>{{tag.title}}</el-tag>
          </span>
          <el-input class='input-new-tag' v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native='confirm'
            @blur='confirm'></el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添加新标签</el-button>
        </el-card>
      </el-col>
    </el-row>


  </div>
</template>

<script>
  export default {
    name: 'myConfigTags',
    data() {
      return {
        //标签伪元素
        arrTags: [],
        // [
        //   {
        //     id: '2',
        //     title: 'javascript',
        //     type: 'danger'
        //   },
        //   {
        //     id: '3',
        //     title: 'css3',
        //     type: 'success'
        //   },
        //   {
        //     id: '4',
        //     title: 'Eclipse',
        //     type: 'info'
        //   },
        //   {
        //     id: '5',
        //     title: '生活',
        //     type: 'warning'
        //   },
        //   {
        //     id: '6',
        //     title: 'Vue',
        //     type: 'danger'
        //   },
        //   {
        //     id: '7',
        //     title: 'React',
        //     type: 'success'
        //   },
        //   {
        //     id: '8',
        //     title: 'Oracle',
        //     type: 'danger'
        //   },
        //   {
        //     id: '9',
        //     title: 'Sql编程',
        //     type: 'success'
        //   },
        //   {
        //     id: '10',
        //     title: '随便',
        //     type: 'warning'
        //   },
        //   {
        //     id: '11',
        //     title: 'VSCode',
        //     type: 'danger'
        //   },
        //   {
        //     id: '12',
        //     title: 'java',
        //     type: 'success'
        //   }
        // ],
        inputVisible: false,
        inputValue: ''
      }
    },
    components: {

    },
    mounted() {
      //挂载完成后执行请求
      this.$ajax.get('/api/tips').then((res) => {
        console.log(res)
      }).catch((err) => {
        this.$message.error('接口出错');
      })
    },
    methods: {
      //关闭标签
      closeTag(id) {
        this.$confirm('此操作将永久删除该标签', '是否继续', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: 'true'
        }).then(() => {
          this.arrTags = this.arrTags.filter((item) => {
            return item.id !== id
          })
          this.$message({
            type: 'success',
            message: '删除成功！'
          })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })

      },
      showInput() {
        this.inputVisible = true;
        //将回调延迟到下次dom更新后执行，在修改数据之后立即使用它，然后等待dom更新。
        this.$nextTick(_ => {
          //ref属性为这个组件赋予了一个ID，可以使用this.$refs.xxx来访问这个实例
          this.$refs.saveTagInput.$refs.input.focus();
          //这里使用的是ref在子组件上所以还要$refs一下才能获取到input实例
          //this.$refs.saveTagInput.focus();
        });
      },
      confirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.arrTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }

</script>

<style>
  .el-tag {
    margin: 5px
  }

  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    /* vertical-align: bottom; */
  }

</style>
