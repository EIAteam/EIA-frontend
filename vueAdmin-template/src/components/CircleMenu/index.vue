<template>
<div>
  <circle-menu type='top' :number='2' circle btn style="right:30px;bottom:30px;position:fixed">>
<el-tooltip slot="item_1" content="增加项目" placement="left">
  <a type="text" @click="dialogVisible = true" ><svg-icon  icon-class="addFile"/></a>
</el-tooltip>
    <el-tooltip slot="item_2" content="公司" placement="left">
  <svg-icon  icon-class="people"/>
</el-tooltip>

 </circle-menu>


  <el-dialog   :visible.sync="dialogVisible"  :before-close="handleClose">
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">

    <el-tab-pane label="创建公司" name="first">
      <el-form   :model="createCompanyForm" ref="createCompanyForm" :rules="companyNameRules" label-width="100px">
      <el-form-item label="公司名称" prop="companyName">
        <el-input name="companyName" type="text" v-model="createCompanyForm.companyName" placeholder="请输入正确的公司名称"></el-input>
      </el-form-item>
       <el-form-item>
        <el-button type="primary" style="width:100%;"  :loading="loading" @click.native.prevent="handleCreate">
          创建
        </el-button>
      </el-form-item>
      </el-form>
    </el-tab-pane>

    <el-tab-pane label="加入公司" name="second">
      <el-form   :model="joinCompanyForm" ref="joinCompanyForm" :rules="companyNameRules" label-width="100px">
      <el-form-item label="公司名称"  prop="companyName">
        <el-input name="companyName" type="text" v-model="joinCompanyForm.companyName" placeholder="请输入正确的公司名称"></el-input>
      </el-form-item>
       <el-form-item>
        <el-button type="primary" style="width:100%;"  @click.native.prevent="handleJoin">
          加入
        </el-button>
      </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>

  <span slot="footer" class="dialog-footer">

    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
</div>

</template>

<script>
import CircleMenu from 'vue-circle-menu'
import { isvalidCompanyName } from '@/utils/validate'
import { createCompany } from '@/api/company'
export default {
  name: 'CircleList',
  data() {
    const validteCompanyName = (rule, value, callback) => {
      if (!isvalidCompanyName(value)) {
        callback(new Error('请输入正确的公司名'))
      } else {
        callback()
      }
    }
    return {
      createCompanyForm: {
        companyName: ''
      },
      joinCompanyForm: {
        companyName: ''
      },
      companyNameRules: {
        companyName: [{ required: true, trigger: 'blur', validator: validteCompanyName }]
      },
      activeName: 'first',
      dialogVisible: false,
      loading: false
    }
  },
  components: {
    CircleMenu
  },
  methods: {
    handleCreate() {
      this.$refs.createCompanyForm.validate(valid => {
        if (valid) {
          this.loading = true
          createCompany(this.$refs.createCompanyForm.companyName).then(() => {
            this.loading = false
            this.dialogVisible = false
            this.$router.push({ path: '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleJoin() {
      this.$refs.joinCompanyForm.validate(valid => {
        if (valid) {
          this.loading = true
          createCompany(this.$store.getters.userId).then(() => {
            this.loading = false
            this.dialogVisible = false
            this.$router.push({ path: '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
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
    handleOpen() {
      this.createCompanyForm.companyName = ''
      this.joinCompanyForm.companyName = ''
    }
  }
}
</script>

