(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-538bf79f"],{"2d17":function(t,e,r){"use strict";r.r(e);r("b0c0");var n=r("c4c8"),u={name:"updateAttr",data:function(){return{listQuery:{name:""},rules:{name:[{required:!0,message:"请输入商品类型名称",triggle:"blur"}]}}},created:function(){},methods:{changeAttr:function(){var e=this;Object(n.r)({id:this.$route.params.id,name:this.$route.params.name+"ltf"}).then(function(t){"修改成功"==t.msg&&(e.$message({message:"成功修改商品类型",duration:1e3,type:"success"}),e.$router.push("/pms/productAttr"))})}}},r=(r("9ee7"),r("2877")),u=Object(r.a)(u,function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("div",{staticClass:"title"},[e._v("编辑类型")]),t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm addlist",attrs:{model:e.listQuery,rules:e.rules,"label-width":"130px"}},[t("el-form-item",{attrs:{label:"类型名称",prop:"name"}},[t("el-input",{model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name",t)},expression:"listQuery.name"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.changeAttr}},[e._v("确认修改")])],1)],1)],1)},[],!1,null,"7e536ac9",null);e.default=u.exports},"462e":function(t,e,r){},"9ee7":function(t,e,r){"use strict";r("462e")},c4c8:function(t,e,r){"use strict";r.d(e,"n",function(){return u}),r.d(e,"k",function(){return a}),r.d(e,"m",function(){return c}),r.d(e,"l",function(){return o}),r.d(e,"i",function(){return d}),r.d(e,"j",function(){return i}),r.d(e,"b",function(){return s}),r.d(e,"d",function(){return l}),r.d(e,"a",function(){return p}),r.d(e,"c",function(){return m}),r.d(e,"t",function(){return f}),r.d(e,"q",function(){return _}),r.d(e,"e",function(){return b}),r.d(e,"g",function(){return h}),r.d(e,"f",function(){return g}),r.d(e,"h",function(){return j}),r.d(e,"r",function(){return O}),r.d(e,"s",function(){return y}),r.d(e,"p",function(){return v}),r.d(e,"u",function(){return w}),r.d(e,"o",function(){return k});var n=r("b775");function u(t){return Object(n.a)({url:"product_list",methods:"get",params:t})}function a(t){return Object(n.a)({url:"get_product_attr",method:"get",params:t})}function c(t,e){return Object(n.a)({url:"get_product_category_list/"+e,method:"get",params:t})}function o(t){return Object(n.a)({url:"get_product_brand_pag",method:"get",params:t})}function d(t){return Object(n.a)({url:"get_product_brand",method:"get",params:t})}function i(t){return Object(n.a)({url:"get_product_category",method:"get",params:t})}function s(t){return Object(n.a)({url:"create_product",method:"post",data:t})}function l(t){return Object(n.a)({url:"create_product_cate",method:"post",data:t})}function p(t){return Object(n.a)({url:"create_product_brand",method:"post",data:t})}function m(t){return Object(n.a)({url:"create_product_attr",method:"post",data:t})}function f(t){return Object(n.a)({url:"update_product",method:"post",data:t})}function _(t){return Object(n.a)({url:"product_one",method:"get",params:t})}function b(t){return Object(n.a)({url:"delete_status",method:"get",params:t})}function h(t){return Object(n.a)({url:"delete_category",method:"post",data:t})}function g(t){return Object(n.a)({url:"delete_product_attr",method:"get",params:t})}function j(t){return Object(n.a)({url:"delete_product_brand",method:"get",params:t})}function O(t){return Object(n.a)({url:"update_product_attr",method:"post",data:t})}function y(t){return Object(n.a)({url:"update_product_cate",method:"post",data:t})}function v(t){return Object(n.a)({url:"product_cate_one",method:"get",params:t})}function w(t){return Object(n.a)({url:"update_product_brand",method:"post",data:t})}function k(t){return Object(n.a)({url:"brand_one",method:"get",params:t})}}}]);