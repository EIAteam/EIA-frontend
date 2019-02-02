<template>
 <div class="app-container">

  <el-tabs v-model="activeName">
    <el-tab-pane label="表单填写" name="first">

<el-tabs type="border-card">
  <el-tab-pane label="基础信息">
  <basicInfoFormComponent :basicInfoForm.sync='basicInfoForm' ref='basicInfoForm'></basicInfoFormComponent>
  <el-button type="primary" @click="putBasicInfo" style="margin-top:10px">保存信息</el-button>
  </el-tab-pane>
  <el-tab-pane label="产品表">
  <productsDataComponent :productsData.sync='productsData' ref='productsData'></productsDataComponent>
  <el-button @click="putProductInfo" type="primary" style="margin-top:10px">保存信息</el-button>
  </el-tab-pane>
  <el-tab-pane label="设备表">
  <equipmentDataComponent :equipmentData.sync='equipmentData' ref='equipmentData'></equipmentDataComponent>
  <el-button @click="putEquipmentInfo" type="primary" style="margin-top:10px">保存信息</el-button>
  </el-tab-pane>
  <el-tab-pane label="材料表">
  <materialDataComponent :materialData.sync='materialData' ref='materialData'></materialDataComponent>
  <el-button @click="putMaterialInfo" type="primary" style="margin-top:10px">保存信息</el-button>
  </el-tab-pane>
  <el-tab-pane label="地理信息">
  <geographicInfoFormComponent :geographicInfoForm.sync='geographicInfoForm' ref='geographicInfoForm'></geographicInfoFormComponent>
    <el-button @click="putGeographicInfo" type="primary" style="margin-top:10px">保存信息</el-button>
  </el-tab-pane>
  <el-tab-pane label="工程组成">
  <engineeringCompositionDataComponent :engineeringCompositionData.sync='engineeringCompositionData' ref='engineeringCompositionData'></engineeringCompositionDataComponent>
      <el-button @click="putEngineeringCompositionInfo" type="primary" style="margin-top:10px">保存信息</el-button>
  </el-tab-pane>
  <el-tab-pane label="敏感点信息">
  <sensitiveInfoDataComponent :sensitiveInfoData.sync='sensitiveInfoData' ref='sensitiveInfoData'></sensitiveInfoDataComponent>
        <el-button @click="putSensitiveInfo" type="primary" style="margin-top:10px">保存信息</el-button>
  </el-tab-pane>
  <el-tab-pane label="废气排放标准">
  <emissionStandardFormDataComponent :emissionStandardFormData.sync='emissionStandardFormData' ref='emissionStandardFormData'></emissionStandardFormDataComponent>
        <el-button @click="putEmissionStandardInfo" type="primary" style="margin-top:10px">保存信息</el-button>
  </el-tab-pane>
  <el-tab-pane label="基础信息附图">
       <uploadDownloadComponent :projectId=projectId ref='uploadDownloadComponent' ></uploadDownloadComponent>
  </el-tab-pane>
  </el-tabs>
    </el-tab-pane>
    <el-tab-pane label="智能分析器" name="second">
      <el-tabs type="border-card">
      <el-tab-pane label="污染物分析">
        <secondLevelDataComponent :secondLevelData.sync='secondLevelData' ref='secondLevelData'></secondLevelDataComponent>
        <exhaustGasMaterialsComponent :exhaustGasMaterials.sync='exhaustGasMaterials' ref='exhaustGasMaterials'></exhaustGasMaterialsComponent>
        <el-button @click="testVBA">启动污染源分析</el-button>
        <el-button @click="recompute">标准拟合</el-button>
        <el-button @click="createProjectWord">生成环评表单</el-button>   
        </el-tab-pane>
      </el-tabs>
    </el-tab-pane>
    <el-tab-pane label="报告下载" name="third">
       <fileUpdateComponent :projectId=projectId ref='fileUpdateComponent' ></fileUpdateComponent>
    </el-tab-pane>
  </el-tabs>
<button @click="getInfo">获取信息</button>
 </div>
</template>

