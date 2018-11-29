<template>
  <div  :class="{active:isActive(this.item.path),subtags:true}" id="subtags">
      <router-link :to="this.item.path" :class="{aactive:true}">{{this.tagTitle}}</router-link>
      <span @click="closeTag"><i class='el-icon-close'></i></span>
  </div>
</template>

<script>
  export default {
    name: 'mySubTags',
    props:['item'],
    data() {
      return {
        tagTitle:this.item.title
      }
    },
    // created(){
    //   alert(this.item)
    // },
    computed:{
      
    },
    methods:{
      isActive(path){
        return path === this.$route.fullPath
      },
      closeTag(){
        //提交 关闭小标签状态
        this.$store.commit('CLOSESUBTAGS',{
          title:this.item.title,
          path:this.item.path
        })
      }
    }
  }

</script>

<style>
  .subtags {
    height: 28px;
    overflow: hidden;
    cursor: pointer;
    line-height: 28px;
    vertical-align: middle;
    border-radius: 3px;
    -webkit-transition: all .3s ease-in;
    -moz-transition: all .3s ease-in;
    transition: all .3s ease-in;
    font-size:12px;
    background-color: aliceblue;
    border:1px solid #e9eaec;
    padding: 0 5px 0 12px;
    color: #666;
    margin:0px 3px 0px 2px;
    white-space: nowrap;
        text-overflow: ellipsis;
  }

  a:hover{
      color:#1E90FF;
  }

  .active{
    background-color: #1E90FF;
    color:wheat
  }
  .active .aactive{
    color:beige;
  }
  .aactive{
    color:gray;
  }
</style>
