<template>
  <div class="app-container">
  <el-row class="panel-group" :gutter="80" >
  <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>营业执照复印件</span>
  </div>
  <el-upload 
  class="upload-demo"
  drag
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :headers="header"
  :file-list="businessLicenseFile"
  :on-success="handleSuccess"
  :on-progress="handleProgress"
  :on-exceed="handleExceed"
  :before-upload="handleBeforeUpload"
  :data="businessLicenseFileUploadInfo"
  :limit="5"
  v-loading.fullscreen.lock="fullscreenLoading"
  action="http://127.0.0.1:8000/api/projectFile/"
  multiple>
   <i class="el-icon-upload"></i>
  <div class="el-upload__text">[+]请<em>点击选择</em>或拖拽上传<em>jpg png tiff ppt pptx pdf</em>文件、限制每个5.0MB以内。</div>
</el-upload>
</el-card>
</el-col>

  <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>法人身份证复印件</span>
  </div>
  <el-upload
  class="upload-demo"
  drag
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :headers="header"
  :file-list="siteUseFile"
  :on-success="handleSuccess"
  :on-progress="handleProgress"
  :on-exceed="handleExceed"
  :before-upload="handleBeforeUpload"
  :data="siteUseFileUploadInfo"
  :limit="5"
  v-loading.fullscreen.lock="fullscreenLoading"
  action="http://127.0.0.1:8000/api/projectFile/"
  multiple>
   <i class="el-icon-upload"></i>
  <div class="el-upload__text">[+]请<em>点击选择</em>或拖拽上传<em>jpg png tiff ppt pptx pdf</em>文件、限制每个5.0MB以内。</div>
</el-upload>
</el-card>
</el-col>

  <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>厂房租赁合同复印件</span>
  </div>
  <el-upload
  class="upload-demo"
  drag
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :headers="header"
  :file-list="idCardFile"
  :on-success="handleSuccess"
  :on-progress="handleProgress"
  :on-exceed="handleExceed"
  :before-upload="handleBeforeUpload"
  :data="idCardFileUploadInfo"
  :limit="5"
  v-loading.fullscreen.lock="fullscreenLoading"
  action="http://127.0.0.1:8000/api/projectFile/"
  multiple>
   <i class="el-icon-upload"></i>
  <div class="el-upload__text">[+]请<em>点击选择</em>或拖拽上传<em>jpg png tiff ppt pptx pdf</em>文件、限制每个5.0MB以内。</div>
</el-upload>
</el-card>
</el-col>
  </el-row>
<div class="divider">——————————————————————————————————————————————————————————————————————————————————————————————————————————</div>
   <el-row class="panel-group" :gutter="80" >
  <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>场地使用证明复印件</span>
  </div>
  <el-upload
  class="upload-demo"
  drag
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :headers="header"
  :file-list="workshopLeaseContractFile"
  :on-success="handleSuccess"
  :on-progress="handleProgress"
  :on-exceed="handleExceed"
  :before-upload="handleBeforeUpload"
  :data="workshopLeaseContractFileUploadInfo"
  :limit="5"
  v-loading.fullscreen.lock="fullscreenLoading"
  action="http://127.0.0.1:8000/api/projectFile/"
  multiple>
   <i class="el-icon-upload"></i>
  <div class="el-upload__text">[+]请<em>点击选择</em>或拖拽上传<em>jpg png tiff ppt pptx pdf</em>文件、限制每个5.0MB以内。</div>
</el-upload>
</el-card>
</el-col>

  <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>环保证（可选）</span>
  </div>
  <el-upload
  class="upload-demo"
  drag
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :headers="header"
  :file-list="environmentalProtectionCertificate"
  :on-success="handleSuccess"
  :on-progress="handleProgress"
  :on-exceed="handleExceed"
  :before-upload="handleBeforeUpload"
  :data="environmentalProtectionCertificateUploadInfo"
  :limit="5"
  v-loading.fullscreen.lock="fullscreenLoading"
  action="http://127.0.0.1:8000/api/projectFile/"
  multiple>
   <i class="el-icon-upload"></i>
  <div class="el-upload__text">[+]请<em>点击选择</em>或拖拽上传<em>jpg png tiff ppt pptx pdf</em>文件、限制每个5.0MB以内。</div>
</el-upload>
</el-card>
</el-col>

  <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>厂址四至图-东</span>
  </div>
  <el-upload
  class="upload-demo"
  drag
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :headers="header"
  :file-list="workshopEastImg"
  :on-success="handleSuccess"
  :on-progress="handleProgress"
  :on-exceed="handleExceed"
  :before-upload="handleBeforeUpload"
  :data="workshopEastImgUploadInfo"
  :limit="5"
  v-loading.fullscreen.lock="fullscreenLoading"
  action="http://127.0.0.1:8000/api/projectFile/"
  multiple>
   <i class="el-icon-upload"></i>
  <div class="el-upload__text">[+]请<em>点击选择</em>或拖拽上传<em>jpg png tiff ppt pptx pdf</em>文件、限制每个5.0MB以内。</div>
