<template>
  <div class='myWelcome'>
    <!-- 各种数据计量 -->
    <el-row :gutter="20" class='quantity-all'>
      <el-col :span="4">
        <el-card shadow="hover" :body-style="{padding: '0px'}">
          
          <div class="user-view  icno-color-user is-badge-hidden">
            <i class="el-icon-view icon-view"></i><el-badge  :hidden='isBadge'  value='1234' />
          </div>
          <div class="user-view  icno-color-user is-badge-show">
            <i class="el-icon-view icon-view"></i><el-badge   value='1234' />
          </div>
          <div class="user-view-info">
            <div class="user-view-num quantity">1234</div>
            <div class='quantity-title'>用户访问量</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card shadow="hover" :body-style="{padding: '0px'}">
          <div class="user-view  icno-color-share is-badge-hidden">
            <i class="el-icon-goods icon-view"></i><el-badge :hidden='isBadge' value='68' />
          </div>
          <div class="user-view  icno-color-share is-badge-show">
            <i class="el-icon-goods icon-view"></i><el-badge   value='68' />
          </div>
          <div class="user-view-info">
            <div class="user-view-num quantity">68</div>
            <div class='quantity-title'>博客分享量</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card shadow="hover" :body-style="{padding: '0px'}">
          <div class="user-view  icon-color-lemsg is-badge-hidden">
            <i class="el-icon-news icon-view"></i><el-badge :hidden='isBadge' value='320' />
          </div>
          <div class="user-view  icon-color-lemsg is-badge-show">
            <i class="el-icon-news icon-view"></i><el-badge  value='320' />
          </div>
          <div class="user-view-info">
            <div class="user-view-num quantity">320</div>
            <div class='quantity-title'>博客留言量</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card shadow="hover" :body-style="{padding: '0px'}">
          <div class="user-view  icon-color-msg is-badge-hidden">
            <i class="el-icon-message icon-view"></i><el-badge :hidden='isBadge' value='20' />
          </div>
          <div class="user-view  icon-color-msg is-badge-show">
            <i class="el-icon-message icon-view"></i><el-badge  value='20' />
          </div>
          <div class="user-view-info">
            <div class="user-view-num quantity">20</div>
            <div class='quantity-title'>系统消息</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card shadow="hover" :body-style="{padding: '0px'}">
          <div class="user-view  icno-color-update is-badge-hidden">
            <i class="el-icon-service icon-view"></i><el-badge :hidden='isBadge' value='4' />
          </div>
          <div class="user-view  icno-color-update is-badge-show">
            <i class="el-icon-service icon-view"></i><el-badge   value='1234' />
          </div>
          <div class="user-view-info">
            <div class="user-view-num quantity">4</div>
            <div class='quantity-title'>近期更新量</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card shadow="hover" :body-style="{padding: '0px'}">
          <div class="user-view  icno-color-user is-badge-hidden">
            <i class="el-icon-upload icon-view"></i><el-badge :hidden='isBadge' value='1234' />
          </div>
          <div class="user-view  icno-color-user is-badge-show">
            <i class="el-icon-view icon-view"></i><el-badge   value='1234' />
          </div>
          <div class="user-view-info">
            <div class="user-view-num quantity">1234</div>
            <div class='quantity-title'>用户访问量</div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 用户卡片 -->
    <el-card class="box-card-info" shadow="always">
      <div slot="header" class="clearfix">
        <span>用户简息</span>
        <el-tooltip content="修改用户" placement="top">
          <el-button size="mini" class='btn-handle' type="primary" icon="el-icon-edit" circle></el-button>
        </el-tooltip>
      </div>
      <div class="user-info">
        <div class='user-into-details'>
          <div class='details-name'>admin</div>
          <div class='details-role'>所属角色：
            <span>超级管理员</span>
          </div>
          <time class="details-time">创建时间：2018-07-19</time>
        </div>
        <img src="../../assets/logo.png" />
      </div>
    </el-card>

    <!-- 博客标签卡片 -->
    <el-card class="box-card-tags" shadow="always">
      <div slot="header" class="clearfix">
        <span>博客标签</span>
        <el-tooltip content="修改标签" placement="top">
          <el-button size="mini" class='btn-handle' type="primary" icon="el-icon-edit" circle></el-button>
        </el-tooltip>
      </div>
      <div class="blog-tags">
        <el-tag>javascript</el-tag>
        <el-tag type="success">html5</el-tag>
        <el-tag type="info">css3</el-tag>
        <el-tag type="warning">JAVA</el-tag>
        <el-tag type="danger">Eclipse</el-tag>
        <el-tag>生活</el-tag>
        <el-tag type="success">Vue</el-tag>
        <el-tag type="info">React</el-tag>
        <el-tag type="warning">Oracle</el-tag>
        <el-tag type="danger">Sql编程</el-tag>
        <el-tag type="danger">随笔</el-tag>
        <el-tag type="danger">VScode</el-tag>
      </div>
    </el-card>

    <!-- 热度分类卡片 -->
    <el-card shadow="hover" class="box-card-publish">
      <div slot="header" class="clearfix">
        <span>热度分类</span>
      </div>
      Vue
      <el-progress :percentage="60.2" color="#42b983"></el-progress>
      JavaScript
      <el-progress :percentage="59.8" color="#f1e05a"></el-progress>
      CSS
      <el-progress :percentage="21.9"></el-progress>
      HTML
      <el-progress :percentage="11.1" color="#f56c6c"></el-progress>
    </el-card>

    <!-- 近期发布卡片 -->
    <el-row>
      <el-col :span="24">
        <el-card  shadow="always">
      <div slot="header" class="clearfix">
        <span>近期发布</span>
        <el-tooltip content="查看发布" placement="top">
          <el-button size="mini" class='btn-handle' type="primary" icon="el-icon-view" circle></el-button>
        </el-tooltip>
      </div>
      <el-table :data="publishList" :show-header="false" style="width: 100%;font-size:14px;">
        <el-table-column>
          <template slot-scope="scope">
            <div class="todo-item" :class="{'todo-item-del': scope.row.status}">{{scope.row.title}}</div>
          </template>
        </el-table-column>
        <el-table-column width="120">
          <template slot-scope="scope">
            <time>2018-07-20</time>
          </template>
        </el-table-column>
        <el-table-column width="60">
          <template slot-scope="scope">
            <i class="el-icon-delete"></i>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
      </el-col>
    </el-row>


  </div>
