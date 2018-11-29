<template>
  <div class='myPublishBlog'>

    <el-row>
      <el-col :span="10">
        <el-form ref="form" :model="form" label-width="110px">
          <el-form-item label="博客标题">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="所属分类">
            <el-select v-model="form.type" placeholder="请选择分类">
              <el-option label="JAVA" value="shanghai"></el-option>
              <el-option label="JAVASCRIPT" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所属标签">
            <el-select v-model="form.tags" placeholder="请选择标签">
              <el-option label="Java" value="shanghai"></el-option>
              <el-option label="Html" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否原创">
            <el-switch v-model="form.isSelf"></el-switch>
          </el-form-item>
          <el-form-item label="博客简要说明">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="20" :push="2">
        <mavon-editor v-model="content" ref="md" @change="change" style="min-height: 700px" />
      </el-col>
    </el-row>

    <el-row>
      <el-col :span='4' :push="2">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
      </el-col>
    </el-row>


  </div>
</template>

<script>
  // 引入Markdown编辑器
  import {
    mavonEditor
  } from 'mavon-editor'

  import 'mavon-editor/dist/css/index.css'
  export default {
    name: 'myPublishBlog',
    data() {
      return {
        //表单所需字段
        form: {
          name: '',
          tags: '',
          type: '',
          isSelf: '',
          desc: ''
        },
        //编辑器
        content: '',
        //分类
        arrTypes:[

        ],
        //标签
        arrTags:[

        ]
      }
    },
    components: {
      mavonEditor
    },
    methods: {
      change(value, render) {
        // render 为 markdown 解析后的结果
        this.html = render;
      },
      onSubmit() {
        this.$message.success('提交成功！');
      }
    }
  }

</script>

<style>


</style>
