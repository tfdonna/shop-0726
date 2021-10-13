<template>
  <div class="nav-con">
    
      <el-header>
          <div><i class="iconfont icon-list icon1"></i></div>
          <div>首页</div>
          <div class="h-right">
            <i class="iconfont icon-iconzhucetouxiang icon1"></i>
            <i class="iconfont icon-sanjiao icon1"></i>
          </div>
        </el-header>
        
  </div>
</template>

<script>
import myBreadcrumb from '@/components/myBreadcrumb'
export default {
    name: 'Navbar',
    components: { myBreadcrumb }
}
</script>

<style scoped lang="scss">
 .icon1{
    font-size: 20px;
  }
  .h-right{
    float: right;
    right: 0;
    position: absolute;
  }
</style>