</template>

<script>
  export default {
    name: 'myWelcome',
    data() {
      return {
        publishList: [{
            title: '关于移动端适配',
            status: false,
          },
          {
            title: 'plsql编程总结',
            status: false,
          },
          {
            title: 'vue疑难杂症',
            status: false,
          }
        ],
        //默认不显示brage标记
        isBadge:true
      }
    },
    components: {

    }
  }

</script>

<style>
  .myWelcome {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .clearfix:after {
    clear: both
  }

  .box-card-info,.box-card-tags,.box-card-publish{
    float:left;
  }

  /*用户卡片*/

  .box-card-info {
    width: 33%;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-top: 10px;

  }

  /*用户详情*/

  .user-info {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  /*头像*/

  .user-info img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  .user-into-details {
    margin-right: 20px;
  }

  /*登录名*/

  .details-name {
    font-size: 30px;

    color: #222;
  }

  /*角色及时间*/

  .details-role,
  .details-time {
    font-weight: bold;
    color: #A8A8A8
  }

  .details-role span {
    color: #E0EEE0
  }

  .btn-handle {
    float: right;
  }

  /*标签卡片*/

  .box-card-tags {
    width: 30%;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .blog-tags .el-tag {
    margin: 5px;
  }

  /*发布卡片*/

  .box-card-publish {
    width: 33%;
    /* margin-right: 10px; */
    margin-bottom: 10px;
    margin-top: 10px;

  }

  /*用户访问量*/

  .user-view {
    width: 100%;
    height: 40px;
    text-align: center;
  }

  .icon-view {
    font-size: 40px;
    line-height: 40px;
    color: aliceblue;
  }

  .user-view-num {
    font-size: 20px;
    color: #6495ED;
    font-weight: bold;
    text-align: center;
    padding: 10px;
  }

  .user-view-info {
    text-align: center;
    padding: 10px;
  }

  .icno-color-user {
    background-color: aqua;
  }

  .icon-color-publish {
    background-color: #71C671;
  }

  .icon-color-lemsg {
    background-color: #9ACD32;
  }

  .icon-color-msg {
    background-color: #D15FEE;
  }

  .icno-color-share {
    background-color: #EEAD0E;
  }

  .icno-color-update {
    background-color: #FF4500;
  }

  /*隐藏各种计量数字 显示elementUI标记*/
  /*显示标记 缩小标题字体*/
  @media screen and (max-width:974px){
    .quantity{
      display:none
    }
    .is-badge-show{
      display:block;
    }
    .is-badge-hidden{
      display:none;
    }
    .quantity-title{
      font-size:14px;
    }
  }
  /*全屏下*/
  @media screen and (min-width:975px){
    .quantity{
      display:block
    }
    .is-badge-show{
      display:none;
    }
    .is-badge-hidden{
      display:block;
    }
    .quantity-title{
      
    }
  }
  /*缩小图标大小 字体再缩小*/
  @media screen and (max-width:911px){
    .quantity-title{
      font-size:12px;
    }
    .user-view{
      height:30px;
    }
    .icon-view{
      font-size:30px;
      line-height:30px;
    }
  }
  
  /*增大三个卡片为100%*/
  @media screen and (max-width:779px){
    .box-card-info,.box-card-tags,.box-card-publish{
      width:100%;
    }
    .box-card-tags,.box-card-info{
      margin-right:0;
    }
  }

  /*隐藏计量*/
  @media screen and (max-width:695px){
    .quantity-all{
      display:none;
    }
  }

</style>
