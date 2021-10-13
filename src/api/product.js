import request from '../utils/request.js';

//获取商品列表
export function fetchProductList(params){
    return request({
        url: 'product_list',
        methods: 'get',
        params: params
    })
}

//调用商品类型的数据
export function fetchProductAttrList(params){
    return request({
        url: 'get_product_attr',
        method: 'get',
        params: params
    })
}

//获取商品分类数据
export function fetchProductCateList(params, parent_id) {
    return request({
        url: "get_product_category_list/"+parent_id,//从 后台api里面查找
        method: "get",
        params: params
    })
}

//获取商品品牌信息
export function fetchProductBrand(params){
    return request({
        url: 'get_product_brand_pag',
        method: 'get',
        params: params
    })
}

//商品品牌搜索
export function fetchBrand(params) {
    return request({
        url: "get_product_brand",
        method: "get",
        params: params
    })
}

//获取商品分类数据，有子节点
export function fetchCategory(params){
    return request({
        url: 'get_product_category',
        method: 'get',
        params: params
    })
}

//添加商品接口
export function createProduct(data){
    return request({
        url: 'create_product',
        method: 'post',
        data: data
    })
}

//添加商品分类信息接口
export function createProductCate(data){
    return request({
        url: 'create_product_cate',
        method: 'post',
        data: data
    })
}

//添加品牌管理数据
export function createBrand(data){
    return request({
        url: 'create_product_brand',
        method: 'post',
        data: data
    })
}

//添加商品类型
export function createProductAttr(data){
    return request({
        url: 'create_product_attr',
        method: 'post',
        data: data
    })
}

//修改商品信息
export function updateProduct(data) {
    return request({
        url: "update_product",
        method: "post",
        data: data
    })
}

//通过id获取一条商品的记录
export function getProductOne(params) {
    return request({
        url: "product_one",
        method: "get",
        params: params
    })
}

//通过id删除商品数据
export function delProduct(params){
    return request({
        url: 'delete_status',
        method: 'get',
        params: params
    })
}

//删除商品分类信息
export function delProductCate(data){
    return request({ 
        url: 'delete_category',
        method: 'post',
        data: data
     }
    )
}

//删除商品类型信息
export function delProductAttr(params){
    return request({
        url: 'delete_product_attr',
        method: 'get',
        params: params
    })
}

//删除品牌信息
export function delbrand(params){
    return request({
        url: 'delete_product_brand',
        method: 'get',
        params: params
    })
}

//修改商品类型信息
export function updateAttr(data){
    return request({
        url: 'update_product_attr',
        method: 'post',
        data: data
    })
}

//修改商品分类信息
export function updateCate(data){
    return request({
        url: 'update_product_cate',
        method: 'post',
        data: data
    })
}
export function getCateOne(params) {
    return request({
        url: "product_cate_one",
        method: "get",
        params: params
    })
}

//修改品牌信息
export function updatebrand(data){
    return request({
        url: 'update_product_brand',
        method: 'post',
        data: data
    })
}
export function getBrandOne(params){
    return request({
        url: 'brand_one',
        method: 'get',
        params: params
    })
}
export function updateBrandFact(data){
    return request({
        url: 'update_brand_factory_status',
        method: 'post',
        data: data
    })
}
export function updateBrandShow(data){
    return request({
        url: 'update_brand_show_status',
        method: 'post',
        data: data
    })
}