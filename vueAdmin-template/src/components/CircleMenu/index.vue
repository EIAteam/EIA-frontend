<template>
<div>
  <circle-menu type='top' :number='2' circle btn style="right:30px;bottom:30px;position:fixed">>
    <el-tooltip slot="item_1" content="增加项目" placement="left">
      <a type="text" @click="handleOpen2"><svg-icon  icon-class="addFile"/></a>
    </el-tooltip>
    <el-tooltip slot="item_2" content="公司" placement="left" >
      <a type="text" @click="handleOpen1"><svg-icon  icon-class="people"/></a>
    </el-tooltip>
  </circle-menu>
  <el-dialog   :visible.sync="dialogVisible1"  :before-close="handleClose">
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

    <el-button @click="dialogVisible1 = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
  </span>

</el-dialog>

  <el-dialog :visible.sync="dialogVisible2" :before-close="handleClose">
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">

    <el-form ref="createProjectForm" :model="createProjectForm" label-width="100px" :rules="creatProjectRules">

      <el-form-item label="项目名称" prop="projectName">
        <el-input v-model="createProjectForm.projectName" type="text" name="projectName"></el-input>
      </el-form-item>

      <el-form-item label="项目类型" prop='projectKind'>
        <el-select v-model="createProjectForm.projectKind" placeholder="请选择项目类型" size="35px" name="projectKind">
          <el-option :value="name">{{name}}</el-option>
          <el-option v-for="companyName in companyList"
          :value="companyName.companyId"
          :key="companyName.id"
          :label="companyName.label"
          >{{companyName.companyName}}</el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="项目描述" prop="projectDescription">
        <el-input type="textarea" v-model="createProjectForm.projectDescription" placeholder="不填默认为项目名" name="projectDescription"></el-input>
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
import CircleMenu from 'vue-circle-menu'
import { isvalidCompanyName } from '@/utils/validate'
import { createCompany } from '@/api/company'
import { isvalidProjectName, isvalidProjectKind } from '@/utils/validate'
import { createProject } from '@/api/project'

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

    const validateProjectName = (rule, value, callback) => {
      if (!isvalidProjectName(value)) {
        callback(new Error('请输入项目名称'))
      } else {
        callback()
      }
    }

    const validateProjectKind = (rule, value, callback) => {
      if (!isvalidProjectKind(value)) {
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

      name: '用户名',
      companyList: [
        { companyName: '公司1', companyId: '公司1' },
        { companyName: '公司2', companyId: '公司2' },
        { companyName: '公司3', companyId: '公司3' }
      ],
      createProjectForm: {
        projectName: '',
        projectDescription: '',
        projectKind: ''
      },
      creatProjectRules: {
        projectName: [{ required: true, trigger: 'blur', validator: validateProjectName }],
        projectKind: [{ required: true, trigger: 'change', validator: validateProjectKind }]
      }
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
            this.dialogVisible1 = false
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
            this.dialogVisible1 = false
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

    handleCreateProject() {
      this.$refs.createProjectForm.validate(valid => {
        if (valid) {
          this.loading = true
          if (this.createProjectForm.projectDescription.length < 1) {
            this.createProjectForm.projectDescription = this.createProjectForm.projectName
          }
          createProject(this.createProjectForm.projectName,
            this.createProjectForm.projectDescription,
            this.createProjectForm.projectKind).then(response => {})
          this.loading = false
          this.dialogVisible2 = false
          this.$router.push({ path: '/dashboard' })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    reset() {
      this.createProjectForm.projectName = ''
      this.createProjectForm.projectKind = ''
      this.createProjectForm.projectDescription = ''
      this.joinCompanyForm.companyName = ''
      this.createCompanyForm.companyName = ''
    },
    handleOpen1() {
      this.reset()
      this.dialogVisible1 = true
      this.$nextTick(() => {
        this.$refs['createCompanyForm'].clearValidate()
        this.$refs['joinCompanyForm'].clearValidate()
      })
    },

    handleOpen2() {
      this.reset()
      this.dialogVisible2 = true
      this.$nextTick(() => {
        this.$refs['createProjectForm'].clearValidate()
      })
    }

  }
}
</script>

