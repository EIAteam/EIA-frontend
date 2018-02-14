<template>
  <div class="app-container">
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
        <el-select v-model="geographicInfoForm.groundwaterArea" placeholder="请选择">
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
        <el-input v-model="geographicInfoForm.groundwaterType" type="text" placeholder="地下水类型"></el-input>
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
        <el-input v-model="geographicInfoForm.groundwaterBodyNumber" type="text" placeholder="地下水水体编号"></el-input>
      </el-form-item>

      <el-form-item label="是否污水处理厂纳污范围" prop="besideWaterTreatmentPlant">
        <el-select v-model="geographicInfoForm.besideWaterTreatmentPlant" placeholder="请选择">
          <el-option label="是" value=1></el-option>
          <el-option label="否" value=2></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="生活污水去向" prop="domesticSewageGo">
        <el-input v-model="geographicInfoForm.domesticSewageGo" type="text" placeholder="文字描述"></el-input>
      </el-form-item>

      <el-form-item label="生活污水环境影响分析" prop="domesticSewageEnvironmentImpactAnalysis">
        <el-input v-model="geographicInfoForm.domesticSewageEnvironmentImpactAnalysis" type="textarea" placeholder="文字描述"></el-input>
      </el-form-item>

      <el-form-item label="生活污水排放标准" prop="domesticSewageEmissionStandards">
        <el-input v-model="geographicInfoForm.domesticSewageEmissionStandards" type="textarea" placeholder="文字描述"></el-input>
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
  </div>
</template>

<script>
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
    }
  }
</script>

