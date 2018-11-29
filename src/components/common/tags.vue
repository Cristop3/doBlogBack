<template>
  <div class="tags" id="tags" v-if="isShow">
    <el-row class='tags-row'>
      <!-- 列表标签 -->
      <el-col class="tags-list" :span="23">
        <c-subTags v-for="(item,index) of arrSubTags" :key="item.path" :item='item'></c-subTags>
      </el-col>
      <!-- 标签操作 -->
      <el-col :span="1">
          <div class="tags-handle">
        <el-dropdown>
          <el-button size="mini" class='btn-handle' type="primary" icon="el-icon-arrow-down" circle></el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>关闭当前标签</el-dropdown-item>
            <el-dropdown-item>关闭所有标签</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import mySubTags from './subtags.vue'
  export default {
    name: 'myTags',
    data() {
      return {
        // 顶部小标签 伪数据
        arrSubTags:[
            // {
            //   title:'系统首页',
            //   path:'/',
            //   name:'系统首页'
            // },
            // {
            //   title:'发布博客',
            //   path:'/publishBlog',
            //   name:'发布博客'
            // },
            // {
            //   title:'分析图表',
            //   path:'/schart',
            //   name:'分析图表'
            // },
            // {
            //   title:'设置博客标签',
            //   path:'/configTags',
            //   name:'设置博客标签'
            // },
            // {
            //   title:'设置博客分类',
            //   path:'/configType',
            //   name:'设置博客分类'
            // },
            // {
            //   title:'博客归档',
            //   path:'/blogArchive',
            //   name:'博客归档'
            // },
            // {
            //   title:'用户信息',
            //   path:'/user',
            //   name:'用户信息'
            // },
            
        ]
      }
    },
    components: {
      'c-subTags': mySubTags
    },
    computed:{
      isShow(){
        this.arrSubTags =  this.$store.state.subTags
        return this.$store.state.subTags.length > 0
      }
    }
  }

</script>

<style>
  .tags {
    width: 100%;
    height: 30px;
    /* border-bottom:1px solid #ddddcc; */
    /* background-color: aqua; */
  }

  .tags-row {
    width: 100%;
    height: 30px;
  }

  /* 标签列表 */

  .tags-list {
    display: flex;
    flex-direction: row;
  }

  /* 标签操作 */

  .tags-handle {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    box-shadow: -3px 0px 3px #888888;
  }
  .btn-handle{
      margin-right:14px;
  }



</style>
