(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0c81b41b"],{5501:function(t,e,r){},b758:function(t,e,r){"use strict";r("5501")},bb57:function(t,e,r){"use strict";r.r(e);r("159b"),r("b0c0");var n=r("c4c8"),u={name:"productupdate",data:function(){return{listQuery:{brand_id:null,brand_name:"",delete_status:0,description:"",name:"",original_price:0,pic:"",price:0,product_category_id:null,product_category_name:"",product_sn:"",sort:0,stock:0,sub_title:"",unit:"",weight:0,sale:0,publish_status:0,recommand_status:0,new_status:0,verify_status:0},rules:{name:[{required:!0,message:"请输入商品名称",triggle:"blur"},{min:3,max:100,message:"长度在3-100个字符之间",triggle:"blur"}],sub_title:[{required:!0,message:"请输入商品副标题",triggle:"blur"}],brand_name:[{required:!0,message:"请选择商品品牌",triggle:"blur"}],description:[{required:!0,message:"请输入商品介绍",triggle:"blur"}],pic:[{required:!0,message:"请输入商品的图片地址",triggle:"blur"}]},brandOptions:[],categoryOptions:[]}},created:function(){var e=this;Object(n.q)({id:this.$route.params.id}).then(function(t){e.listQuery=t.data}),this.getBrand(),this.getCategory()},methods:{getBrand:function(){var e=this;Object(n.i)().then(function(t){e.brandOptions=t.data})},getCategory:function(){var r=this;Object(n.j)().then(function(t){t.data.forEach(function(t){var e=[];t.children.forEach(function(t){e.push({value:t.id,label:t.name})}),r.categoryOptions.push({value:t.id,label:t.name,children:e})})})},handleChange:function(t){null!==t&&2===t.length&&(this.listQuery.product_category_id=t[1])},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){return!!t&&(e.brandOptions.forEach(function(t){t.id==e.listQuery.brand_id&&(e.listQuery.brand_name=t.name)}),e.categoryOptions.forEach(function(t){t.children.forEach(function(t){t.value==e.listQuery.product_category_id&&(e.listQuery.product_category_name=t.label)})}),void Object(n.t)(e.listQuery).then(function(t){"修改成功"==t.msg&&(e.$message({message:"成功修改商品",duration:1e3,type:"success"}),e.$router.push("/pms/product"))}))})}}},r=(r("b758"),r("2877")),u=Object(r.a)(u,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-card",[e._v(" 修改商品 ")]),r("div",{staticClass:"formbox"},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm form",attrs:{model:e.listQuery,rules:e.rules,"label-width":"130px"}},[r("el-form-item",{attrs:{label:"商品分类:",prop:"product_category_id"}},[r("el-cascader",{staticClass:"position",attrs:{options:e.categoryOptions},on:{change:e.handleChange},model:{value:e.listQuery.product_category_id,callback:function(t){e.$set(e.listQuery,"product_category_id",t)},expression:"listQuery.product_category_id"}})],1),r("el-form-item",{attrs:{label:"商品名称:",prop:"name"}},[r("el-input",{model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name",t)},expression:"listQuery.name"}})],1),r("el-form-item",{attrs:{label:"副标题:",prop:"sub_title"}},[r("el-input",{model:{value:e.listQuery.sub_title,callback:function(t){e.$set(e.listQuery,"sub_title",t)},expression:"listQuery.sub_title"}})],1),r("el-form-item",{attrs:{label:"商品品牌:",prop:"brand_id"}},[r("el-select",{staticClass:"input-width position",attrs:{placeholder:"商品品牌"},model:{value:e.listQuery.brand_id,callback:function(t){e.$set(e.listQuery,"brand_id",t)},expression:"listQuery.brand_id"}},e._l(e.brandOptions,function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1),r("el-form-item",{attrs:{label:"商品介绍:",prop:"description"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.listQuery.description,callback:function(t){e.$set(e.listQuery,"description",t)},expression:"listQuery.description"}})],1),r("el-form-item",{attrs:{label:"图片链接地址:",prop:"pic"}},[r("el-input",{model:{value:e.listQuery.pic,callback:function(t){e.$set(e.listQuery,"pic",t)},expression:"listQuery.pic"}})],1),r("el-form-item",{attrs:{label:"商品货号:",prop:"product_sn"}},[r("el-input",{staticClass:"input-width",model:{value:e.listQuery.product_sn,callback:function(t){e.$set(e.listQuery,"product_sn",t)},expression:"listQuery.product_sn"}})],1),r("el-form-item",{attrs:{label:"商品售价:",prop:"price"}},[r("el-input",{staticClass:"input-width",model:{value:e.listQuery.price,callback:function(t){e.$set(e.listQuery,"price",t)},expression:"listQuery.price"}})],1),r("el-form-item",{attrs:{label:"市场价:",prop:"original_price"}},[r("el-input",{staticClass:"input-width",model:{value:e.listQuery.original_price,callback:function(t){e.$set(e.listQuery,"original_price",t)},expression:"listQuery.original_price"}})],1),r("el-form-item",{attrs:{label:"商品库存:",prop:"stock"}},[r("el-input",{staticClass:"input-width",model:{value:e.listQuery.stock,callback:function(t){e.$set(e.listQuery,"stock",t)},expression:"listQuery.stock"}})],1),r("el-form-item",{attrs:{label:"计量单位:",prop:"unit"}},[r("el-input",{staticClass:"input-width",model:{value:e.listQuery.unit,callback:function(t){e.$set(e.listQuery,"unit",t)},expression:"listQuery.unit"}})],1),r("el-form-item",{attrs:{label:"商品重量:",prop:"weight"}},[r("el-input",{staticClass:"input-width",model:{value:e.listQuery.weight,callback:function(t){e.$set(e.listQuery,"weight",t)},expression:"listQuery.weight"}}),e._v("克 ")],1),r("el-form-item",{attrs:{label:"排序:",prop:"sort"}},[r("el-input",{staticClass:"input-width",model:{value:e.listQuery.sort,callback:function(t){e.$set(e.listQuery,"sort",t)},expression:"listQuery.sort"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("更新修改")]),r("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)],1)},[],!1,null,"0b58f98c",null);e.default=u.exports},c4c8:function(t,e,r){"use strict";r.d(e,"n",function(){return u}),r.d(e,"k",function(){return i}),r.d(e,"m",function(){return a}),r.d(e,"l",function(){return o}),r.d(e,"i",function(){return s}),r.d(e,"j",function(){return l}),r.d(e,"b",function(){return c}),r.d(e,"d",function(){return d}),r.d(e,"a",function(){return p}),r.d(e,"c",function(){return m}),r.d(e,"t",function(){return f}),r.d(e,"q",function(){return b}),r.d(e,"e",function(){return _}),r.d(e,"g",function(){return g}),r.d(e,"f",function(){return h}),r.d(e,"h",function(){return y}),r.d(e,"r",function(){return Q}),r.d(e,"s",function(){return v}),r.d(e,"p",function(){return O}),r.d(e,"u",function(){return j}),r.d(e,"o",function(){return k});var n=r("b775");function u(t){return Object(n.a)({url:"product_list",methods:"get",params:t})}function i(t){return Object(n.a)({url:"get_product_attr",method:"get",params:t})}function a(t,e){return Object(n.a)({url:"get_product_category_list/"+e,method:"get",params:t})}function o(t){return Object(n.a)({url:"get_product_brand_pag",method:"get",params:t})}function s(t){return Object(n.a)({url:"get_product_brand",method:"get",params:t})}function l(t){return Object(n.a)({url:"get_product_category",method:"get",params:t})}function c(t){return Object(n.a)({url:"create_product",method:"post",data:t})}function d(t){return Object(n.a)({url:"create_product_cate",method:"post",data:t})}function p(t){return Object(n.a)({url:"create_product_brand",method:"post",data:t})}function m(t){return Object(n.a)({url:"create_product_attr",method:"post",data:t})}function f(t){return Object(n.a)({url:"update_product",method:"post",data:t})}function b(t){return Object(n.a)({url:"product_one",method:"get",params:t})}function _(t){return Object(n.a)({url:"delete_status",method:"get",params:t})}function g(t){return Object(n.a)({url:"delete_category",method:"post",data:t})}function h(t){return Object(n.a)({url:"delete_product_attr",method:"get",params:t})}function y(t){return Object(n.a)({url:"delete_product_brand",method:"get",params:t})}function Q(t){return Object(n.a)({url:"update_product_attr",method:"post",data:t})}function v(t){return Object(n.a)({url:"update_product_cate",method:"post",data:t})}function O(t){return Object(n.a)({url:"product_cate_one",method:"get",params:t})}function j(t){return Object(n.a)({url:"update_product_brand",method:"post",data:t})}function k(t){return Object(n.a)({url:"brand_one",method:"get",params:t})}}}]);