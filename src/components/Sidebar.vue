<template>
  <div class="sidebar">
      <el-row class="tac">
          <el-col :span="20">
            <el-menu
              default-active="$route.path"
              class="el-menu-vertical-demo menu" 
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              :collapse="!sidebar.opened">
              <el-menu-item index="/home">
                <router-link to="/home">
                  <i class="iconfont icon-home"></i> 
                  <span>首页</span>
                </router-link>               
              </el-menu-item>

              <el-menu-item index="/super" v-if="roleid == 1">
                <router-link to="/super">
                  <i class="iconfont icon-home"></i> 
                  <span>超级管理员</span>
                </router-link>               
              </el-menu-item>

              <el-submenu index="2">
                <template slot="title">
                  <i class="iconfont icon-goods"></i>
                  <span> 商品</span>
                </template>
                <el-menu-item-group>           
                  <el-menu-item index="/pms/product">
                    <router-link to="/pms/product">
                      <i class="iconfont icon-suoyoudingdan"></i> 商品列表
                    </router-link>
                  </el-menu-item>
                  <el-menu-item index="/pms/productadd">
                    <router-link to="/pms/productadd">
                      <i class="iconfont icon-add"></i> 添加商品
                    </router-link>
                  </el-menu-item>               
                  <el-menu-item index="/pms/productCate">
                    <router-link to="/pms/productCate">
                      <i class="iconfont icon-classification"></i> 商品分类
                    </router-link>                    
                  </el-menu-item>
                  <el-menu-item index="/pms/productAttr">
                    <router-link to="/pms/productAttr">
                      <i class="iconfont icon-circle"></i> 商品类型
                    </router-link>                   
                  </el-menu-item>
                  <el-menu-item index="/pms/brand">
                    <router-link to="/pms/brand">
                      <i class="iconfont icon-tab"></i> 品牌管理
                    </router-link>
                  </el-menu-item>
                </el-menu-item-group>               
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="iconfont icon-order"></i>
                  <span>订单</span>
                </template>
                <el-menu-item-group>           
                  <el-menu-item index="1-1"><i class="iconfont icon-orderlist"></i> 订单列表</el-menu-item>
                  <el-menu-item index="1-2"><i class="iconfont icon-set"></i> 订单设置</el-menu-item>               
                  <el-menu-item index="1-3"><i class="iconfont icon-back"></i> 退货申请处理</el-menu-item>
                  <el-menu-item index="1-4"><i class="iconfont icon-tuihuo"></i> 退货原因设置</el-menu-item>
                </el-menu-item-group>               
              </el-submenu>              
            </el-menu>
          </el-col>
        </el-row>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
 name: 'Sidebar',
 mounted(){
   console.log(this.$route.path);
 },
 methods: {
   handleOpen: function () {
      console.log("菜单打开了");
    },
    handleClose: function () {
      console.log("菜单关闭了");
    }
 },
 computed: { ...mapGetters(['sidebar', 'roleid']) }
}
</script>

<style lang="scss" scoped>
// .sidebar{
//   width: 200px;
// }
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .menu{
    border: none;
  }
</style>