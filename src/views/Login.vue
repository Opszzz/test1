<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>登录</span>
    </div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="ruleForm.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >登录</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
export default {
  data() {
    var checkUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
      }
      const userNameReg = /^([a-zA-Z0-9])+@([a-zA-Z0-9_-])+([a-zA-Z0-9])+/;
      if (userNameReg.test(value)) {
        callback();
      } else {
        callback(new Error("账号中必须带有@"));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        const passReg = /^([a-zA-Z0-9])+_([a-zA-Z0-9_-])+([a-zA-Z0-9])+/;
        if (passReg.test(value)) {
          callback();
        } else {
          callback(new Error("密码中必须带有_"));
        }
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        userName: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        userName: [
          { validator: checkUserName, trigger: "blur" },
          { min: 6, max: 12, message: "长度应在6至12位", trigger: "blur" },
        ],
        pass: [
          { validator: validatePass, trigger: "blur" },
          { min: 12, max: 18, message: "长度应在12至18位", trigger: "blur" },
        ],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push({ path: "/Home" });
        } else {
          console.log("登陆失败");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style scoped>
.el-form {
  margin-top: 5%;
  margin-right: 15%;
}
.box-card {
  width: 480px;
  height: 400px;
  margin-top: 10%;
  margin-left: 35%;
}
</style>