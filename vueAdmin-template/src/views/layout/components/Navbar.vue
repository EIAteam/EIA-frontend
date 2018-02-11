<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <breadcrumb></breadcrumb>
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">
        <i class="el-icon-caret-bottom"></i>
      </div>

      <el-dropdown-menu class="user-dropdown" slot="dropdown">
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>首页</el-dropdown-item>
        </router-link>

        <el-dropdown-item>
          <span @click="dialogVisible = true">个人信息</span>
        </el-dropdown-item>

        <el-dropdown-item divided>
          <span @click="logout" style="display:block;">退出登录</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

        <el-dialog  :visible.sync="dialogVisible" :before-close="handleClose">
          <el-form ref="userInfoForm" :model="userInfoForm" label-width="100px" :rules="userInfoFormRules">

            <el-form-item label="姓名" prop="userName">
              <el-input v-model="userInfoForm.userName" type="text" name="userName"></el-input>
            </el-form-item>

            <el-form-item label="邮箱" prop="userEmail">
              <el-input v-model="userInfoForm.userEmail" type="text" name="userEmail"></el-input>
            </el-form-item>

            <el-form-item label="手机号" prop="userPhone">
              <el-input v-model="userInfoForm.userPhone" type="text" name="userPhone"></el-input>
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

export default {
  components: {
    Breadcrumb,
    Hamburger
  },

  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'])
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
        userName: '',
        userEmail: '',
        userPhone: ''
      },
      dialogVisible: false,
      userInfoFormRules: {
        userName: [{ required: true, trigger: 'blur', validator: validateUserName }],
        userEmail: [{ required: true, trigger: 'blur', validator: validateUserEmail }],
        userPhone: [{ required: true, trigger: 'blur', validator: validateUserPhone }]
      }
    }
  },

  methods: {
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
          putUserInfo(this.userInfoForm.userName,
            this.userInfoForm.userEmail, this.userInfoForm.userPhone).then(response => {})
          this.loading = false
          this.dialogVisible = false
          this.$router.push({ path: '/dashboard' })
        } else {
          console.log('error submit!!')
          return false
        }
      })
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

