<template>
  <div class="app-container">

<el-container style="height: 150px;">
<el-header style="margin-bottom:50px;" >
  <el-steps :active="active" finish-status="success" align-center>
      <el-step title="基础信息"><router-link to="form2">   </router-link></el-step>
      <el-step title="产品表/材料表/设备表"></el-step>
      <el-step title="地理信息"></el-step>
      <el-step title="工程组成/敏感点信息/废气排放标准"></el-step>
      <el-step title="基础信息附图"></el-step>
  </el-steps>
  <el-button-group style="margin-top:10px;margin-left:550px;width:300px;">
    <el-button type="primary" icon="el-icon-arrow-left"  @click="previous">上一页</el-button>
    <el-button type="primary"  @click="next">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
  </el-button-group>
</el-header>
</el-container>

    <el-form :model="geographicInfoForm" label-width="100px;" ref="geographicInfoForm">
      <el-form-item label="所在区镇" prop="township">
        <el-select v-model="geographicInfoForm.township" placeholder="请选择">
          <el-option label="勒流" value=1></el-option>
          <el-option label="大良" value=2></el-option>
          <el-option label="容桂" value=3></el-option>
          <el-option label="均安" value=4></el-option>
          <el-option label="陈村" value=5></el-option>
          <el-option label="伦教" value=6></el-option>
          <el-option label="乐从" value=7></el-option>
          <el-option label="龙江" value=8></el-option>
          <el-option label="北滘" value=9></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="污水处理厂特别选项" prop="specialOptionForSewageTreatmentWorks">
        <el-select v-model="geographicInfoForm.specialOptionForSewageTreatmentWorks" placeholder="请选择">
          <el-option label="有" value=1></el-option>
          <el-option label="无" value=2></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="纳污水体" prop="pollutantHoldingWaterBody">
        <el-select v-model="geographicInfoForm.pollutantHoldingWaterBody" placeholder="请选择">
          <el-option label="潭州水道" value=1></el-option>
          <el-option label="顺德支流" value=2></el-option>
          <el-option label="李家沙水道" value=3></el-option>
          <el-option label="海州水道" value=4></el-option>
          <el-option label="内河涌" value=5></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="地表水质量标准" prop="surfaceWaterQualityStandard">
        <el-select v-model="geographicInfoForm.surfaceWaterQualityStandard" placeholder="请选择">
          <el-option label="III类" value=1></el-option>
          <el-option label="IV类" value=2></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="地表水功能" prop="surfaceWaterFunction">
        <el-select v-model="geographicInfoForm.surfaceWaterFunction" placeholder="请选择">
          <el-option label="综合用水" value=1></el-option>
          <el-option label="景观、农用功能" value=2></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="声环境质量标准" prop="soundEnvironmentStandard">
        <el-select v-model="geographicInfoForm.soundEnvironmentStandard" placeholder="请选择">
          <el-option label="0类" value=1></el-option>
          <el-option label="1类" value=2></el-option>
          <el-option label="2类" value=3></el-option>
          <el-option label="3类" value=4></el-option>
          <el-option label="4a类" value=5></el-option>
          <el-option label="4b类" value=6></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="地下水区域" prop="groundwaterArea">
        <el-select v-model="geographicInfoForm.groundwaterArea" placeholder="请选择"  style="width:400px;">
          <el-option label="珠江三角洲佛山南海分散式开发利用区" value=1></el-option>
          <el-option label="珠江三角洲佛山南海大沥至顺德勒流地质灾害易发区" value=2></el-option>
          <el-option label="北江佛山三水地下水水源涵养区" value=3></el-option>
          <el-option label="珠江三角洲佛山南海地下水水源涵养区" value=4></el-option>
          <el-option label="珠江三角洲佛山三水地下水水源涵养区" value=5></el-option>
          <el-option label="珠江三角洲佛山高明地下水水源涵养区" value=6></el-option>
          <el-option label="珠江三角洲佛山顺德不宜开采区" value=7></el-option>
          <el-option label="珠江三角洲佛山高明不宜开采区" value=8></el-option>
          <el-option label="珠江三角洲佛山三水储备区" value=9></el-option>
          <el-option label="北江佛山三水应急水源区" value=10></el-option>
          <el-option label="珠江三角洲佛山南海应急水源区"  value=11></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="地下水类型" prop="groundwaterType">
        <el-input v-model="geographicInfoForm.groundwaterType" type="text" placeholder="地下水类型" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="地下水质量标准" prop="groundwaterQualityStandard">
        <el-select v-model="geographicInfoForm.groundwaterQualityStandard" placeholder="请选择">
          <el-option label="I类" value=1></el-option>
          <el-option label="II类" value=2></el-option>
          <el-option label="III类" value=3></el-option>
          <el-option label="IV类" value=4></el-option>
          <el-option label="V类" value=5></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="地下水水体编号" prop="groundwaterBodyNumber">
        <el-input v-model="geographicInfoForm.groundwaterBodyNumber" type="text" placeholder="地下水水体编号" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="是否污水处理厂纳污范围" prop="besideWaterTreatmentPlant">
        <el-select v-model="geographicInfoForm.besideWaterTreatmentPlant" placeholder="请选择">
          <el-option label="是" value=1></el-option>
          <el-option label="否" value=2></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="生活污水去向" prop="domesticSewageGo">
        <el-input v-model="geographicInfoForm.domesticSewageGo" type="text" placeholder="文字描述" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="生活污水环境影响分析" prop="domesticSewageEnvironmentImpactAnalysis">
        <el-input v-model="geographicInfoForm.domesticSewageEnvironmentImpactAnalysis" type="textarea" placeholder="文字描述" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="生活污水排放标准" prop="domesticSewageEmissionStandards">
        <el-input v-model="geographicInfoForm.domesticSewageEmissionStandards" type="textarea" placeholder="文字描述" style="width:700px;"></el-input>
      </el-form-item>

      <el-form-item label="敏感点距离" prop="sensitivePointDistance">
        <el-select v-model="geographicInfoForm.sensitivePointDistance" placeholder="请选择">
          <el-option label="≤50" value=1></el-option>
          <el-option label=">50且≤100" value=2></el-option>
          <el-option label=">100" value=3></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="水源保护区距离" prop="waterSourceDistance">
        <el-select v-model="geographicInfoForm.waterSourceDistance" placeholder="请选择">
          <el-option label="<0" value=1></el-option>
          <el-option label=">0且≤500" value=2></el-option>
          <el-option label=">500" value=3></el-option>
        </el-select>
      </el-form-item>

    </el-form>
  <el-tooltip class="item" effect="dark" content="保存" placement="right">
    <el-button  style="margin-top:10px" type="success" @click="putGeographicFormInfo" >提交修改</el-button>
  </el-tooltip>
  </div>
