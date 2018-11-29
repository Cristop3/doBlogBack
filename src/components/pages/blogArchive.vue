<template>
  <div class='myBlogArchive'>

    <el-row>
      <el-col :span='20'>
        <el-table :data="tableData3" height="550" border style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="博客文章名称" width="380">
          </el-table-column>
          <el-table-column prop="type" label="所属分类" width="100">
          </el-table-column>
           <el-table-column prop="tag" label="所属标签" width="100">
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>


  </div>
</template>

<script>
  export default {
    name: 'myBlogArchive',
    data() {
      return {
           tableData3: [{
          date: '2016-05-03',
          name: '关于sql编程',
          type: 'java',
          tag:'javascript'
        }, {
          date: '2016-05-02',
          name: '如何提高自己技术',
          type: 'java',
          tag:'javascript'
        }, {
          date: '2016-05-04',
          name: '关于flex布局',
          type: 'java',
          tag:'javascript'
        }, {
          date: '2016-05-01',
          name: '我爱的人',
          type: 'java',
          tag:'javascript'
        }, {
          date: '2016-05-08',
          name: '歌神张学友',
          type: 'java',
          tag:'javascript'
        }, {
          date: '2016-05-06',
          name: '关于vue项目过程中所遇到的问题',
          type: 'java',
          tag:'javascript'
        }, {
          date: '2016-05-07',
          name: '',
          type: 'java',
          tag:'javascript'
        }]
      }
    },
    components: {

    }
  }

</script>

<style>


</style>
