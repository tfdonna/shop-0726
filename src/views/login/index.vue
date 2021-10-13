<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix box-title">
        <span>电商后台管理系统</span>
      </div>
      <el-form ref="ruleForm" :model="ruleForm" label-width="70px" status-icon :rules="rules" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" placeholder="请输入用户名" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
    nema: 'login',
    data(){
      return{
        ruleForm: {},
        rules: { 
          username: [{required: true, message: '请输入用户名', triggle: 'blur'},
                      {min:3, max:15, message: '长度在3-15个字符之间', triggle: 'blur'}],
          password: [{required: true, message: '请输入密码', triggle: 'blur'}]
        }
      }
    },
    methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log("submit!");
            //调用了 store 中的 action（写了登录操作）
            this.$store.dispatch("LOGIN_AC", this.ruleForm).then((res) => {
              console.log(res);
              if (res.status == 200) {
                this.$message({
                  message: "恭喜你，登录成功",
                  type: "success",
                  duration: 1000,
                });
                this.$router.push("/");
              }
            });
          } else {
            console.log("error submit!!");

            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    },
    
}
</script>

<style lang="scss" scoped>
.box-card {
  width: 500px;
  height: 400px;
  margin: 100px auto;
  .box-title {
    background: #409eff;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    height: 80px;
    line-height: 80px;
  }
}
</style>