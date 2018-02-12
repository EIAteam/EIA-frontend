<template>
  <div>
    <el-form :model="geographicInfoForm">
      <el-form-item lable="所在区镇">
        <el-select v-model="geographicInfoForm.township" placeholder="请选择">
          <el-option label="勒流"></el-option>
          <el-option label="大良"></el-option>
          <el-option label="容桂"></el-option>
          <el-option label="均安"></el-option>
          <el-option label="陈村"></el-option>
          <el-option label="伦教"></el-option>
          <el-option label="乐从"></el-option>
          <el-option label="龙江"></el-option>
          <el-option label="北滘"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item lable="污水处理厂特别选项">
        <el-select v-model="geographicInfoForm." placeholder="请选择">
          <el-option label="有"></el-option>
          <el-option label="无"></el-option>
      </el-form-item>

      <el-form-item lable="纳污水体">
        <el-select v-model="geographicInfoForm." placeholder="请选择">
          <el-option label="潭州水道"></el-option>
          <el-option label="顺德支流"></el-option>
          <el-option label="李家沙水道"></el-option>
          <el-option label="海州水道"></el-option>
          <el-option label="内河涌"></el-option>
      </el-form-item>

      <el-form-item lable="地表水质量标准">
        <el-select v-model="geographicInfoForm." placeholder="请选择">
          <el-option label="III类"></el-option>
          <el-option label="IV类"></el-option>
      </el-form-item>

      <el-form-item lable="地表水功能">
        <el-select v-model="geographicInfoForm." placeholder="请选择">
          <el-option label="综合用水"></el-option>
          <el-option label="景观、农用功能"></el-option>
      </el-form-item>

      <el-form-item lable="声环境质量标准">
        <el-select v-model="geographicInfoForm.soundEnvironmentStandard" placeholder="请选择">
          <el-option label="0类"></el-option>
          <el-option label="1类"></el-option>
          <el-option label="2类"></el-option>
          <el-option label="3类"></el-option>
          <el-option label="4a类"></el-option>
          <el-option label="4b类"></el-option>
      </el-form-item>

      <el-form-item lable="地下水区域">
        <el-select v-model="geographicInfoForm.groundwaterArea" placeholder="请选择">
          <el-option label="珠江三角洲佛山南海分散式开发利用区"></el-option>
          <el-option label="珠江三角洲佛山南海大沥至顺德勒流地质灾害易发区"></el-option>
          <el-option label="北江佛山三水地下水水源涵养区"></el-option>
          <el-option label="珠江三角洲佛山南海地下水水源涵养区"></el-option>
          <el-option label="珠江三角洲佛山三水地下水水源涵养区"></el-option>
          <el-option label="珠江三角洲佛山高明地下水水源涵养区"></el-option>
          <el-option label="珠江三角洲佛山顺德不宜开采区"></el-option>
          <el-option label="珠江三角洲佛山高明不宜开采区"></el-option>
          <el-option label="珠江三角洲佛山三水储备区"></el-option>
          <el-option label="北江佛山三水应急水源区"></el-option>
          <el-option label="珠江三角洲佛山南海应急水源区"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item lable="地下水类型">
        <el-input v-model="geographicInfoForm." type="text" placeholder="地下水类型"></el-input>
      </el-form-item>

      <el-form-item lable="地下水质量标准">
        <el-select v-model="geographicInfoForm." placeholder="请选择">
          <el-option label="I类"></el-option>
          <el-option label="II类"></el-option>
          <el-option label="III类"></el-option>
          <el-option label="IV类"></el-option>
          <el-option label="V类"></el-option>

      </el-form-item>

      <el-form-item lable="地下水水体编号">
        <el-input v-model="geographicInfoForm." type="text" placeholder="地下水水体编号"></el-input>
      </el-form-item>

      <el-form-item lable="是否污水处理厂纳污范围">
        <el-select v-model="geographicInfoForm.besideWaterTreatmentPlant" placeholder="请选择">
          <el-option label="是"></el-option>
          <el-option label="否"></el-option>
      </el-form-item>

      <el-form-item lable="生活污水去向">
        <el-input v-model="geographicInfoForm." type="text" placeholder="文字描述"></el-input>
      </el-form-item>

      <el-form-item lable="生活污水环境影响分析">
        <el-input v-model="geographicInfoForm." type="text" placeholder="文字描述"></el-input>
      </el-form-item>

      <el-form-item lable="生活污水排放标准">
        <el-input v-model="geographicInfoForm." type="text" placeholder="文字描述"></el-input>
      </el-form-item>

      <el-form-item lable="敏感点距离">
        <el-select v-model="geographicInfoForm.sensitivePointDistance" placeholder="请选择">
          <el-option label="≤50"></el-option>
          <el-option label=">50且≤100"></el-option>
          <el-option label=">100"></el-option>
      </el-form-item>

      <el-form-item lable="水源保护区距离">
        <el-select v-model="geographicInfoForm.waterSourceDistance" placeholder="请选择">
          <el-option label="<0"></el-option>
          <el-option label=">0且≤500"></el-option>
          <el-option label=">500"></el-option>
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
          groundwaterArea: ''
        }
      }
    }
  }
</script>

