<template>
 <div class="app-container" >
   <div style="z-index:1;position: absolute;width:100%" align="center">
    <h1 style="font-size:400%;color:white;text-align:center;margin-top:120px;margin-bottom:10px">思逸环评机器人</h1>
    <h2 style="color:white;text-align:center;">解放环评工程师双手的AI引擎</h2>
  <el-button type="danger" style="margin-right:80px;margin-top:50px; width:250px;height:80px;font-size:180%"  @click="handleOpenCompanyForm" round>新建分组</el-button>
   <el-button type="success" style=" width:250px;height:80px;font-size:180%" @click="handleOpenProjectForm" round>创建项目</el-button>
   </div>
<div class="img1">
</div>

 <el-dialog   :visible.sync="dialogVisible1"  :before-close="handleClose">
  <el-tabs v-model="activeName" type="card">

    <el-tab-pane label="创建分组" name="first">
      <el-form   :model="createCompanyForm" ref="createCompanyForm" :rules="companyNameRules" label-width="100px">
      <el-form-item label="分组名称" prop="companyName">
        <el-input name="companyName" type="text" v-model="createCompanyForm.companyName" placeholder="请输入正确的分组名称"></el-input>
      </el-form-item>
       <el-form-item>
        <el-button type="primary" style="width:150px;"  :loading="loading" @click.native.prevent="handleCreateCompany">
          创建
        </el-button>
            <el-button @click="dialogVisible1 = false">取 消</el-button>
      </el-form-item>
      </el-form>
    </el-tab-pane>

    <el-tab-pane label="加入分组" name="second">
      <el-form   :model="joinCompanyForm" ref="joinCompanyForm" :rules="companyNameRules" label-width="100px">
      <el-form-item label="分组名称"  prop="companyName">
        <el-input name="companyName" type="text" v-model="joinCompanyForm.companyName" placeholder="请输入正确的分组名称"></el-input>
      </el-form-item>
       <el-form-item>
        <el-button type="primary" style="width:150px;"  @click.native.prevent="handleJoinCompany">
          加入
        </el-button>
            <el-button @click="dialogVisible1 = false">取 消</el-button>
      </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>


</el-dialog>

  <el-dialog :visible.sync="dialogVisible2" :before-close="handleClose">
  <el-tabs v-model="activeName" type="card">

    <el-form ref="createProjectForm" :model="createProjectForm" label-width="100px" :rules="creatProjectRules">

      <el-form-item label="项目简称" prop="projectName">
        <el-input v-model="createProjectForm.projectName" type="text" name="projectName"></el-input>
      </el-form-item>

      <el-form-item label="所属分组" prop="projectKind">
        <el-select v-model="createProjectForm.company" placeholder="请选择所属分组" size="35px" name="projectKind">
          <el-option v-for="companyName in companyList"
          :value="companyName.companyId"
          :key="companyName.companyId"
          :label="companyName.companyName"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handleCreateProject">立即创建</el-button>
        <el-button @click="dialogVisible2 = false">取消</el-button>
      </el-form-item>

    </el-form>
  </el-tabs>
  </el-dialog>

</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { isvalidCompanyName } from '@/utils/validate'
import { createCompany, joinCompany, getCompanyList } from '@/api/company'
import { isvalidProjectName, isvalidCompany } from '@/utils/validate'
import { createProject } from '@/api/project'
import indexBack from '@/assets/indexBack.png'
export default {
  name: 'dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data() {
    const validteCompanyName = (rule, value, callback) => {
      if (!isvalidCompanyName(value)) {
        callback(new Error('请输入正确的公司名'))
      } else {
        callback()
      }
    }

    const validateProjectName = (rule, value, callback) => {
      if (!isvalidProjectName(value)) {
        callback(new Error('请输入项目名称'))
      } else {
        callback()
      }
    }

    const validateCompany = (rule, value, callback) => {
      if (!isvalidCompany(value)) {
        callback(new Error('请选择项目类型'))
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
      dialogVisible1: false,
      dialogVisible2: false,
      loading: false,
      companyList: [],
      createProjectForm: {
        projectName: '',
        company: ''
      },
      creatProjectRules: {
        projectName: [{ required: true, trigger: 'blur', validator: validateProjectName }],
        company: [{ required: true, trigger: 'change', validator: validateCompany }]
      },
      indexBack
    }
  },
  methods: {
    handleCreateCompany() {
      this.$refs.createCompanyForm.validate(valid => {
        if (valid) {
          this.loading = true
          createCompany(this.createCompanyForm.companyName).then(() => {
            this.loading = false
            this.dialogVisible1 = false
            this.$router.go(0)
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleJoinCompany() {
      this.$refs.joinCompanyForm.validate(valid => {
        if (valid) {
          this.loading = true
          joinCompany(this.joinCompanyForm.companyName).then(() => {
            this.loading = false
            this.dialogVisible1 = false
            this.$router.go(0)
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },

    handleCreateProject() {
      this.$refs.createProjectForm.validate(valid => {
        if (valid) {
          this.loading = true
          createProject(this.createProjectForm.projectName, this.createProjectForm.company).then(response => {})
          this.loading = false
          this.dialogVisible2 = false
          this.$router.go(0)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    reset() {
      this.createProjectForm.projectName = ''
      this.createProjectForm.company = ''
      this.joinCompanyForm.companyName = ''
      this.createCompanyForm.companyName = ''
    },
    handleOpenCompanyForm() {
      this.reset()
      this.dialogVisible1 = true
      this.$nextTick(() => {
        this.$refs['createCompanyForm'].clearValidate()
        this.$refs['joinCompanyForm'].clearValidate()
      })
    },

    handleOpenProjectForm() {
      this.reset()
      getCompanyList().then(response => {
        this.companyList = response
      })
      this.dialogVisible2 = true
      this.$nextTick(() => {
        this.$refs['createProjectForm'].clearValidate()
      })
    }

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
 .img1{
    width: 100%;
    height: 100%;
    background: url('~@/assets/indexBack.png') center center no-repeat;
    background-size: cover;
    filter: opacity(55%);
    position: absolute;
    z-index:0; 
    left:0px;
    top:0px;
  }
  .app-container{
    width: 100%;
    height: 900px;
    background-color: black;
    position: relative;
  }
</style>
