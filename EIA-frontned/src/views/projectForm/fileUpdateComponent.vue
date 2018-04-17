<template>
  <div class="app-container">
  <el-row class="panel-group" :gutter="80" >

  <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>环评报告-初稿</span>
  </div>
  <el-upload 
  class="upload-demo"
  drag
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :headers="header"
  :file-list="firstEIAReport"
  :on-success="handleSuccess"
  :on-progress="handleProgress"
  :on-exceed="handleExceed"
  :before-upload="handleBeforeUpload"
  :data="firstEIAReportUploadInfo"
  :limit="5"
  v-loading.fullscreen.lock="fullscreenLoading"
  :action="url"
  multiple>
   <i class="el-icon-upload"></i>
  <div class="el-upload__text">[+]请<em>点击选择</em>或拖拽上传<em>doc docx pdf</em>文件、限制每个50.0MB以内。</div>
</el-upload>
</el-card>
</el-col>

  <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>基础信息表</span>
  </div>
  <el-upload
  class="upload-demo"
  drag
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :headers="header"
  :file-list="basicInfoFile"
  :on-success="handleSuccess"
  :on-progress="handleProgress"
  :on-exceed="handleExceed"
  :before-upload="handleBeforeUpload"
  :data="basicInfoFileUploadInfo"
  :limit="5"
  v-loading.fullscreen.lock="fullscreenLoading"
  :action="url"
  multiple>
   <i class="el-icon-upload"></i>
  <div class="el-upload__text">[+]请<em>点击选择</em>或拖拽上传<em>xlsx xlsm</em>文件、限制每个50.0MB以内。</div>
</el-upload>
</el-card>
</el-col>

  <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>废气分析表</span>
  </div>
  <el-upload
  class="upload-demo"
  drag
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :headers="header"
  :file-list="exhaustGasInfoFile"
  :on-success="handleSuccess"
  :on-progress="handleProgress"
  :on-exceed="handleExceed"
  :before-upload="handleBeforeUpload"
  :data="exhaustGasInfoFileUploadInfo"
  :limit="5"
  v-loading.fullscreen.lock="fullscreenLoading"
  :action="url"
  multiple>
   <i class="el-icon-upload"></i>
  <div class="el-upload__text">[+]请<em>点击选择</em>或拖拽上传<em>xlsx xlsm</em>文件、限制每个50.0MB以内。</div>
</el-upload>
</el-card>
</el-col>
  <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>环评报告-自定义终稿</span>
  </div>
  <el-upload
  class="upload-demo"
  drag
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :headers="header"
  :file-list="finalEIAReport"
  :on-success="handleSuccess"
  :on-progress="handleProgress"
  :on-exceed="handleExceed"
  :before-upload="handleBeforeUpload"
  :data="finalEIAReportUploadInfo"
  :limit="5"
  v-loading.fullscreen.lock="fullscreenLoading"
  :action="url"
  multiple>
   <i class="el-icon-upload"></i>
  <div class="el-upload__text">[+]请<em>点击选择</em>或拖拽上传<em>doc docx pdf</em>文件、限制每个50.0MB以内。</div>
</el-upload>
</el-card>
</el-col>

  </el-row>
</div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { getProjectFile, deleteFile } from '@/api/project'
export default {
  props: ['projectId'],
  name: 'fileUpdateComponent',
  data() {
    const base_url = process.env.BASE_API
    return {
      url: base_url + 'api/projectFile/',
      firstEIAReportUploadInfo: {
        fileType: 'firstEIAReport',
        projectId: this.projectId
      },
      basicInfoFileUploadInfo: {
        fileType: 'basicInfoFile',
        projectId: this.projectId
      },
      exhaustGasInfoFileUploadInfo: {
        fileType: 'exhaustGasInfoFile',
        projectId: this.projectId
      },
      finalEIAReportUploadInfo: {
        fileType: 'finalEIAReport',
        projectId: this.projectId
      },
      header: {
        Authorization: null
      },
      fullscreenLoading: false,
      firstEIAReport: [],
      siteUseFile: [],
      idCardFile: [],
      environmentalProtectionCertificate: []
    }
  },
  created() {
    this.header.Authorization = 'Token ' + getToken()
    this.getProjectFileInfo()
  },
  methods: {
    handleExceed(files, fileList) { // 文件超出限制个数时的钩子
      this.$message.warning(`当前限制选择 5 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    handleBeforeUpload(file) {
      console.log(file.type)
      const isValidType = (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file.type === 'application/pdf' ||
      file.type === 'application/vnd.ms-excel.sheet.macroEnabled.12' || file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
      const isLt5M = file.size / 1024 / 1024 < 50
      if (!isValidType) {
        this.$message.error(`上传文件只能是PDF/DOCX/XLSM/XLSX格式！`)
      }
      if (!isLt5M) {
        this.$message.error('上传文件大小不能超过 50MB！')
      }
      return isValidType && isLt5M
    },
    handleProgress(event, file, fileList) { // 文件上传中的钩子
      console.log(file)
      this.fullscreenLoading = true
    },
    handleSuccess(file) { // 文件上传成功时的钩子
      this.fullscreenLoading = false

      this.getProjectFileInfo()
    },
    handlePreview(file) { // 获取已经上传的文件
      window.open(file.url)
    },
    handleRemove(file, fileList) { // 文件列表删除文件时的钩子
      if (file.id != null) {
        deleteFile(file.id).then(Response => {
        }).catch(error => {
          console.log(error)
        })
      }
    },
    getProjectFileInfo() { // 获取文件列表
      getProjectFile(this.projectId).then(Response => {
        this.firstEIAReport = []
        this.basicInfoFile = []
        this.exhaustGasInfoFile = []
        this.finalEIAReport = []
        for (var file of Response) {
          switch (file.fileType) {
            case 'firstEIAReport':
              this.firstEIAReport.push({ id: file.id, name: file.name, url: file.filePath })
              break
            case 'basicInfoFile':
              this.basicInfoFile.push({ id: file.id, name: file.name, url: file.filePath })
              break
            case 'exhaustGasInfoFile':
              this.exhaustGasInfoFile.push({ id: file.id, name: file.name, url: file.filePath })
              break
            case 'finalEIAReport':
              this.finalEIAReport.push({ id: file.id, name: file.name, url: file.filePath })
              break
            default:
              break
          }
        }
      })
    }
  }
}

</script>

<style rel="text/css">

.panel-group {
  margin-top: 18px;
  
}

.card-panel-col{
    margin-bottom: 10px;
  }

.el-upload-dragger .el-icon-upload {
  margin-top:10px;
  margin-bottom: 5px;
}

.el-upload-dragger {
  display:table-cell;
  height: 20px;
}
</style>