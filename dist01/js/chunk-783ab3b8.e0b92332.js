(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-783ab3b8"],{c4c8:function(t,r,e){"use strict";e.d(r,"n",function(){return u}),e.d(r,"k",function(){return a}),e.d(r,"m",function(){return o}),e.d(r,"l",function(){return c}),e.d(r,"i",function(){return i}),e.d(r,"j",function(){return d}),e.d(r,"b",function(){return l}),e.d(r,"d",function(){return s}),e.d(r,"a",function(){return m}),e.d(r,"c",function(){return p}),e.d(r,"t",function(){return f}),e.d(r,"q",function(){return b}),e.d(r,"e",function(){return _}),e.d(r,"g",function(){return h}),e.d(r,"f",function(){return g}),e.d(r,"h",function(){return j}),e.d(r,"r",function(){return O}),e.d(r,"s",function(){return y}),e.d(r,"p",function(){return v}),e.d(r,"u",function(){return Q}),e.d(r,"o",function(){return k});var n=e("b775");function u(t){return Object(n.a)({url:"product_list",methods:"get",params:t})}function a(t){return Object(n.a)({url:"get_product_attr",method:"get",params:t})}function o(t,r){return Object(n.a)({url:"get_product_category_list/"+r,method:"get",params:t})}function c(t){return Object(n.a)({url:"get_product_brand_pag",method:"get",params:t})}function i(t){return Object(n.a)({url:"get_product_brand",method:"get",params:t})}function d(t){return Object(n.a)({url:"get_product_category",method:"get",params:t})}function l(t){return Object(n.a)({url:"create_product",method:"post",data:t})}function s(t){return Object(n.a)({url:"create_product_cate",method:"post",data:t})}function m(t){return Object(n.a)({url:"create_product_brand",method:"post",data:t})}function p(t){return Object(n.a)({url:"create_product_attr",method:"post",data:t})}function f(t){return Object(n.a)({url:"update_product",method:"post",data:t})}function b(t){return Object(n.a)({url:"product_one",method:"get",params:t})}function _(t){return Object(n.a)({url:"delete_status",method:"get",params:t})}function h(t){return Object(n.a)({url:"delete_category",method:"post",data:t})}function g(t){return Object(n.a)({url:"delete_product_attr",method:"get",params:t})}function j(t){return Object(n.a)({url:"delete_product_brand",method:"get",params:t})}function O(t){return Object(n.a)({url:"update_product_attr",method:"post",data:t})}function y(t){return Object(n.a)({url:"update_product_cate",method:"post",data:t})}function v(t){return Object(n.a)({url:"product_cate_one",method:"get",params:t})}function Q(t){return Object(n.a)({url:"update_product_brand",method:"post",data:t})}function k(t){return Object(n.a)({url:"brand_one",method:"get",params:t})}},d780:function(t,r,e){"use strict";e.r(r);var n=e("c4c8"),u={name:"productAttrAdd",data:function(){return{listQuery:{name:"",attribute_count:0,param_count:0},rules:{name:[{required:!0,message:"请输入啥高频类型名称",triggle:"blur"}]}}},methods:{submitForm:function(t){var r=this;this.$refs[t].validate(function(t){return!!t&&void Object(n.c)(r.listQuery).then(function(t){"添加成功"==t.msg&&(r.$message({message:"成功添加商品类型",duration:1e3,type:"success"}),r.$router.push("/pms/productAttr"))})})}}},e=e("2877"),u=Object(e.a)(u,function(){var r=this,t=r.$createElement,t=r._self._c||t;return t("div",[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix"},[t("i",{staticClass:"iconfont icon-order"}),t("span",[r._v("添加商品类型")])])]),t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm addlist",attrs:{model:r.listQuery,rules:r.rules,"label-width":"130px"}},[t("el-form-item",{attrs:{label:"类型名称",prop:"name"}},[t("el-input",{model:{value:r.listQuery.name,callback:function(t){r.$set(r.listQuery,"name",t)},expression:"listQuery.name"}})],1),t("el-form-item",{attrs:{label:"属性数量",prop:"attribute_count"}},[t("el-input",{model:{value:r.listQuery.attribute_count,callback:function(t){r.$set(r.listQuery,"attribute_count",t)},expression:"listQuery.attribute_count"}})],1),t("el-form-item",{attrs:{label:"参数数量",prop:"param_count"}},[t("el-input",{model:{value:r.listQuery.param_count,callback:function(t){r.$set(r.listQuery,"param_count",t)},expression:"listQuery.param_count"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return r.submitForm("ruleForm")}}},[r._v("立即创建")]),t("el-button",{on:{click:function(t){return r.resetForm("ruleForm")}}},[r._v("重置")])],1)],1)],1)},[],!1,null,null,null);r.default=u.exports}}]);