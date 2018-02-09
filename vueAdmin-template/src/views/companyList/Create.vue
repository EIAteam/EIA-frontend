<template>
  <div>
    <el-form ref="createProjectForm" :model="createProjectForm" label-width="100px" :rules="creatProjectRules">

      <el-form-item label="项目名称" prop="projectName">
        <el-input v-model="createProjectForm.projectName" type="text" style="width:600px;" name="projectName"></el-input>
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
        <el-input type="textarea" v-model="createProjectForm.projectDescription"
        style="width:600px;" placeholder="不填默认为项目名" name="projectDescription"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handleCreateProject">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import { isvalidProjectName, isvalidProjectKind } from '@/utils/validate'
import { createProject } from '@/api/project'

export default {
  data() {
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
        projectKind: [{ required: true, trigger: 'blur', validator: validateProjectKind }]
      }
    }
  },

  methods: {
    handleCreateProject() {
      this.$refs.createProjectForm.validate(valid => {
        if (valid) {
          this.loading = true
          if (this.createProjectForm.projectDescription.length < 1) {
            this.createProjectForm.projectDescription = this.createProjectForm.projectName
          }
          createProject(this.createProjectForm.projectName,
            this.createProjectForm.projectDescribtion,
            this.createProjectForm.projectKind).then(response => {})
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


