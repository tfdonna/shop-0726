(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-26de35c8"],{"25aa":function(t,e,r){"use strict";r("912a")},"39b0":function(t,e,r){"use strict";r.r(e);var u=r("c4c8"),n={name:"updatebrand",data:function(){return{listQuery:{big_pic:"",brand_story:"",factory_status:0,first_letter:"",logo:"",name:"",show_status:0,sort:0},rules:{name:[{required:!0,message:"请输入品牌名称",triggle:"blur"},{max:100,message:"长度100个字符之内",triggle:"blur"}],logo:[{required:!0,message:"请输入品牌logo链接",triggle:"blur"}]}}},created:function(){var e=this;Object(u.o)({id:this.$route.params.id}).then(function(t){e.listQuery=t.data})},methods:{submitForm:function(t){var e=this;this.$refs[t].validate(function(t){return!!t&&void Object(u.u)(e.listQuery).then(function(t){"修改成功"==t.msg&&(e.$message({message:"成功修改品牌信息",duration:1e3,type:"success"}),e.$router.push("/pms/brand"))})})}}},r=(r("25aa"),r("2877")),n=Object(r.a)(n,function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",{staticClass:"updatebrand"},[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix"},[t("i",{staticClass:"iconfont icon-order"}),t("span",[e._v("添加品牌")])])]),t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm addlist",attrs:{model:e.listQuery,rules:e.rules,"label-width":"130px"}},[t("el-form-item",{attrs:{label:"品牌名称",prop:"name"}},[t("el-input",{model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name",t)},expression:"listQuery.name"}})],1),t("el-form-item",{attrs:{label:"品牌首字母",prop:"first_letter"}},[t("el-input",{model:{value:e.listQuery.first_letter,callback:function(t){e.$set(e.listQuery,"first_letter",t)},expression:"listQuery.first_letter"}})],1),t("el-form-item",{attrs:{label:"品牌LOGO",prop:"logo"}},[t("el-input",{model:{value:e.listQuery.logo,callback:function(t){e.$set(e.listQuery,"logo",t)},expression:"listQuery.logo"}})],1),t("el-form-item",{attrs:{label:"品牌专区大图",prop:"big_pic"}},[t("el-input",{model:{value:e.listQuery.big_pic,callback:function(t){e.$set(e.listQuery,"big_pic",t)},expression:"listQuery.big_pic"}})],1),t("el-form-item",{attrs:{label:"品牌故事",prop:"brand_story"}},[t("el-input",{model:{value:e.listQuery.brand_story,callback:function(t){e.$set(e.listQuery,"brand_story",t)},expression:"listQuery.brand_story"}})],1),t("el-form-item",{attrs:{label:"排序",prop:"sort"}},[t("el-input",{model:{value:e.listQuery.sort,callback:function(t){e.$set(e.listQuery,"sort",t)},expression:"listQuery.sort"}})],1),t("el-form-item",{attrs:{label:"品牌制造商",prop:"factory_status"}},[t("el-radio-group",{model:{value:e.listQuery.factory_status,callback:function(t){e.$set(e.listQuery,"factory_status",t)},expression:"listQuery.factory_status"}},[t("el-radio",{attrs:{label:1}},[e._v("是")]),t("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1),t("el-form-item",{attrs:{label:"是否显示：",prop:"show_status"}},[t("el-radio-group",{model:{value:e.listQuery.show_status,callback:function(t){e.$set(e.listQuery,"show_status",t)},expression:"listQuery.show_status"}},[t("el-radio",{attrs:{label:1}},[e._v("是")]),t("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("立即创建")]),t("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},[],!1,null,"f48e638c",null);e.default=n.exports},"912a":function(t,e,r){},c4c8:function(t,e,r){"use strict";r.d(e,"n",function(){return n}),r.d(e,"k",function(){return a}),r.d(e,"m",function(){return o}),r.d(e,"l",function(){return s}),r.d(e,"i",function(){return l}),r.d(e,"j",function(){return i}),r.d(e,"b",function(){return c}),r.d(e,"d",function(){return d}),r.d(e,"a",function(){return p}),r.d(e,"c",function(){return f}),r.d(e,"t",function(){return m}),r.d(e,"q",function(){return b}),r.d(e,"e",function(){return _}),r.d(e,"g",function(){return g}),r.d(e,"f",function(){return y}),r.d(e,"h",function(){return h}),r.d(e,"r",function(){return Q}),r.d(e,"s",function(){return O}),r.d(e,"p",function(){return j}),r.d(e,"u",function(){return v}),r.d(e,"o",function(){return k});var u=r("b775");function n(t){return Object(u.a)({url:"product_list",methods:"get",params:t})}function a(t){return Object(u.a)({url:"get_product_attr",method:"get",params:t})}function o(t,e){return Object(u.a)({url:"get_product_category_list/"+e,method:"get",params:t})}function s(t){return Object(u.a)({url:"get_product_brand_pag",method:"get",params:t})}function l(t){return Object(u.a)({url:"get_product_brand",method:"get",params:t})}function i(t){return Object(u.a)({url:"get_product_category",method:"get",params:t})}function c(t){return Object(u.a)({url:"create_product",method:"post",data:t})}function d(t){return Object(u.a)({url:"create_product_cate",method:"post",data:t})}function p(t){return Object(u.a)({url:"create_product_brand",method:"post",data:t})}function f(t){return Object(u.a)({url:"create_product_attr",method:"post",data:t})}function m(t){return Object(u.a)({url:"update_product",method:"post",data:t})}function b(t){return Object(u.a)({url:"product_one",method:"get",params:t})}function _(t){return Object(u.a)({url:"delete_status",method:"get",params:t})}function g(t){return Object(u.a)({url:"delete_category",method:"post",data:t})}function y(t){return Object(u.a)({url:"delete_product_attr",method:"get",params:t})}function h(t){return Object(u.a)({url:"delete_product_brand",method:"get",params:t})}function Q(t){return Object(u.a)({url:"update_product_attr",method:"post",data:t})}function O(t){return Object(u.a)({url:"update_product_cate",method:"post",data:t})}function j(t){return Object(u.a)({url:"product_cate_one",method:"get",params:t})}function v(t){return Object(u.a)({url:"update_product_brand",method:"post",data:t})}function k(t){return Object(u.a)({url:"brand_one",method:"get",params:t})}}}]);