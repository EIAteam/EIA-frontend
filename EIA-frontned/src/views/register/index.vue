<template>
  <div class="register-container">
    <!--注册表单-->
    <el-form autoComplete="on" :model="registerForm" :rules="registerRules" ref="registerForm" label-position="left" label-width="0px"
      class="card-box register-form">
      <h3 class="title" style="margin-bottom:0px;font-size:40px">SMART-EIA</h3>
      <h3 class="title" style="margin-bottom:30px;font-size:20px">思逸智能环评加速器</h3>
      <h3 class="title">用 户 注 册</h3>
    <!--用户名-->
      <el-form-item prop="username">
        <span class="svg-container svg-container_register">
          <svg-icon icon-class="user" />
        </span>
        <el-input name="username" type="text" v-model="registerForm.username" autoComplete="on" placeholder="邮箱注册" />
      </el-form-item>
    <!--./用户名-->
    <!--姓名-->
      <el-form-item prop="name">
        <span class="svg-container svg-container_register">
          <svg-icon icon-class="user" />
        </span>
        <el-input name="name" type="text" v-model="registerForm.name" autoComplete="on" placeholder="姓名" />
      </el-form-item>
    <!--./姓名-->
    <!--姓名-->
      <el-form-item prop="telephone">
        <span class="svg-container svg-container_register">
          <svg-icon icon-class="telephone" />
        </span>
        <el-input name="telephone" type="text" v-model="registerForm.telephone" autoComplete="on" placeholder="手机号" />
      </el-form-item>
    <!--./姓名-->
    <!--密码-->
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password"></svg-icon>
        </span>
        <el-input name="password" :type="pwdType" v-model="registerForm.password" autoComplete="on"
          placeholder="密码"></el-input>
          <span class="show-pwd" @click="showPwd"><svg-icon icon-class="eye" /></span>
      </el-form-item>
    <!--./密码-->
    <!--密码-->
      <el-form-item prop="rePassword">
        <span class="svg-container">
          <svg-icon icon-class="password"></svg-icon>
        </span>
        <el-input name="rePassword" :type="pwdType"  v-model="registerForm.rePassword" autoComplete="on"
          placeholder="密码确认"></el-input>
          <span class="show-pwd" @click="showPwd"><svg-icon icon-class="eye" /></span>
      </el-form-item>
    <!--./密码-->

    <!--按钮-->
      <el-form-item>
        <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleRegister">
          注册
        </el-button>
      </el-form-item>
       <el-form-item>
        <el-button type="success" style="width:100%;" :loading="loading">
          <router-link to="/login">已有账户，去登陆</router-link>
        </el-button>
      </el-form-item>
    <!--./按钮-->
    </el-form>
  <!--./登陆表单-->
  </div>
</template>

<script>
import { Message } from 'element-ui'
export default {
  name: 'register',
  data() {
    return {
      registerForm: {
        username: '',
        name: '',
        telephone: '',
        password: '',
        rePassword: ''
      },
      registerRules: {
        username: [{ required: true, trigger: 'blur', message: '请输入正确的邮箱格式', type: 'email' }],
        name: [{ required: true, whitespace: true, trigger: 'blur', message: '请输入姓名', pattern: /^[a-zA-Z\u4e00-\u9fa5]{2,15}$/ }],
        telephone: [{ required: true, whitespace: true, trigger: 'blur', message: '请输入正确手机号码', pattern: /^[1][3,4,5,7,8][0-9]{9}$/ }],
        password: [{ required: true, whitespace: true, trigger: 'blur', message: '请输入6-18位密码', pattern: /^[a-z0-9_-]{6,18}$/ }],
        repassword: [{ required: true, whitespace: true, trigger: 'blur', message: '请输入6-18位密码', pattern: /^[a-z0-9_-]{6,18}$/ }]
      },
      loading: false,
      pwdType: 'password'
    }
  },

  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleRegister() {
      if (this.registerForm.password === this.registerForm.rePassword) {
        this.$refs.registerForm.validate(valid => {
          if (valid) {
            this.loading = true
            this.$store.dispatch('Register', this.registerForm).then(() => {
              this.loading = false
              this.$router.push({ path: '/login' })
            }).catch(() => {
              this.loading = false
            })
          }
        })
      } else {
        Message({
          message: '两次密码不一致',
          type: 'error',
          duration: 1 * 1000
        })
        return false
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  $bg:#2d3a4b;
  $dark_gray:#889aa4;
  $light_gray:#eee;

  .register-container {
    position: fixed;
    height: 100%;
    width:100%;
    background-color: $bg;
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
      -webkit-text-fill-color: #fff !important;
    }
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
    }
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      &_register {
        font-size: 20px;
      }
    }
    .title {
      font-size: 26px;
      font-weight: 400;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .register-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 400px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select:none;
    }
    .thirdparty-button{
      position: absolute;
      right: 35px;
      bottom: 28px;
    }
  }
</style>
