<template>
    <el-form :model="geographicInfoForm" label-width="100px;" ref="geographicInfoForm" :rules="formRules">
      <el-form-item label="所在区镇" prop="township">
        <el-select v-model="geographicInfoForm.township" placeholder="请选择"
        style="width:400px;" @change="getSurfacewaterInformation($event), getDomesticSewage($event)">
          <el-option v-for="item in surfacewaterOptions" :label="item.label" :value="item.value" :key="item.value"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="污水处理厂特别选项" prop="specialOptionForSewageTreatmentWorks">
        <el-select v-model="geographicInfoForm.specialOptionForSewageTreatmentWorks" placeholder="请选择"
        style="width:400px;" @change="getSurfacewaterInformation($event)">
          <el-option v-for="item in specialOptionForSewageTreatmentWorksOptions" :label="item.label" :value="item.value" :key="item.value"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="是否污水处理厂纳污范围" prop="besideWaterTreatmentPlant">
        <el-select v-model="geographicInfoForm.besideWaterTreatmentPlant" placeholder="请选择"
        style="width:400px;" @change="getSurfacewaterInformation($event), getDomesticSewage($event)">
          <el-option v-for="item in besideWaterTreatmentPlantOptions" :label="item.label" :value="item.value" :key="item.value"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="纳污水体" prop="pollutantHoldingWaterBody">
        <el-input v-model="geographicInfoForm.pollutantHoldingWaterBody" style="width:400px;" :disabled="true"></el-input>
      </el-form-item>

      <el-form-item label="地表水质量标准" prop="surfaceWaterQualityStandard">
        <el-input v-model="geographicInfoForm.surfaceWaterQualityStandard" style="width:400px;" :disabled="true"></el-input>
      </el-form-item>

      <el-form-item label="地表水功能" prop="surfaceWaterFunction">
        <el-input v-model="geographicInfoForm.surfaceWaterFunction" style="width:400px;" :disabled="true"></el-input>
      </el-form-item>

      <el-form-item label="声环境质量标准" prop="soundEnvironmentStandard">
        <el-select v-model="geographicInfoForm.soundEnvironmentStandard" placeholder="请选择">
          <el-option label="0类" value="0类"></el-option>
          <el-option label="1类" value="1类"></el-option>
          <el-option label="2类" value="2类"></el-option>
          <el-option label="3类" value="3类"></el-option>
          <el-option label="4a类" value="4a类"></el-option>
          <el-option label="4b类" value="4b类"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="地下水区域" prop="groundwaterArea">
        <el-select v-model="geographicInfoForm.groundwaterArea" placeholder="请选择"
        style="width:400px;" @change="getGroundwaterInformation($event)">
          <el-option v-for="item in groundwaterAreaOptions" :label="item.label" :value="item.value" :key="item.value"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="地下水类型" prop="groundwaterType">
        <el-input v-model="geographicInfoForm.groundwaterType" style="width:400px;" :disabled="true"></el-input>
      </el-form-item>

      <el-form-item label="地下水质量标准" prop="groundwaterQualityStandard">
        <el-input v-model="geographicInfoForm.groundwaterQualityStandard" style="width:400px;" :disabled="true"></el-input>
      </el-form-item>

      <el-form-item label="地下水水体编号" prop="groundwaterBodyNumber">
        <el-input v-model="geographicInfoForm.groundwaterBodyNumber" style="width:400px;" :disabled="true"></el-input>
      </el-form-item>

      <el-form-item label="生活污水去向" prop="domesticSewageGo">
        <el-input v-model="geographicInfoForm.domesticSewageGo" type="text" style="width:700px;" :disabled="true"></el-input>
      </el-form-item>

      <el-form-item label="生活污水环境影响分析" prop="domesticSewageEnvironmentImpactAnalysis">
        <el-input v-model="geographicInfoForm.domesticSewageEnvironmentImpactAnalysis" type="textarea" style="width:700px;" :disabled="true"></el-input>
      </el-form-item>

      <el-form-item label="生活污水排放标准" prop="domesticSewageEmissionStandards">
        <el-input v-model="geographicInfoForm.domesticSewageEmissionStandards" type="textarea"  style="width:1000px;" :disabled="true"></el-input>
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
</template>