</template>

<script>
import { getFormInfo } from '@/api/project'
import { putFormInfo } from '@/api/project'

export default {
  data() {
    return {
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
      }
    }
  },
  created() {
    this.getGeographicFormInfo()
  },
  methods: {
    getGeographicFormInfo() {
      getFormInfo(this.projectId).then(response => {
        this.geographicInfoForm.township = response.projectInfo.township
        this.geographicInfoForm.soundEnvironmentStandard = response.projectInfo.soundEnvironmentStandard
        this.geographicInfoForm.waterSourceDistance = response.projectInfo.waterSourceDistance
        this.geographicInfoForm.sensitivePointDistance = response.projectInfo.sensitivePointDistance
        this.geographicInfoForm.besideWaterTreatmentPlant = response.projectInfo.besideWaterTreatmentPlant
        this.geographicInfoForm.groundwaterArea = response.projectInfo.groundwaterArea
        this.geographicInfoForm.domesticSewageGo = response.projectInfo.domesticSewageGo
        this.geographicInfoForm.domesticSewageEnvironmentImpactAnalysis = response.projectInfo.domesticSewageEnvironmentImpactAnalysis
        this.geographicInfoForm.domesticSewageEmissionStandards = response.projectInfo.domesticSewageEmissionStandards
        this.geographicInfoForm.groundwaterBodyNumber = response.projectInfo.groundwaterBodyNumber
        this.geographicInfoForm.groundwaterQualityStandard = response.projectInfo.groundwaterQualityStandard
        this.geographicInfoForm.groundwaterType = response.projectInfo.groundwaterType
        this.geographicInfoForm.specialOptionForSewageTreatmentWorks = response.projectInfo.specialOptionForSewageTreatmentWorks
        this.geographicInfoForm.pollutantHoldingWaterBody = response.projectInfo.pollutantHoldingWaterBody
        this.geographicInfoForm.surfaceWaterQualityStandard = response.projectInfo.surfaceWaterQualityStandard
        this.geographicInfoForm.surfaceWaterFunction = response.projectInfo.surfaceWaterFunction
      })
    },
    putGeographicFormInfo() {
      this.$message({
        message: '修改成功',
        type: 'success'
      })
      putFormInfo(this.geographicInfoForm).then(response => {})
      this.loading = false
    }
  }
}
</script>