<script>
import basicInfoFormComponent from '@/views/projectForm/basicInfoFormComponent'
import geographicInfoFormComponent from '@/views/projectForm/geographicInfoFormComponent'
import emissionStandardFormDataComponent from '@/views/projectForm/emissionStandardFormDataComponent'
import productsDataComponent from '@/views/projectForm/productsDataComponent'
import equipmentDataComponent from '@/views/projectForm/equipmentDataComponent'
import materialDataComponent from '@/views/projectForm/materialDataComponent'
import engineeringCompositionDataComponent from '@/views/projectForm/engineeringCompositionDataComponent'
import sensitiveInfoDataComponent from '@/views/projectForm/sensitiveInfoDataComponent'
import secondLevelDataComponent from '@/views/projectForm/secondLevelDataComponent'
import exhaustGasMaterialsComponent from '@/views/projectForm/exhaustGasMaterialsComponent'
import uploadDownloadComponent from '@/views/projectForm/uploadDownloadComponent'
import fileUpdateComponent from '@/views/projectForm/fileUpdateComponent'
import { getProjectInfo, putProjectBasicInfo, putProjectProductInfo,
  putProjectEquipmentInfo, putProjectMaterialInfo, putProjectGeographicInfo,
  putProjectEngineeringCompositionInfo, putProjectSensitiveInfo, putProjectEmissionStandardInfo, putVBA, putVBA2, callRecompute, putProjectSecongLevelData, createWord } from '@/api/project'
