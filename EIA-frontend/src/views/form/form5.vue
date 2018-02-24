<template>
<div class="app-container">
  <amap></amap>
<el-row :gutter="20">
<el-col :span="6">.</el-col>
  <el-col :span="6">
<h3>厂址四至图-东</h3>
<el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess1"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
  </el-col>

<el-col :span="6">
<h3>厂址四至图-西</h3>
<el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess2"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl2" :src="imageUrl2" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
  </el-col>
</el-row>

<el-row :gutter="20">
  <el-col :span="6">.</el-col>
  <el-col :span="6">
<h3>厂址四至图-南</h3>
<el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess3"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl3" :src="imageUrl3" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
  </el-col>

  <el-col :span="6">
<h3>厂址四至图-北</h3>
<el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess4"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl4" :src="imageUrl4" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
  </el-col>
</el-row>

</div>
</template>

<script>
import amap from '@/components/Map/index'
export default{
  components: {
    amap
  },
  data() {
    return {
      imageUrl1: '',
      imageUrl2: '',
      imageUrl3: '',
      imageUrl4: ''
    }
  },
  methods: {
    handleAvatarSuccess1(res, file) {
      this.imageUrl1 = URL.createObjectURL(file.raw)
    },
    handleAvatarSuccess2(res, file) {
      this.imageUrl2 = URL.createObjectURL(file.raw)
    },
    handleAvatarSuccess3(res, file) {
      this.imageUrl3 = URL.createObjectURL(file.raw)
    },
    handleAvatarSuccess4(res, file) {
      this.imageUrl4 = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = (file.type === 'image/jpeg' || file.type === 'image/png')
      const isLt2M = file.size / 1024 / 1024 < 5

      if (!isJPG) {
        this.$message.error('上传图片只能是 JPG/PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 5MB!')
      }
      return isJPG && isLt2M
    }
  }
}

</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
