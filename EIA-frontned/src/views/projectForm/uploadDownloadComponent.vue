<template>
<div style="width:300px">
  <!--el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="3"
  :on-exceed="handleExceed"
  :file-list="fileList">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload-->
<el-upload
  class="upload-demo"
  drag
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :headers="header"
  :before-remove="beforeRemove"
  :file-list="businessLicenseFile"
  :on-success="handleSuccess"
  :on-progress="handleProgress"
  :before-upload="handleBeforeUpload"
  v-loading.fullscreen.lock="fullscreenLoading"
  action="http://127.0.0.1:8000/api/file/1/businessLicenseFile/0/"
  multiple>
   <i class="el-icon-upload"></i>
  <div class="el-upload__text" style="margin-top:6px">[+]将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { getFileUrl, deleteFile } from '@/api/project'
export default {
  props: ['projectId'],
  name: 'uploadDownloadComponent',
  data() {
    return {
      header: {
        Authorization: null
      },
      fullscreenLoading: false,
      businessLicenseFile: [],
      siteUseFile: [],
      workshopLeaseContractFile: [],
      workshopWestImg: [],
      workshopSouthImg: [],
      workshopNorthImg: [],
      workshopEastImg: []
    }
  },
  created() {
    this.header.Authorization = 'Token ' + getToken()
    getFileUrl(this.projectId).then(Response => {
      this.businessLicenseFile = Response.businessLicenseFile
      this.siteUseFile = Response.siteUseFile
      this.workshopLeaseContractFile = Response.workshopLeaseContractFile
      this.workshopWestImg = Response.workshopWestImg
      this.workshopSouthImg = Response.workshopSouthImg
      this.workshopNorthImg = Response.workshopNorthImg
      this.workshopEastImg = Response.workshopEastImg
    })
  },
  methods: {
    handleExceed(files, fileList) { // 文件超出限制个数时的钩子
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    handleBeforeUpload(file) {

    },
    handleProgress(event, file, fileList) { // 文件上传中的钩子
      console.log(file)
      this.fullscreenLoading = true
    },
    handleSuccess(file) { // 文件上传成功时的钩子
      this.fullscreenLoading = false
      getFileUrl(this.projectId).then(Response => {
        this.businessLicenseFile = Response.businessLicenseFile
        this.siteUseFile = Response.siteUseFile
        this.workshopLeaseContractFile = Response.workshopLeaseContractFile
        this.workshopWestImg = Response.workshopWestImg
        this.workshopSouthImg = Response.workshopSouthImg
        this.workshopNorthImg = Response.workshopNorthImg
        this.workshopEastImg = Response.workshopEastImg
      })
    },
    handlePreview(file) { // 获取已经上传的文件
      console.log(file)
    },
    beforeRemove(file, fileList) { // 移除文件前的确认
      console.log('sdf')
      return this.$confirm(`确定移除 ${file.name}?`)
    },
    handleRemove(file, fileList) { // 文件列表删除文件时的钩子
      deleteFile(this.projectId, file.fileType, file.id).then(Response => {
        console.log(file.fileType)
      })
    }
  }
}

</script>