export default {
  components: {
    basicInfoFormComponent, geographicInfoFormComponent, emissionStandardFormDataComponent, productsDataComponent,
    equipmentDataComponent, materialDataComponent, engineeringCompositionDataComponent, sensitiveInfoDataComponent, secondLevelDataComponent, exhaustGasMaterialsComponent, uploadDownloadComponent, fileUpdateComponent
  },
  data() {
    return {
      projectId: null,
      projectName: null,
      activeName: 'first',
      basicInfoForm: {
        projectType: '',
        township: '',
        energyUsage: '',
        constructionCompanyName: '',
        nameAbbreviation: '',
        NEIType: [],
        dinningNum: '',
        address: '',
        postalCode: '',
        corporateName: '',
        corporateId: '',
        contacts: '',
        telephone: '',
        totalInvestment: '',
        environmentalProtectionInvestment: '',
        floorSpace: '',
        managementSpace: '',
        nonAccommodationNum: '',
        accommodationNum: '',
        dayWorkTime: '',
        yearWorkTime: '',
        investmentTime: '',
        annualPowerConsumption: '',
        annualLeftover: '',
        east: '',
        south: '',
        west: '',
        north: '',
        longitude: '',
        latitude: '',
        constructionScale: '',
        societyCreditcode: '',
        businessRange: '',
        EAcompanyCertificatenumber: '',
        EAcompanyTelephone: '',
        EAcompanyAddress: '',
        EAcompanyName: '',
        noiseMonitoringPoints: '',
        gasCylinderHeight: '',
        airQuantity: '',
        environmentalEffectclassification: []
      },
      geographicInfoForm: {
        districtTown: '',
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
      secondLevelData: [
        {
          gasName: '',
          remark: ''
        }
      ],
      exhaustGasMaterials: [
        {
          gasName: '',
          materialName: '',
          unit: '',
          usage: '',
          ratio: ''
        }
      ],
      engineeringCompositionData: {
        otherEngineeringData: [
          {
            project: '主体工程',
            content: '',
            use: ''
          },
          {
            project: '贮运工程',
            content: '',
            use: ''
          },
          {
            project: '辅助工程',
            content: '',
            use: ''
          },
          {
            project: '公用工程',
            content: '',
            use: ''
          }
        ],
        environmentalEngineeringData: [
          {
            project: '环保工程',
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
        for (var i in this.engineeringCompositionData.environmentalEngineeringData) {
          this.engineeringCompositionData.environmentalEngineeringData[i].content = '供水来源为市政自来水，生活污水' +
          this.geographicInfoForm.domesticSewageGo
        }
      },
      deep: true
    },
    'basicInfoForm.township': {
      handler: function(val, oldVal) {
        this.geographicInfoForm.districtTown = this.basicInfoForm.township
      },
      deep: true
    },
    'geographicInfoForm.districtTown': {
      handler: function(val, oldVal) {
        this.basicInfoForm.township = this.geographicInfoForm.districtTown
      },
      deep: true
    }
  },
  created() {
    this.projectId = this.$route.params.projectId
    this.projectName = this.$route.params.projectName
    this.getInfo()
    console.log(this.projectName)
  },
  methods: {
    getInfo() {
      getProjectInfo(this.projectId).then(Response => {
        this.basicInfoForm.projectType = Response.projectType
        this.basicInfoForm.township = Response.township
        this.basicInfoForm.energyUsage = Response.energyUsage
        this.basicInfoForm.constructionCompanyName = Response.constructionCompanyName
        this.basicInfoForm.nameAbbreviation = Response.nameAbbreviation
        this.basicInfoForm.NEIType = JSON.parse(Response.NEIType)
        this.basicInfoForm.dinningNum = Response.dinningNum
        this.basicInfoForm.address = Response.address
        this.basicInfoForm.postalCode = Response.postalCode
        this.basicInfoForm.corporateName = Response.corporateName
        this.basicInfoForm.corporateId = Response.corporateId
        this.basicInfoForm.contacts = Response.contacts
        this.basicInfoForm.telephone = Response.telephone
        this.basicInfoForm.totalInvestment = Response.totalInvestment
        this.basicInfoForm.environmentalProtectionInvestment = Response.environmentalProtectionInvestment
        this.basicInfoForm.floorSpace = Response.floorSpace
        this.basicInfoForm.managementSpace = Response.managementSpace
        this.basicInfoForm.nonAccommodationNum = Response.nonAccommodationNum
        this.basicInfoForm.accommodationNum = Response.accommodationNum
        this.basicInfoForm.dayWorkTime = Response.dayWorkTime
        this.basicInfoForm.yearWorkTime = Response.yearWorkTime
        this.basicInfoForm.investmentTime = Response.investmentTime
        this.basicInfoForm.annualPowerConsumption = Response.annualPowerConsumption
        this.basicInfoForm.annualLeftover = Response.annualLeftover
        this.basicInfoForm.east = Response.east
        this.basicInfoForm.south = Response.south
        this.basicInfoForm.west = Response.west
        this.basicInfoForm.north = Response.north
        this.basicInfoForm.longitude = Response.longitude
        this.basicInfoForm.latitude = Response.latitude
        this.basicInfoForm.constructionScale = Response.constructionScale
        this.basicInfoForm.societyCreditcode = Response.societyCreditcode
        this.basicInfoForm.businessRange = Response.businessRange
        this.basicInfoForm.EAcompanyCertificatenumber = Response.EAcompanyCertificatenumber
        this.basicInfoForm.EAcompanyTelephone = Response.EAcompanyTelephone
        this.basicInfoForm.EAcompanyAddress = Response.EAcompanyAddress
        this.basicInfoForm.EAcompanyName = Response.EAcompanyName
        this.basicInfoForm.environmentalEffectclassification = JSON.parse(Response.environmentalEffectclassification)
        this.basicInfoForm.noiseMonitoringPoints = Response.noiseMonitoringPoints
        this.basicInfoForm.gasCylinderHeight = Response.gasCylinderHeight
        this.basicInfoForm.airQuantity = Response.airQuantity

        this.geographicInfoForm.districtTown = Response.township
        this.geographicInfoForm.soundEnvironmentStandard = Response.soundEnvironmentStandard
        this.geographicInfoForm.waterSourceDistance = Response.waterSourceDistance
        this.geographicInfoForm.sensitivePointDistance = Response.sensitivePointDistance
        this.geographicInfoForm.besideWaterTreatmentPlant = Response.besideWaterTreatmentPlant
        this.geographicInfoForm.groundwaterArea = Response.groundwaterArea
        this.geographicInfoForm.domesticSewageGo = Response.domesticSewageGo
        this.geographicInfoForm.domesticSewageEnvironmentImpactAnalysis = Response.domesticSewageEnvironmentImpactAnalysis
        this.geographicInfoForm.domesticSewageEmissionStandards = Response.domesticSewageEmissionStandards
        this.geographicInfoForm.groundwaterBodyNumber = Response.groundwaterBodyNumber
        this.geographicInfoForm.groundwaterQualityStandard = Response.groundwaterQualityStandard
        this.geographicInfoForm.groundwaterType = Response.groundwaterType
        this.geographicInfoForm.specialOptionForSewageTreatmentWorks = Response.specialOptionForSewageTreatmentWorks
        this.geographicInfoForm.pollutantHoldingWaterBody = Response.pollutantHoldingWaterBody
        this.geographicInfoForm.surfaceWaterQualityStandard = Response.surfaceWaterQualityStandard
        this.geographicInfoForm.surfaceWaterFunction = Response.surfaceWaterFunction

        this.productsData = JSON.parse(Response.product)
        this.materialData = JSON.parse(Response.material)
        this.equipmentData = JSON.parse(Response.equipment)
        this.secondLevelData = JSON.parse(Response.exhaustGas)
        this.exhaustGasMaterials = JSON.parse(Response.exhaustGasMaterials)
        this.emissionStandardFormData = JSON.parse(Response.emissionStandard)

        this.engineeringCompositionData.otherEngineeringData = JSON.parse(Response.otherEngineering)
        this.engineeringCompositionData.environmentalEngineeringData = JSON.parse(Response.environmentalEngineering)

        this.sensitiveInfoData.sensitiveInfoWaterData = JSON.parse(Response.sensitiveInfoWater)
        this.sensitiveInfoData.sensitiveInfoAtmosphereData = JSON.parse(Response.sensitiveInfoAtmosphere)
        this.sensitiveInfoData.sensitiveInfoVoiceData = JSON.parse(Response.sensitiveInfoVoice)
        this.sensitiveInfoData.sensitiveInfoReserveData = JSON.parse(Response.sensitiveInfoReserve)
        this.sensitiveInfoData.sensitiveInfoHouseData = JSON.parse(Response.sensitiveInfoHouse)
      })
    },
    putBasicInfo() {
      this.$refs.basicInfoForm.$refs.basicInfoForm.validate(valid => {
        putProjectBasicInfo(
          this.projectId,
          this.basicInfoForm.projectType,
          this.basicInfoForm.township,
          this.basicInfoForm.energyUsage,
          this.basicInfoForm.constructionCompanyName,
          this.basicInfoForm.nameAbbreviation,
          JSON.stringify(this.basicInfoForm.NEIType),
          this.basicInfoForm.dinningNum,
          this.basicInfoForm.address,
          this.basicInfoForm.postalCode,
          this.basicInfoForm.corporateName,
          this.basicInfoForm.corporateId,
          this.basicInfoForm.contacts,
          this.basicInfoForm.telephone,
          this.basicInfoForm.totalInvestment,
          this.basicInfoForm.environmentalProtectionInvestment,
          this.basicInfoForm.floorSpace,
          this.basicInfoForm.managementSpace,
          this.basicInfoForm.nonAccommodationNum,
          this.basicInfoForm.accommodationNum,
          this.basicInfoForm.dayWorkTime,
          this.basicInfoForm.yearWorkTime,
          this.basicInfoForm.investmentTime,
          this.basicInfoForm.annualPowerConsumption,
          this.basicInfoForm.annualLeftover,
          this.basicInfoForm.east,
          this.basicInfoForm.south,
          this.basicInfoForm.west,
          this.basicInfoForm.north,
          this.basicInfoForm.longitude,
          this.basicInfoForm.latitude,
          this.basicInfoForm.constructionScale,
          this.basicInfoForm.societyCreditcode,
          this.basicInfoForm.businessRange,
          this.basicInfoForm.EAcompanyCertificatenumber,
          this.basicInfoForm.EAcompanyTelephone,
          this.basicInfoForm.EAcompanyAddress,
          this.basicInfoForm.EAcompanyName,
          this.basicInfoForm.noiseMonitoringPoints,
          this.basicInfoForm.gasCylinderHeight,
          this.basicInfoForm.airQuantity,
          JSON.stringify(this.basicInfoForm.environmentalEffectclassification)
        ).then(Response => {
          this.getInfo()
        })
      })
    },
    testVBA() {
      putVBA(this.projectId, this.projectName).then(Response => {
        this.getInfo()
      })
    },
    testVBA2() {
      putProjectSecongLevelData(this.projectId, JSON.stringify(this.secondLevelData))
      putVBA2(this.projectId, this.projectName)
    },
    recompute() {
      callRecompute(this.projectId, this.projectName, JSON.stringify(this.exhaustGasMaterials), JSON.stringify(this.secondLevelData)).then(Response => {
        this.getInfo()
      })
    },
    createProjectWord() {
      createWord(this.projectId, this.projectName)
    },
    putProductInfo() {
      putProjectProductInfo(this.projectId, JSON.stringify(this.productsData)).then(Response => {
        this.getInfo()
      })
    },
    putEquipmentInfo() {
      putProjectEquipmentInfo(this.projectId, JSON.stringify(this.equipmentData)).then(Response => {
        this.getInfo()
      })
    },
    putMaterialInfo() {
      putProjectMaterialInfo(this.projectId, JSON.stringify(this.materialData)).then(Response => {
        this.getInfo()
      })
    },
    putSecondLevelData() {
      putProjectSecongLevelData(this.projectId, JSON.stringify(this.secondLevelData)).then(Response => {
        this.getInfo()
      })
    },
    putGeographicInfo() {
      this.$refs.geographicInfoForm.$refs.geographicInfoForm.validate(valid => {
        putProjectGeographicInfo(
          this.projectId,
          this.geographicInfoForm.districtTown,
          this.geographicInfoForm.soundEnvironmentStandard,
          this.geographicInfoForm.waterSourceDistance,
          this.geographicInfoForm.sensitivePointDistance,
          this.geographicInfoForm.besideWaterTreatmentPlant,
          this.geographicInfoForm.groundwaterArea,
          this.geographicInfoForm.domesticSewageGo,
          this.geographicInfoForm.domesticSewageEnvironmentImpactAnalysis,
          this.geographicInfoForm.domesticSewageEmissionStandards,
          this.geographicInfoForm.groundwaterBodyNumber,
          this.geographicInfoForm.groundwaterQualityStandard,
          this.geographicInfoForm.groundwaterType,
          this.geographicInfoForm.specialOptionForSewageTreatmentWorks,
          this.geographicInfoForm.pollutantHoldingWaterBody,
          this.geographicInfoForm.surfaceWaterQualityStandard,
          this.geographicInfoForm.surfaceWaterFunction
        ).then(Response => {
          this.putEngineeringCompositionInfo()
          this.putSensitiveInfo()
          this.getInfo()
        })
      })
    },
    putEngineeringCompositionInfo() {
      putProjectEngineeringCompositionInfo(
        this.projectId,
        JSON.stringify(this.engineeringCompositionData.otherEngineeringData),
        JSON.stringify(this.engineeringCompositionData.environmentalEngineeringData)
      ).then(Response => {
        this.getInfo()
      })
    },
    putSensitiveInfo() {
      putProjectSensitiveInfo(
        this.projectId,
        JSON.stringify(this.sensitiveInfoData.sensitiveInfoWaterData),
        JSON.stringify(this.sensitiveInfoData.sensitiveInfoAtmosphereData),
        JSON.stringify(this.sensitiveInfoData.sensitiveInfoVoiceData),
        JSON.stringify(this.sensitiveInfoData.sensitiveInfoReserveData),
        JSON.stringify(this.sensitiveInfoData.sensitiveInfoHouseData)
      ).then(Response => {
        this.getInfo()
      })
    },
    putEmissionStandardInfo() {
      putProjectEmissionStandardInfo(
        this.projectId,
        JSON.stringify(this.emissionStandardFormData)
      ).then(Response => {
        this.getInfo()
      })
    }
  }
}
</script>




