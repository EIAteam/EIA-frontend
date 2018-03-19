<template>
 <div class="app-container">
<el-tabs type="border-card">
  <el-tab-pane label="基础信息">
  <basicInfoFormComponent :basicInfoForm.sync='basicInfoForm' ref='basicInfoForm'></basicInfoFormComponent>
  </el-tab-pane>
  <el-tab-pane label="产品表">
  <productsDataComponent :productsData.sync='productsData' ref='productsData'></productsDataComponent>
  </el-tab-pane>
  <el-tab-pane label="设备表">
  <equipmentDataComponent :equipmentData.sync='equipmentData' ref='equipmentData'></equipmentDataComponent>
  </el-tab-pane>
  <el-tab-pane label="材料表">
  <materialDataComponent :materialData.sync='materialData' ref='materialData'></materialDataComponent>
  </el-tab-pane>
  <el-tab-pane label="地理信息">
  <geographicInfoFormComponent :geographicInfoForm.sync='geographicInfoForm' ref='geographicInfoForm'></geographicInfoFormComponent>
  </el-tab-pane>
  <el-tab-pane label="工程组成">
  <tableDataComponent :tableData.sync='tableData' ref='tableData'></tableDataComponent>
  </el-tab-pane>
  <el-tab-pane label="敏感点信息">
  <sensitiveInfoDataComponent :sensitiveInfoData.sync='sensitiveInfoData' ref='sensitiveInfoData'></sensitiveInfoDataComponent>
  </el-tab-pane>
  <el-tab-pane label="废弃排放标准">
  <emissionStandardFormDataComponent :emissionStandardFormData.sync='emissionStandardFormData' ref='emissionStandardFormData'></emissionStandardFormDataComponent>
  </el-tab-pane>
<button @click="test1">验证基础表单（会有console输出）</button>

</el-tabs>
 </div>
</template>