</el-upload>
</el-card>
</el-col>

</el-row>

<div class="divider">——————————————————————————————————————————————————————————————————————————————————————————————————————————</div>


  <el-row class="panel-group" :gutter="80" >
  <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>厂址四至图-南</span>
  </div>
  <el-upload
  class="upload-demo"
  drag
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :headers="header"
  :file-list="workshopSouthImg"
  :on-success="handleSuccess"
  :on-progress="handleProgress"
  :on-exceed="handleExceed"
  :before-upload="handleBeforeUpload"
  :data="workshopSouthImgUploadInfo"
  :limit="5"
  v-loading.fullscreen.lock="fullscreenLoading"
  action="http://127.0.0.1:8000/api/projectFile/"
  multiple>
   <i class="el-icon-upload"></i>
  <div class="el-upload__text">[+]请<em>点击选择</em>或拖拽上传<em>jpg png tiff ppt pptx pdf</em>文件、限制每个5.0MB以内。</div>
</el-upload>
</el-card>
</el-col>


  <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>厂址四至图-西</span>
  </div>
  <el-upload
  class="upload-demo"
  drag
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :headers="header"
  :file-list="workshopWestImg"
  :on-success="handleSuccess"
  :on-progress="handleProgress"
  :on-exceed="handleExceed"
  :before-upload="handleBeforeUpload"
  :data="workshopWestImgUploadInfo"
  :limit="5"
  v-loading.fullscreen.lock="fullscreenLoading"
  action="http://127.0.0.1:8000/api/projectFile/"
  multiple>
   <i class="el-icon-upload"></i>
  <div class="el-upload__text">[+]请<em>点击选择</em>或拖拽上传<em>jpg png tiff ppt pptx pdf</em>文件、限制每个5.0MB以内。</div>
</el-upload>
</el-card>
</el-col>

  <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>厂址四至图-北</span>
  </div>
  <el-upload
  class="upload-demo"
  drag
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :headers="header"
  :file-list="workshopNorthImg"
  :on-success="handleSuccess"
  :on-progress="handleProgress"
  :on-exceed="handleExceed"
  :before-upload="handleBeforeUpload"
  :data="workshopNorthImgUploadInfo"
  :limit="5"
  v-loading.fullscreen.lock="fullscreenLoading"
  action="http://127.0.0.1:8000/api/projectFile/"
  multiple>
   <i class="el-icon-upload"></i>
  <div class="el-upload__text">[+]请<em>点击选择</em>或拖拽上传<em>jpg png tiff ppt pptx pdf</em>文件、限制每个5.0MB以内。</div>
</el-upload>
</el-card>
</el-col>


 </el-row>

<div class="divider">——————————————————————————————————————————————————————————————————————————————————————————————————————————</div>


  <el-row class="panel-group" :gutter="80" >
  <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>工艺流程图</span>
  </div>
  <el-upload
  class="upload-demo"
  drag
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :headers="header"
  :file-list="processFlowChart"
  :on-success="handleSuccess"
  :on-progress="handleProgress"
  :on-exceed="handleExceed"
  :before-upload="handleBeforeUpload"
  :data="processFlowChartUploadInfo"
  :limit="5"
  v-loading.fullscreen.lock="fullscreenLoading"
  action="http://127.0.0.1:8000/api/projectFile/"
  multiple>
   <i class="el-icon-upload"></i>
  <div class="el-upload__text">[+]请<em>点击选择</em>或拖拽上传<em>jpg png tiff ppt pptx pdf</em>文件、限制每个5.0MB以内。</div>
</el-upload>
</el-card>
</el-col>


  <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>平面布置图</span>
  </div>
  <el-upload
  class="upload-demo"
  drag
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :headers="header"
  :file-list="planeLayoutChart"
  :on-success="handleSuccess"
  :on-progress="handleProgress"
  :on-exceed="handleExceed"
  :before-upload="handleBeforeUpload"
  :data="planeLayoutChartUploadInfo"
  :limit="5"
  v-loading.fullscreen.lock="fullscreenLoading"
  action="http://127.0.0.1:8000/api/projectFile/"
  multiple>
   <i class="el-icon-upload"></i>
  <div class="el-upload__text">[+]请<em>点击选择</em>或拖拽上传<em>jpg png tiff ppt pptx pdf</em>文件、限制每个5.0MB以内。</div>
