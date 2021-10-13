import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    meta: {title: '首页'},
    component: Layout,
    redirect: "/home",
    children: [
      { path: "home",meta:{title: '首页'}, name: "home", component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue') },
      { path: 'super', meta:{title: '管理员页面'}, name: 'super', component: () => import('../views/super/index.vue')}
    ]
  },
  {
    path: '/pms',
    name: 'pms',
    meta: {title: '商品'},
    component: Layout,
    redirect: '/pms/product',
    children: [
      { path: "product", name: "product", meta:{title:'商品列表'}, component: () => import( '../views/pms/product/index.vue') },   //商品列表
      { path: "productadd", name: "productadd", meta:{title:'添加商品'}, component: () => import('../views/pms/product/add.vue') },   //商品添加
      { path: "productupdate/:id", name: "productupdate", meta:{title:'修改商品'}, component: () => import('../views/pms/product/update.vue') },   //修改商品信息
      { path: "productCate", name: "productCate", meta:{title:'商品分类列表'}, component: () => import( '../views/pms/productCate/index.vue') },    //商品分类
      { path: "updateCate/:id", name: "updateCate", meta:{title:'修改商品分类'}, component: () => import( '../views/pms/productCate/update.vue') },   // 修改商品分类信息
      { path: "productCateAdd", name: "productCateAdd", meta:{title:'添加商品分类'}, component: () => import( '../views/pms/productCate/add.vue') },   //商品分类添加
      { path: "productAttr", name: "productAttr", meta:{title:'商品类型列表'}, component: () => import('../views/pms/productAttr/index.vue') },    //商品类型
      { path: "productAttrAdd", name: "productAttrAdd", meta:{title:'添加商品类型'}, component: () => import('../views/pms/productAttr/add.vue') },   //添加商品类型
      { path: "updateAttr/:id/:name", name: "updateAttr", meta:{title:'修改商品类型'}, component: () => import('../views/pms/productAttr/update.vue') },    //  修改商品类型信息
      { path: "brand", name: "brand", meta:{title:'商品品牌列表'}, component: () => import('../views/pms/brand/index.vue') },    //商品品牌
      { path: "brandadd", name: "brandAdd", meta:{title:'添加商品品牌'}, component: () => import('../views/pms/brand/add.vue') },    //添加商品品牌
      { path: "updatebrand/:id", name: "updatebrand", meta:{title:'修改商品品牌'}, component: () => import('../views/pms/brand/update.vue') },   //修改品牌信息
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue')
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "page404" */ '../views/page404/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
