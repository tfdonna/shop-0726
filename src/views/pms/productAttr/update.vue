<template>
  <div>
      <div class="title">编辑类型</div>
      <el-form :model="listQuery" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm addlist" >
          <el-form-item label="类型名称" prop="name">
              <el-input v-model="listQuery.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="changeAttr">确认修改</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
import {updateAttr} from '../../../api/product'
export default {
    name: 'updateAttr',
    data(){
        return{
            listQuery: {
                name: '',
            },
            rules: {
                name: [{required: true, message: '请输入商品类型名称', triggle: 'blur'}]
            }
        }
    },
    created() {
        console.log(this.$route);
    },
    methods: {
        changeAttr() {
            updateAttr({
                id: this.$route.params.id,
                name: this.$route.params.name + 'ltf',
            }).then((res) => {
                console.log(res);
                if(res.msg == '修改成功'){
                            this.$message({
                                message: '成功修改商品类型',
                                duration: 1000,
                                type: 'success'
                            });
                            this.$router.push('/pms/productAttr');
                }
            });
        },
    },
}
</script>

<style lang="scss" scoped>
.title{
    height: 50px;
}
</style>