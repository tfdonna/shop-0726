<template>
  <div class="pro_con">
      <el-card class="box-card">
          <div class="clearfix">
              <i class="iconfont icon-order"></i>
              <span>修改商品分类</span>
          </div>
      </el-card>
      <el-form :model="listQuery" :rules="rules" ref="ruleForm" label-width="140px" class="demo-ruleForm addlist" >
          <el-form-item label="分类名称:" prop="name">
            <el-input v-model="listQuery.name"></el-input>
          </el-form-item>
          <el-form-item label="上级分类" prop="name">
              <el-select v-model="listQuery.parent_id" placeholder="请选择" class="position">
                  <el-option
                      v-for="item in productCateOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="数量单位:" prop="product_unit">
            <el-input v-model="listQuery.product_unit" class="input-width"></el-input>
          </el-form-item>
          <el-form-item label="排序:" prop="sort">
            <el-input v-model="listQuery.sort" class="input-width"></el-input>
          </el-form-item>
          <el-form-item label="是否显示：" prop="show_status">
              <el-radio-group v-model="listQuery.show_status" class="position">
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
              </el-radio-group>
          </el-form-item>
          <el-form-item label="是否显示在导航栏：" prop="nav_status">
              <el-radio-group v-model="listQuery.nav_status" class="position">
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
              </el-radio-group>
          </el-form-item>
          <el-form-item label="关键词：" prop="keywords">
              <el-input v-model="listQuery.keywords" class="input-width"></el-input>
          </el-form-item>
          <el-form-item label="分类描述:" prop="description">
            <el-input type="textarea" v-model="listQuery.description"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">确认修改</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
import {updateCate, getCateOne, fetchProductCateList} from '../../../api/product'
export default {
  name: 'updateCate',
  data(){
        return {
            productList: [],
            listQuery: {
                icon: '', // 小图标
                name: '',  // 名称
                product_unit: '',  // 单位
                sort: 0,  //  排序
                show_status: 1,
                keywords: '',  //关键词
                description: '',  // 描述
                nav_status: 0,   // 
                level: 0,  //
                product_count: 0,   //
                parent_id: 0   //
            },
            rules:{
                name: [
                    {required: true, message: '请输入商品分类名称', triggle: 'blur'},
                    {min:2, max:100, message: '长度在2-100个字符之间', triggle: 'blur'}
                    ]
            },
            productCateOptions: []  //上级分类的数据
        }
    },
    created() {
        console.log(this.$route.params.id);
        getCateOne({ id: this.$route.params.id }).then(res => {
          console.log(res);
          this.listQuery = res.data;
        });
        this.getProductCate();
    },
    methods: {
      getProductCate: async function(){
          const res = await fetchProductCateList();
          console.log(res);

          this.productCateOptions.push({ value: 0, label: "顶级分类" });
          res.data.forEach((item) => {
              this.productCateOptions.push({ value: item.id, label: item.name });
          });
          console.log(this.productCateOptions);
      },
      submitForm(formName){
          console.log('表单提交了');
          this.$refs[formName].validate((valid) => {
              if(valid){
                  //如果添加的不是顶级分类的话，需要将level的值赋值为1
                  if(this.listQuery.parent_id != 0){
                      this.listQuery.level = 1;
                  }

                  //表单验证通过
                  console.log('表单验证通过', this.listQuery);
                  //调用后台接口将数据传给服务器，生成一条新的数据
                  updateCate(this.listQuery).then(res => {
                        if(res.msg == '修改成功'){
                            this.$message({
                                message: '成功修改商品分类',
                                duration: 1000,
                                type: 'success'
                            });
                            this.$router.push('/pms/productCate');
                        }
                    })
              }else{
                  console.log('’表单验证没通过');
                  return false;
              }
          })
    }
  }
}
</script>

<style lang="scss" scoped>
.addlist{
  margin-top: 20px;
}
.position{
  float: left;
}
.input-width{
  float: left;
}
</style>