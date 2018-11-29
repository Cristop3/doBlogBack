<template>
  <div class='myConfigType'>

    <el-row>
      <el-col :span='12' :push="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>分类详情</span>
            <!-- <el-button  style="float: right; padding: 3px 0" type="text">确定</el-button> -->
          </div>
          <span v-for="tag in arrTags"  :key="tag.id">
          <el-tag  :type="tag.type" closable :disable-transitions='false' @close='closeTag(tag)'>{{tag.title}}</el-tag>
          </span>
          <el-input class='input-new-tag' v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native='confirm' @blur='confirm'></el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添加新分类</el-button>
        </el-card>
      </el-col>
    </el-row>


  </div>
</template>

<script>
  export default {
    name: 'myConfigType',
    data() {
      return {
        
      }
    },
    components: {

    }
  }

</script>

<style>
 

</style>
