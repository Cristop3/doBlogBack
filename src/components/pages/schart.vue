<template>
  <div class='mySChart'>

    <el-row :gutter="20">
      <el-col :span='8'>
        <div id='myChartLine' :style="{width:'400px',height:'400px'}"></div>
      </el-col>
      <el-col :span="8">
        <div id='myChartCircle' :style="{width:'400px',height:'400px'}"></div>
      </el-col>
      <el-col :span="8">
        <div id='myChartBar' :style="{width:'400px',height:'400px'}"></div>
      </el-col>
    </el-row>


  </div>
</template>

<script>
  //引入基本模板
  let echarts = require('echarts/lib/echarts')

  //引入柱状图组件
  require('echarts/lib/chart/bar')

  //引入饼状图
  require('echarts/lib/chart/pie')

  //引入折线图
  require('echarts/lib/chart/line')

  //引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  export default {
    name: 'mySChart',
    data() {
      return {

      }
    },
    mounted() {
      //echarts初始化应在钩子函数mounted()中,这个钩子函数是在el 被新创建的 vm.$el 替换
      //并挂载到实例上去之后调用
      this.drawLine()

      this.drawCircle()

      this.drawBar()
    },
    components: {

    },
    methods: {
      drawLine() {
        let myChartLine = echarts.init(document.getElementById('myChartLine'))

        myChartLine.setOption({
          title: {
            text: '博客分类对应数量'
          },
          tooltip: {},
          xAxis: {
            data: ["生活", "随笔", "javascript", "sql", "css3", "vue"]
          },
          yAxis: {},
          series: [{
            name: '博客量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        })
      },
      drawCircle() {
        let myChartCircle = echarts.init(document.getElementById('myChartCircle'))

        myChartCircle.setOption({
          title: {
            text: '博客标签对应数量'
          },
          series: [{
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data: [{
                value: 235,
                name: 'javascript'
              },
              {
                value: 274,
                name: 'html'
              },
              {
                value: 310,
                name: '随笔'
              },
              {
                value: 335,
                name: 'Oracle'
              },
              {
                value: 400,
                name: 'sql'
              }
            ]
          }]
        })
      },
      drawBar() {
        let myChartCircle = echarts.init(document.getElementById('myChartBar'))

        myChartCircle.setOption({
          title: {
            text: '博客周访问量'
          },
          xAxis: {
            type: 'category',
            data: ['一', '二', '三', '四', '五', '六', '日']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [20, 32, 1, 14, 10, 30, 26],
            type: 'line'
          }]
        })
      }
    }
  }

</script>

<style>


</style>