</el-upload>
</el-card>
</el-col>

  <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>卫星信息图</span>
  </div>
  <el-upload
  class="upload-demo"
  drag
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :headers="header"
  :file-list="satelliteInformationChart"
  :on-success="handleSuccess"
  :on-progress="handleProgress"
  :on-exceed="handleExceed"
  :before-upload="handleBeforeUpload"
  :data="satelliteInformationChartUploadInfo"
  :limit="5"
  v-loading.fullscreen.lock="fullscreenLoading"
  action="http://127.0.0.1:8000/api/projectFile/"
  multiple>
   <i class="el-icon-upload"></i>
  <div class="el-upload__text">[+]请<em>点击选择</em>或拖拽上传<em>jpg png tiff ppt pptx pdf</em>文件、限制每个5.0MB以内。</div>
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
  name: 'uploadDownloadComponent',
  data() {
    return {
      businessLicenseFileUploadInfo: {
        fileType: 'businessLicenseFile',
        projectId: this.projectId
      },
      siteUseFileUploadInfo: {
        fileType: 'siteUseFile',
        projectId: this.projectId
      },
      idCardFileUploadInfo: {
        fileType: 'idCardFile',
        projectId: this.projectId
      },
      workshopLeaseContractFileUploadInfo: {
        fileType: 'workshopLeaseContractFile',
        projectId: this.projectId
      },
      environmentalProtectionCertificateUploadInfo: {
        fileType: 'environmentalProtectionCertificate',
        projectId: this.projectId
      },
      workshopWestImgUploadInfo: {
        fileType: 'workshopWestImg',
        projectId: this.projectId
      },
      workshopSouthImgUploadInfo: {
        fileType: 'workshopSouthImg',
        projectId: this.projectId
      },
      workshopNorthImgUploadInfo: {
        fileType: 'workshopNorthImg',
        projectId: this.projectId
      },
      workshopEastImgUploadInfo: {
        fileType: 'workshopEastImg',
        projectId: this.projectId
      },
      processFlowChartUploadInfo: {
        fileType: 'processFlowChart',
        projectId: this.projectId
      },
      planeLayoutChartUploadInfo: {
        fileType: 'planeLayoutChart',
        projectId: this.projectId
      },
      satelliteInformationChartUploadInfo: {
        fileType: 'satelliteInformationChart',
        projectId: this.projectId
      },
      header: {
        Authorization: null
      },
      fullscreenLoading: false,
      businessLicenseFile: [],
      siteUseFile: [],
      idCardFile: [],
      environmentalProtectionCertificate: [],
      workshopLeaseContractFile: [],
      workshopWestImg: [],
      workshopSouthImg: [],
      workshopNorthImg: [],
      workshopEastImg: [],
      processFlowChart: [],
      planeLayoutChart: [],
      satelliteInformationChart: []
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
      const isValidType = (file.type === 'image/jpeg' || file.type === 'image/tiff' || file.type === 'image/png' ||
                           file.type === 'application/pdf' || file.type === 'application/vnd.ms-powerpoint' ||
                           file.type === 'application/vnd.openxmlformats-officedocument.presentationml.presentation')
      const isLt5M = file.size / 1024 / 1024 < 5
      if (!isValidType) {
        this.$message.error(`上传文件只能是 JPEG/PNG/TIFF PDF/PPT/PPTX 格式！！！`)
      }
      if (!isLt5M) {
        this.$message.error('上传文件大小不能超过 5MB!')
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
        this.businessLicenseFile = []
        this.siteUseFile = []
        this.idCardFile = []
        this.workshopLeaseContractFile = []
        this.workshopWestImg = []
        this.workshopSouthImg = []
        this.workshopNorthImg = []
        this.workshopEastImg = []
        this.environmentalProtectionCertificate = []
        this.processFlowChart = []
        this.planeLayoutChart = []
        this.satelliteInformationChart = []
        for (var file of Response) {
          switch (file.fileType) {
            case 'businessLicenseFile':
              this.businessLicenseFile.push({ id: file.id, name: file.name, url: file.filePath })
              break
            case 'siteUseFile':
              this.siteUseFile.push({ id: file.id, name: file.name, url: file.filePath })
              break
            case 'idCardFile':
              this.idCardFile.push({ id: file.id, name: file.name, url: file.filePath })
              break
            case 'workshopLeaseContractFile':
              this.workshopLeaseContractFile.push({ id: file.id, name: file.name, url: file.filePath })
              break
            case 'workshopWestImg':
              this.workshopWestImg.push({ id: file.id, name: file.name, url: file.filePath })
              break
            case 'workshopSouthImg':
              this.workshopSouthImg.push({ id: file.id, name: file.name, url: file.filePath })
              break
            case 'workshopNorthImg':
              this.workshopNorthImg.push({ id: file.id, name: file.name, url: file.filePath })
              break
            case 'workshopEastImg':
              this.workshopEastImg.push({ id: file.id, name: file.name, url: file.filePath })
              break
            case 'environmentalProtectionCertificate':
              this.environmentalProtectionCertificate.push({ id: file.id, name: file.name, url: file.filePath })
              break
            case 'processFlowChart':
              this.processFlowChart.push({ id: file.id, name: file.name, url: file.filePath })
              break
            case 'planeLayoutChart':
              this.planeLayoutChart.push({ id: file.id, name: file.name, url: file.filePath })
              break
            case 'satelliteInformationChart':
              this.satelliteInformationChart.push({ id: file.id, name: file.name, url: file.filePath })
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