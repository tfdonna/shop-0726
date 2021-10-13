<template>
  <div class="breadcon">
    <el-breadcrumb separator="/" class="bread">
      <el-breadcrumb-item v-for="(item, index) in breadData" :key="index">
        <template v-if="item !== breadData.length - 1">
          <!-- 有链接地址的元素 -->
          <router-link :to="item.path">{{ item.meta.title }}</router-link>
        </template>
        <template v-else>
          <!-- 没有链接的元素 -->
          {{ item.meta.title }}
        </template>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
    name: 'myBreadcrumb',
    data() {
        return{
            breadData: []   //保存面包屑的多级导航内容
        }
    },
    mounted() {
         this.getBreadData();
    },
    watch: { $route(){this.getBreadData();} },
    methods: {
        getBreadData(){
            console.log(this.$route);
            let bread = this.$route.matched;
            console.log(bread);
            //判断是不是首页
            if(bread[1].path != '/home'){
                this.breadData = [{path: '/home', meta: { title:'首页' }}].concat(bread);
            }else{
                this.breadData = [{path: '/home', meta: { title:'首页' }}];
            }
            console.log(this.breadData);
        }
    }
}
</script>

<style lang="scss" scoped>
.breadcon{
    height: 50px;
    line-height: 50px;
    .bread{
        height: 50px;
        line-height: 50px;
        display: inline-block;
    }
}
</style>