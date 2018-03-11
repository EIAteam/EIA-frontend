<template>
 <div class="app-container">
<el-tabs type="border-card">
  <el-tab-pane label="基础信息">
  <basicInfoFormComponent :basicInfoForm.sync='basicInfoForm' ref='basicInfoForm'></basicInfoFormComponent>
  </el-tab-pane>
  <el-tab-pane label="产品表">产品表</el-tab-pane>
  <el-tab-pane label="设备表">设备表</el-tab-pane>
  <el-tab-pane label="材料表">材料表</el-tab-pane>
  <el-tab-pane label="地理信息">地理信息</el-tab-pane>
  <el-tab-pane label="工程组成">工程组成</el-tab-pane>
  <el-tab-pane label="敏感点信息">敏感点信息</el-tab-pane>
  <el-tab-pane label="废弃排放标准">废弃排放标准</el-tab-pane>
<button @click="test1">验证基础表单（会有console输出）</button>

</el-tabs>
 </div>
  
</template>

<script>
import basicInfoFormComponent from '@/views/test/basicINfoFormComponent'
export default {
  components: {
    basicInfoFormComponent
  },
  data() {
    return {
      basicInfoForm: {},
      basicInfoFormValidate: null
    }
  },
  methods: {
    test1() {
      this.$refs.basicInfoForm.$refs.basicInfoForm.validate(valid => { this.basicInfoFormValidate = valid })
      console.log(this.basicInfoFormValidate)
    }
  }
}
</script>




