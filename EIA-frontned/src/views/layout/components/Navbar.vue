<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <breadcrumb></breadcrumb>
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">
        {{name}}
        <i class="el-icon-caret-bottom"></i>
      </div>

      <el-dropdown-menu class="user-dropdown" slot="dropdown">
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>首页</el-dropdown-item>
        </router-link>

        <el-dropdown-item>
          <span @click="togglePutInfo">个人信息修改</span>
        </el-dropdown-item>

        <el-dropdown-item divided>
          <span @click="logout" style="display:block;">退出登录</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

        <el-dialog :visible.sync="dialogVisible" :before-close="handleClose">
          <el-form ref="userInfoForm" :model="userInfoForm" label-width="100px" :rules="userInfoFormRules">

            <el-form-item label="姓名" prop="name">
              <el-input v-model="userInfoForm.name" type="text" name="name"></el-input>
            </el-form-item>

            <el-form-item label="邮箱" prop="email">
              <el-input v-model="userInfoForm.email" type="text" name="email"></el-input>
            </el-form-item>

            <el-form-item label="手机号" prop="telephone">
              <el-input v-model="userInfoForm.telephone" type="text" name="telephone"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="handlePutUserInfo">保存</el-button>
              <el-button @click="dialogVisible = false">取消</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import { isvalidUserName, isvalidUserEmail, isvalidUserPhone } from '@/utils/validate'
import { putUserInfo } from '@/api/user'
import store from '@/store'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },

  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'name',
      'telephone',
      'email'])
  },
  data() {
    const validateUserName = (rule, value, callback) => {
      if (!isvalidUserName(value)) {
        callback(new Error('请输入正确的姓名(英文或汉字)'))
      } else {
        callback()
      }
    }

    const validateUserEmail = (rule, value, callback) => {
      if (!isvalidUserEmail(value)) {
        callback(new Error('请输入正确的邮箱'))
      } else {
        callback()
      }
    }

    const validateUserPhone = (rule, value, callback) => {
      if (!isvalidUserPhone(value)) {
        callback(new Error('请输入正确的电话号码'))
      } else {
        callback()
      }
    }

    return {
      userInfoForm: {
        name: '',
        email: '',
        telephone: ''
      },
      dialogVisible: false,
      userInfoFormRules: {
        name: [{ required: true, trigger: 'blur', validator: validateUserName }],
        email: [{ required: true, trigger: 'blur', validator: validateUserEmail }],
        telephone: [{ required: true, trigger: 'blur', validator: validateUserPhone }]
      }
    }
  },
  methods: {
    togglePutInfo() {
      store.dispatch('GetInfo')
      this.userInfoForm.name = this.name
      this.userInfoForm.email = this.email
      this.userInfoForm.telephone = this.telephone
      this.dialogVisible = true
    },
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    },

    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },

    handlePutUserInfo() {
      this.$refs.userInfoForm.validate(valid => {
        if (valid) {
          this.loading = true
          putUserInfo(this.userInfoForm.name,
            this.userInfoForm.email, this.userInfoForm.telephone).then(response => {})
          this.loading = false
          this.dialogVisible = false
          this.$router.push({ path: '/dashboard' })
        } else {
          console.log('error submit!!')
          return false
        }
      })
      store.dispatch('GetInfo')
    }

  }
}

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>