<script>
import basicInfoFormComponent from '@/views/test/basicInfoFormComponent'
import geographicInfoFormComponent from '@/views/test/geographicInfoFormComponent'
import emissionStandardFormDataComponent from '@/views/test/emissionStandardFormDataComponent'
import productsDataComponent from '@/views/test/productsDataComponent'
import equipmentDataComponent from '@/views/test/equipmentDataComponent'
import materialDataComponent from '@/views/test/materialDataComponent'
import tableDataComponent from '@/views/test/tableDataComponent'
import sensitiveInfoDataComponent from '@/views/test/sensitiveInfoDataComponent'
export default {
  components: {
    basicInfoFormComponent, geographicInfoFormComponent, emissionStandardFormDataComponent, productsDataComponent,
    equipmentDataComponent, materialDataComponent, tableDataComponent, sensitiveInfoDataComponent
  },
  data() {
    return {
      basicInfoForm: {},
      basicInfoFormValidate: null, geographicInfoFormValidate: null, emissionStandardFormDataValidate: null,
      productsDataValidate: null, equipmentDataValidate: null, materialDataValidate: null, tableDataValidate: null, sensitiveInfoDataValidate: null,
      geographicInfoForm: {
        township: '',
        soundEnvironmentStandard: '',
        waterSourceDistance: '',
        sensitivePointDistance: '',
        besideWaterTreatmentPlant: '',
        groundwaterArea: '',
        domesticSewageGo: '',
        domesticSewageEnvironmentImpactAnalysis: '',
        domesticSewageEmissionStandards: '',
        groundwaterBodyNumber: '',
        groundwaterQualityStandard: '',
        groundwaterType: '',
        specialOptionForSewageTreatmentWorks: '',
        pollutantHoldingWaterBody: '',
        surfaceWaterQualityStandard: '',
        surfaceWaterFunction: ''
      },
      emissionStandardFormData: [
        {
          standard: '',
          pollutant: '',
          pollutantOptions: [],
          emissionMonitoring: '',
          maximumAllowableEmissionRate: '',
          maximumAllowableEmissionConcentration: ''
        }
      ],
      productsData: [
        {
          id: '',
          productName: '',
          num: '',
          unit: '',
          remark: ''
        }
      ],
      equipmentData: [
        {
          id: '',
          equipmentName: '',
          num: '',
          unit: '',
          remark: ''
        }
      ],
      materialData: [
        {
          id: '',
          materialName: '',
          num: '',
          unit: '',
          remark: '',
          state: '',
          ratio: ''
        }
      ],
      tableData: {
        environmentalProtectionData: [
          {
            project: '环保工程',
            content: '',
            use: ''
          }
        ],
        referenceData: [
          {
            project: '',
            content: '',
            use: ''
          }
        ]
      },
      sensitiveInfoData: {
        sensitiveInfoWaterData: [
          {
            environmentalElements: '水环境',
            environmentalSensitivePoint: '',
            orientation: '',
            distance: '',
            environmentalObjective: ''
          }
        ],
        sensitiveInfoAtmosphereData: [
          {
            environmentalElements: '大气环境',
            orientation: '---',
            distance: '---',
            environmentalObjective: '《环境空气质量标准》（GB3095-2012）二级标准'
          }
        ],
        sensitiveInfoVoiceData: [
          {
            environmentalElements: '声环境',
            orientation: '---',
            distance: '---',
            environmentalObjective: ''
          }
        ],
        sensitiveInfoReserveData: [
          {
            environmentalElements: '',
            orientation: '',
            distance: '',
            environmentalObjective: ''
          }
        ],
        sensitiveInfoHouseData: [
          {
            environmentalElements: '',
            orientation: '',
            distance: '',
            environmentalObjective: ''
          }
        ]
      }
    }
  },
  watch: {
    'geographicInfoForm.surfaceWaterQualityStandard': {
      handler: function(val, oldVal) {
        for (var i in this.sensitiveInfoData.sensitiveInfoWaterData) {
          this.sensitiveInfoData.sensitiveInfoWaterData[i].environmentalObjective = '《地表水环境质量标准》中的' +
          this.geographicInfoForm.surfaceWaterQualityStandard + '标准'
        }
      },
      deep: true
    },
    'geographicInfoForm.soundEnvironmentStandard': {
      handler: function(val, oldVal) {
        for (var i in this.sensitiveInfoData.sensitiveInfoVoiceData) {
          this.sensitiveInfoData.sensitiveInfoVoiceData[i].environmentalObjective = '《声环境质量标准》中的' +
          this.geographicInfoForm.soundEnvironmentStandard + '标准'
        }
        for (var j in this.sensitiveInfoData.sensitiveInfoHouseData) {
          this.sensitiveInfoData.sensitiveInfoHouseData[j].environmentalObjective = '《环境空气质量标准》中的二级标准,' +
          this.sensitiveInfoData.sensitiveInfoVoiceData[i].environmentalObjective
        }
      },
      deep: true
    },
    'geographicInfoForm.domesticSewageGo': {
      handler: function(val, oldVal) {
        for (var i in this.tableData.environmentalProtectionData) {
          this.tableData.environmentalProtectionData[i].content = '供水来源为市政自来水，生活污水' +
          this.geographicInfoForm.domesticSewageGo
        }
      },
      deep: true
    }
  },
  methods: {
    test1() {
      this.$refs.basicInfoForm.$refs.basicInfoForm.validate(valid => { this.basicInfoFormValidate = valid })
      console.log(this.basicInfoFormValidate)
      this.$refs.geographicInfoForm.$refs.geographicInfoForm.validate(valid => { this.geographicInfoFormValidate = valid })
      console.log(this.geographicInfoFormValidate)
      this.$refs.emissionStandardFormData.$refs.emissionStandardFormData.validate(valid => { this.emissionStandardFormDataValidate = valid })
      console.log(this.emissionStandardFormDataValidate)
      this.$refs.productsData.$refs.productsData.validate(valid => { this.productsDataValidate = valid })
      console.log(this.productsDataValidate)
      this.$refs.equipmentData.$refs.equipmentData.validate(valid => { this.equipmentDataValidate = valid })
      console.log(this.equipmentDataValidate)
      this.$refs.materialData.$refs.materialData.validate(valid => { this.materialDataValidate = valid })
      console.log(this.materialDataValidate)
      this.$refs.tableData.$refs.tableData.validate(valid => { this.tableDataValidate = valid })
      console.log(this.tableDataValidate)
      this.$refs.sensitiveInfoData.$refs.sensitiveInfoData.validate(valid => { this.sensitiveInfoDataValidate = valid })
      console.log(this.sensitiveInfoDataValidate)
    }
  }
}
</script>




