<template>
  <div>
       <el-card class="box-card">
          <div class="clearfix">
              <i class="iconfont icon-order"></i>
              <span>添加商品类型</span>
          </div>
      </el-card>
      <el-form :model="listQuery" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm addlist" >
          <el-form-item label="类型名称" prop="name">
              <el-input v-model="listQuery.name"></el-input>
          </el-form-item>
          <el-form-item label="属性数量" prop="attribute_count">
              <el-input v-model="listQuery.attribute_count"></el-input>
          </el-form-item>
          <el-form-item label="参数数量" prop="param_count">
              <el-input v-model="listQuery.param_count"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
import {createProductAttr} from '../../../api/product'
export default {
    name: 'productAttrAdd',
    data(){
        return{
            listQuery: {
                name: '',
                attribute_count: 0,
                param_count: 0
            },
            rules: {
                name: [{required: true, message: '请输入啥高频类型名称', triggle: 'blur'}]
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
                    createProductAttr(this.listQuery).then(res => {
                        console.log(res);
                        if(res.msg == '添加成功'){
                            this.$message({
                                message: '成功添加商品类型',
                                duration: 1000,
                                type: 'success'
                            });
                            this.$router.push('/pms/productAttr');
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