<script>
export default {
  name: 'geographicInfoFormComponent',
  props: ['geographicInfoForm'],
  data() {
    return {
      formRules: {
        township: [{ required: true, whitespace: true, trigger: 'change', type: 'string', message: '请选择' }],
        specialOptionForSewageTreatmentWorks: [{ required: true, whitespace: true, trigger: 'change', type: 'string', message: '请选择' }],
        besideWaterTreatmentPlant: [{ required: true, whitespace: true, trigger: 'change', type: 'string', message: '请选择' }],
        soundEnvironmentStandard: [{ required: true, whitespace: true, trigger: 'change', type: 'string', message: '请选择' }],
        groundwaterArea: [{ required: true, whitespace: true, trigger: 'change', type: 'string', message: '请选择' }],
        sensitivePointDistance: [{ required: true, whitespace: true, trigger: 'change', type: 'string', message: '请选择' }],
        waterSourceDistance: [{ required: true, whitespace: true, trigger: 'change', type: 'string', message: '请选择' }]
      },
      groundwaterAreaOptions: [
        { label: '珠江三角洲佛山南海分散式开发利用区', value: '珠江三角洲佛山南海分散式开发利用区' },
        { label: '珠江三角洲佛山南海大沥至顺德勒流地质灾害易发区', value: '珠江三角洲佛山南海大沥至顺德勒流地质灾害易发区' },
        { label: '北江佛山三水地下水水源涵养区', value: '北江佛山三水地下水水源涵养区' },
        { label: '珠江三角洲佛山南海地下水水源涵养区', value: '珠江三角洲佛山南海地下水水源涵养区' },
        { label: '珠江三角洲佛山三水地下水水源涵养区', value: '珠江三角洲佛山三水地下水水源涵养区' },
        { label: '珠江三角洲佛山高明地下水水源涵养区', value: '珠江三角洲佛山高明地下水水源涵养区' },
        { label: '珠江三角洲佛山顺德不宜开采区', value: '珠江三角洲佛山顺德不宜开采区' },
        { label: '珠江三角洲佛山高明不宜开采区', value: '珠江三角洲佛山高明不宜开采区' },
        { label: '珠江三角洲佛山三水储备区', value: '珠江三角洲佛山三水储备区' },
        { label: '北江佛山三水应急水源区', value: '北江佛山三水应急水源区' },
        { label: '珠江三角洲佛山南海应急水源区', value: '珠江三角洲佛山南海应急水源区' }
      ],
      surfacewaterOptions: [
        { label: '勒流', value: '勒流' },
        { label: '大良', value: '大良' },
        { label: '容桂', value: '容桂' },
        { label: '均安', value: '均安' },
        { label: '杏坛', value: '杏坛' },
        { label: '伦教', value: '伦教' },
        { label: '乐从', value: '乐从' },
        { label: '北滘', value: '北滘' },
        { label: '龙江', value: '龙江' }
      ],
      specialOptionForSewageTreatmentWorksOptions: [
        { label: '无', value: '无' },
        { label: '大门', value: '大门' },
        { label: '逢沙', value: '逢沙' },
        { label: '一污', value: '一污' },
        { label: '二污', value: '二污' }
      ],
      besideWaterTreatmentPlantOptions: [
        { label: '是', value: '是' },
        { label: '否', value: '否' }
      ]
    }
  },
  methods: {
    getGroundwaterInformation: function(groundwaterArea) {
      const allGroundwaterInformation = [
        { groundwaterArea: '珠江三角洲佛山南海分散式开发利用区', groundwaterInformation: ['孔隙水', 'III类', 'H074406001Q01'] },
        { groundwaterArea: '珠江三角洲佛山南海大沥至顺德勒流地质灾害易发区', groundwaterInformation: ['孔隙水', 'III类', 'H074406002S01'] },
        { groundwaterArea: '北江佛山三水地下水水源涵养区', groundwaterInformation: ['裂隙水', 'III类', 'H054406002T01'] },
        { groundwaterArea: '珠江三角洲佛山南海地下水水源涵养区', groundwaterInformation: ['裂隙水', 'III类', 'H074406002T01'] },
        { groundwaterArea: '珠江三角洲佛山三水地下水水源涵养区', groundwaterInformation: ['裂隙水', 'III类', 'H074406002T02'] },
        { groundwaterArea: '珠江三角洲佛山高明地下水水源涵养区', groundwaterInformation: ['裂隙水', 'III类', 'H074406002T03'] },
        { groundwaterArea: '珠江三角洲佛山顺德不宜开采区', groundwaterInformation: ['孔隙水', 'V类', 'H074406003U01'] },
        { groundwaterArea: '珠江三角洲佛山高明不宜开采区', groundwaterInformation: ['孔隙水', 'V类', 'H074406003U02'] },
        { groundwaterArea: '珠江三角洲佛山三水储备区', groundwaterInformation: ['孔隙水岩溶水', 'III类', 'H074406003V01'] },
        { groundwaterArea: '北江佛山三水应急水源区', groundwaterInformation: ['孔隙水岩溶水', 'III类', 'H054406003W01'] },
        { groundwaterArea: '珠江三角洲佛山南海应急水源区', groundwaterInformation: ['孔隙水岩溶水', 'III类', 'H074406003W01'] }
      ]
      for (var val of allGroundwaterInformation) {
        if (groundwaterArea === val.groundwaterArea) {
          this.geographicInfoForm.groundwaterType = val.groundwaterInformation[0]
          this.geographicInfoForm.groundwaterQualityStandard = val.groundwaterInformation[1]
          this.geographicInfoForm.groundwaterBodyNumber = val.groundwaterInformation[2]
        }
      }
    },
    getSurfacewaterInformation: function($event) {
      const allSurfacewaterInformation = [
        { township: '勒流', specialOptionForSewageTreatmentWorks: '无', besideWaterTreatmentPlant: '是', surfacewaterInformation: ['顺德支流', 'III类', '综合用水'] },
        { township: '北滘', specialOptionForSewageTreatmentWorks: '无', besideWaterTreatmentPlant: '是', surfacewaterInformation: ['潭洲水道', 'III类', '综合用水'] },
        { township: '龙江', specialOptionForSewageTreatmentWorks: '无', besideWaterTreatmentPlant: '是', surfacewaterInformation: ['内河涌', 'IV类', '景观、农用功能'] },
        { township: '大良', specialOptionForSewageTreatmentWorks: '大门', besideWaterTreatmentPlant: '是', surfacewaterInformation: ['顺德支流', 'III类', '综合用水'] },
        { township: '大良', specialOptionForSewageTreatmentWorks: '逢沙', besideWaterTreatmentPlant: '是', surfacewaterInformation: ['李家沙水道', 'III类', '综合用水'] },
        { township: '均安', specialOptionForSewageTreatmentWorks: '无', besideWaterTreatmentPlant: '是', surfacewaterInformation: ['海洲水道', 'III类', '综合用水'] },
        { township: '伦教', specialOptionForSewageTreatmentWorks: '无', besideWaterTreatmentPlant: '是', surfacewaterInformation: ['李家沙水道', 'III类', '综合用水'] },
        { township: '杏坛', specialOptionForSewageTreatmentWorks: '无', besideWaterTreatmentPlant: '是', surfacewaterInformation: ['顺德支流', 'III类', '综合用水'] },
        { township: '乐从', specialOptionForSewageTreatmentWorks: '无', besideWaterTreatmentPlant: '是', surfacewaterInformation: ['内河涌', 'IV类', '景观、农用功能'] },
        { township: '容桂', specialOptionForSewageTreatmentWorks: '一污', besideWaterTreatmentPlant: '是', surfacewaterInformation: ['桂洲水道', 'III类', '综合用水'] },
        { township: '容桂', specialOptionForSewageTreatmentWorks: '二污', besideWaterTreatmentPlant: '是', surfacewaterInformation: ['洪奇沥洲水道', 'III类', '综合用水'] }
      ]
      for (var val of allSurfacewaterInformation) {
        if (this.geographicInfoForm.township === val.township && this.geographicInfoForm.specialOptionForSewageTreatmentWorks === val.specialOptionForSewageTreatmentWorks && this.geographicInfoForm.besideWaterTreatmentPlant === val.besideWaterTreatmentPlant) {
          this.geographicInfoForm.pollutantHoldingWaterBody = val.surfacewaterInformation[0]
          this.geographicInfoForm.surfaceWaterQualityStandard = val.surfacewaterInformation[1]
          this.geographicInfoForm.surfaceWaterFunction = val.surfacewaterInformation[2]
          break
        } else {
          this.geographicInfoForm.pollutantHoldingWaterBody = ''
          this.geographicInfoForm.surfaceWaterQualityStandard = ''
          this.geographicInfoForm.surfaceWaterFunction = ''
        }
      }
    },
    getDomesticSewage: function($event) {
      if (this.geographicInfoForm.besideWaterTreatmentPlant === '是') {
        this.geographicInfoForm.domesticSewageGo = '经三级化粪处理后排入污水处理厂'
        this.geographicInfoForm.domesticSewageEnvironmentImpactAnalysis = '经三级化粪处理达到广东省地方标准《水污染物排放限值》（DB44/26-2001）第二时段三级标准后经市政管网排入污水处理厂进一步处理，尾水排入。废水经达标处理后对周围环境影响不大。'
        this.geographicInfoForm.domesticSewageEmissionStandards = '经三级化粪处理达到广东省地方标准《水污染物排放限值》（DB44/26-2001）第二时段三级标准：COD≤500mg/L、BOD5≤300mg/L、SS≤400mg/L，等等；达标后排入' +
        this.geographicInfoForm.township + '污水处理厂处理。根据2013年7月11日颁布的《顺德区环境运输和城市管理局关于全区城镇污水处理厂尾水排放执行标准的通知》规定：污水处理厂的尾水COD、氨氮执行《城镇污水处理厂污染物排放标准》（GB18918-2002）一级B标准及《水污染物排放限值》（DB44/26-2001）第二时段一级标准的较严者，其他指标现执行《城镇污水处理厂污染物排放标准》（GB18918-2002）一级B标准：即CODcr≤40mg/L，BOD5≤20mg/L，NH3-N≤8mg/L，SS≤20mg/L，总磷≤1mg/L，动植物油3mg/L，LAS≤1mg/L。'
      } else if (this.geographicInfoForm.besideWaterTreatmentPlant === '否') {
        this.geographicInfoForm.domesticSewageGo = '经独立生活污水处理设施处理后排入内河涌'
        this.geographicInfoForm.domesticSewageEnvironmentImpactAnalysis = '经独立生活污水处理设施处理达到《城镇污水处理厂污染物排放标准》（GB18918-2002）中的二级标准后排入附近内河涌'
        this.geographicInfoForm.domesticSewageEmissionStandards = '经自建废水处理设施处理后，达到《城镇污水处理厂污染物排放标准》（GB18918-2002）中的二级标准后排入内河涌，即CODcr≤100mg/L，BOD≤30mg/L,SS≤30mg/L,NH3-N≤25mg/L。'
      }
    }
  }
}
</script>

