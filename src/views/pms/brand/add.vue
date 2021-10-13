<template>
  <div>
      <el-card class="box-card">
          <div class="clearfix">
              <i class="iconfont icon-order"></i>
              <span>添加品牌</span>
          </div>
      </el-card>
      <el-form :model="listQuery" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm addlist" >
          <el-form-item label="品牌名称" prop="name">
              <el-input v-model="listQuery.name"></el-input>
          </el-form-item>
          <el-form-item label="品牌首字母" prop="first_letter">
              <el-input v-model="listQuery.first_letter"></el-input>
          </el-form-item>
          <el-form-item label="品牌制造商" prop="factory_status">
              <el-radio-group v-model="listQuery.factory_status">
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
              </el-radio-group>
          </el-form-item>
          <el-form-item label="是否显示：" prop="show_status">
              <el-radio-group v-model="listQuery.show_status">
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
              </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
import {createBrand} from '../../../api/product.js'
export default {
    name: 'brandAdd',
    data(){
        return{
            listQuery: {
                brand_story: '',
                big_pic: '',
                factory_status: 0,
                first_letter: '',
                logo: '',
                name: '',
                show_status: 0,
                sort: 0 
            },
            rules:{
                name: [
                    {required: true, message: '请输入商品分类名称', triggle: 'blur'},
                    {max:100, message: '长度100个字符之内', triggle: 'blur'}
                ]
            }
        }
    },
    methods:{
        submitForm(formName){
            console.log('表单提交了');
            this.$refs[formName].validate((valid) => {
                if(valid){
                    //表单验证通过
                    console.log('表单验证通过', this.listQuery);
                    //调用后台接口将数据传给服务器，生成一条新的数据
                    createBrand(this.listQuery).then(res => {
                        console.log(res);
                        if(res.msg == '添加成功'){
                            this.$message({
                                message: '成功添加品牌',
                                duration: 1000,
                                type: 'success'
                            });
                            this.$router.push('/pms/brand');
                        }
                    });
                }else{
                    console.log('’表单验证没通过');
                    return false;
                }
            })
        }
    }

}
</script>

<style>

</style>