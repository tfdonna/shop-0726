<template>
  <div>

      <el-container>
        <div class="side">
          <Sidebar class='sidebar' :class="sidebar.opened ? 's-w':'s-w2'"></Sidebar>
        </div>
        
        <div class="main-container">
        <el-header>
          <div class="hbb" :class="{ 'is-active': !sidebar.opened }" @click="changeSidebar">☰</div>
          <div><myBreadcrumb></myBreadcrumb></div>
          <div class="h-right">
            <span>{{name}}</span> &nbsp;
            <el-dropdown> 
              <span class="el-dropdown-link">
                <i class="iconfont icon-iconzhucetouxiang icon1"></i>
                <i class="iconfont icon-sanjiao icon1"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><router-link to="/home">首页</router-link></el-dropdown-item>
                <!-- 在组件上绑定原生事件， 需要使用时间修饰符 -->
                <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          
        </el-header>
        
          <el-main>
            <router-view></router-view>
          </el-main>
           </div>
      </el-container>   
     
    
    
    
  </div>
</template>

<script>
import Sidebar from '../../components/Sidebar.vue'
import myBreadcrumb from '../../components/myBreadcrumb/index.vue'
import {mapGetters} from 'vuex'

export default {
    name: 'Layout',
    methods: { 
      changeSidebar(){
        //修改左侧菜单的状态孩子，需要调用store中的actions
        this.$store.dispatch('TOGGLE_SIDEBAR_AC');
      } ,
      logout() {
        //调用 vuex中actions
        this.$store.dispatch('LOGOUT_AC');
        //退出后需要刷新页面   强制刷新
        //location.reload();
        this.$router.go(0);   //go 本页面 => 强制刷新
        
        //this.$router.push('/login');
      }
    },
    computed:{
      ...mapGetters(['sidebar', 'name'])
    },
    components:{
      Sidebar,myBreadcrumb 
    },
    
}
</script>

<style lang="scss" scoped>
.bread{
  padding-left: 22px;
  margin-right: auto;
}
.el-header {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 40px;
    border-bottom: 1px solid gainsboro;
    display: flex;
    align-items: center;
    position: relative;
  }
  .el-header div{
    margin-right: 20px;
  }
  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .h-right{
    float: right;
    right: 0;
    position: absolute;
  }
  .hbb {
      font-size: 20px;
      transform: rotate(0deg);
      transition: 1s;
      transform-origin: 50% 50%;
  }
  .is-active {
      transform: rotate(90deg);
    }
  .main-container{
    clear: both;
    min-height: 100%;
    width: 100%;
  }
  .side{
    background: #545c64;
    height: auto;
  }
  .s-w{
    width: 200px;
  }
  .s-w2{
    width: 64px;
  }

</style>