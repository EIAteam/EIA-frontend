<template>
  <el-table :data="emissionStandardFormData" style="width: 100%"  fit highlight-current-row border ref="emissionStandardFormData" :rules="dataRules">

    <el-table-column label="标准" width="593">
      <template slot-scope="scope">
        <el-select v-model="scope.row.standard" placeholder="请选择标准" @change="getStandard(scope.$index,$event)" style="width:550px;">
          <el-option v-for="item in standardOptions" :label="item.label" :value="item.value" :key="item.value"></el-option>
        </el-select>
      </template>
    </el-table-column>
    <el-table-column label="污染物" width="180">
      <template slot-scope="scope">
        <el-select v-model="scope.row.pollutant" placeholder="请选择污染物" @change="getPollutant(scope.row,scope.$index)" v-if="scope.row.standard!=''">
          <el-option v-for="item in scope.row.pollutantOptions" :label="item.label" :value="item.value" :key="item.value"></el-option>
        </el-select>
      </template>
    </el-table-column>
    <el-table-column label="最高允许排放浓度（mg/m³）" width="120">
      <template slot-scope="scope">
        {{scope.row.maximumAllowableEmissionConcentration}}
      </template>
    </el-table-column>
    <el-table-column label="最高允许排放速率（kg/h）" width="120">
      <template slot-scope="scope">
        {{scope.row.maximumAllowableEmissionRate}}
      </template>
    </el-table-column>
    <el-table-column label="无组织排放监控点浓度限值（mg/m³）" width="120">
      <template slot-scope="scope">
        {{scope.row.emissionMonitoring}}
      </template>
    </el-table-column>

    <el-table-column label="操作" width="150">
      <template slot-scope="scope">
        <el-button plain type="primary" size="small" @click="addRowEmissions" >增加</el-button>
        <el-button plain type="danger" size="small" @click="deleteEmissions(scope.$index)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

</template>


<script>
export default {
  name: 'emissionStandardFormDataComponent',
  props: ['emissionStandardFormData'],
  data() {
    return {
      dataRules: {
        standard: [{ required: false, whitespace: true, trigger: 'change', type: 'string', message: '请选择' }],
        pollutant: [{ required: false, whitespace: true, trigger: 'change', type: 'string', message: '请选择' }]
      },
      standardOptions: [
        { label: '《大气污染物排放限值》（DB44/27-2001）', value: '《大气污染物排放限值》（DB44/27-2001）' },
        { label: '《印刷行业挥发性有机化合物排放标准》（DB44/815-2010）', value: '《印刷行业挥发性有机化合物排放标准》（DB44/815-2010）' },
        { label: '《家具制造行业挥发性有机化合物排放标准》（DB44/814-2010）', value: '《家具制造行业挥发性有机化合物排放标准》（DB44/814-2010）' },
        { label: '《合成树脂工业污染物排放标准》（GB31572-2015）', value: '《合成树脂工业污染物排放标准》（GB31572-2015）' },
        { label: '《恶臭污染物排放标准》（GB14554-93）', value: '《恶臭污染物排放标准》（GB14554-93）' },
        { label: '《表面涂装（汽车制造业）挥发性有机化合物排放标准（DB44/816-2010）》', value: '《表面涂装（汽车制造业）挥发性有机化合物排放标准（DB44/816-2010）》' },
        { label: '《锅炉大气污染物排放标准》（GB13271-2014）', value: '《锅炉大气污染物排放标准》（GB13271-2014）' }
      ]
    }
  },
  methods: {
    getStandard: function(index, standard) {
      const tempPollutantOptions = []
      this.pollutantOptions = []
      const allPollutant = [
        { standard: '《大气污染物排放限值》（DB44/27-2001）', pollutant: '颗粒物' },
        { standard: '《印刷行业挥发性有机化合物排放标准》（DB44/815-2010）', pollutant: 'VOCs' },
        { standard: '《印刷行业挥发性有机化合物排放标准》（DB44/815-2010）', pollutant: '甲苯' },
        { standard: '《印刷行业挥发性有机化合物排放标准》（DB44/815-2010）', pollutant: '二甲苯' },
        { standard: '《印刷行业挥发性有机化合物排放标准》（DB44/815-2010）', pollutant: '甲苯与二甲苯合计' },
        { standard: '《家具制造行业挥发性有机化合物排放标准》（DB44/814-2010）', pollutant: '二甲苯' },
        { standard: '《家具制造行业挥发性有机化合物排放标准》（DB44/814-2010）', pollutant: '甲苯' },
        { standard: '《家具制造行业挥发性有机化合物排放标准》（DB44/814-2010）', pollutant: '甲苯与二甲苯合计' },
        { standard: '《家具制造行业挥发性有机化合物排放标准》（DB44/814-2010）', pollutant: '非甲烷总烃' },
        { standard: '《家具制造行业挥发性有机化合物排放标准》（DB44/814-2010）', pollutant: 'VOCs' },
        { standard: '《合成树脂工业污染物排放标准》（GB31572-2015）', pollutant: '颗粒物' },
        { standard: '《合成树脂工业污染物排放标准》（GB31572-2015）', pollutant: '非甲烷总烃' },
        { standard: '《恶臭污染物排放标准》（GB14554-93）', pollutant: '臭气浓度' },
        { standard: '《表面涂装（汽车制造业）挥发性有机化合物排放标准（DB44/816-2010）》', pollutant: 'VOCs' },
        { standard: '《表面涂装（汽车制造业）挥发性有机化合物排放标准（DB44/816-2010）》', pollutant: '甲苯' },
        { standard: '《表面涂装（汽车制造业）挥发性有机化合物排放标准（DB44/816-2010）》', pollutant: '二甲苯' },
        { standard: '《表面涂装（汽车制造业）挥发性有机化合物排放标准（DB44/816-2010）》', pollutant: '甲苯与二甲苯合计' },
        { standard: '《锅炉大气污染物排放标准》（GB13271-2014）', pollutant: '颗粒物' },
        { standard: '《锅炉大气污染物排放标准》（GB13271-2014）', pollutant: '二氧化硫' },
        { standard: '《锅炉大气污染物排放标准》（GB13271-2014）', pollutant: '氮氧化物' }
      ]
      for (var val of allPollutant) {
        if (standard === val.standard) {
          tempPollutantOptions.push({ pollutant: val.pollutant, value: val.pollutant })
        }
      }
      this.emissionStandardFormData[index].pollutantOptions = tempPollutantOptions
    },
    getPollutant: function(data, index) {
      const allLimit = [
        { standard: '《大气污染物排放限值》（DB44/27-2001）', pollutant: '颗粒物', limit: ['/', '/', '1'] },
        { standard: '《印刷行业挥发性有机化合物排放标准》（DB44/815-2010）', pollutant: 'VOCs', limit: ['120', '5.1', '2'] },
        { standard: '《印刷行业挥发性有机化合物排放标准》（DB44/815-2010）', pollutant: '甲苯', limit: ['/', '/', '0.6'] },
        { standard: '《印刷行业挥发性有机化合物排放标准》（DB44/815-2010）', pollutant: '二甲苯', limit: ['/', '/', '0.2'] },
        { standard: '《印刷行业挥发性有机化合物排放标准》（DB44/815-2010）', pollutant: '甲苯与二甲苯合计', limit: ['15', '1.6', '/'] },
        { standard: '《家具制造行业挥发性有机化合物排放标准》（DB44/814-2010）', pollutant: '二甲苯', limit: ['/', '/', '0.2'] },
        { standard: '《家具制造行业挥发性有机化合物排放标准》（DB44/814-2010）', pollutant: '甲苯', limit: ['/', '/', '0.6'] },
        { standard: '《家具制造行业挥发性有机化合物排放标准》（DB44/814-2010）', pollutant: '甲苯与二甲苯合计', limit: ['20', '1', '/'] },
        { standard: '《家具制造行业挥发性有机化合物排放标准》（DB44/814-2010）', pollutant: '非甲烷总烃', limit: ['30', '2.9', '2'] },
        { standard: '《家具制造行业挥发性有机化合物排放标准》（DB44/814-2010）', pollutant: 'VOCs', limit: ['30', '2.9', '2'] },
        { standard: '《合成树脂工业污染物排放标准》（GB31572-2015）', pollutant: '颗粒物', limit: ['/', '/', '1'] },
        { standard: '《合成树脂工业污染物排放标准》（GB31572-2015）', pollutant: '非甲烷总烃', limit: ['100', '/', '4'] },
        { standard: '《恶臭污染物排放标准》（GB14554-93）', pollutant: '臭气浓度', limit: ['/', '/', '1'] },
        { standard: '《表面涂装（汽车制造业）挥发性有机化合物排放标准（DB44/816-2010）》', pollutant: 'VOCs', limit: ['90', '2.8', '2'] },
        { standard: '《表面涂装（汽车制造业）挥发性有机化合物排放标准（DB44/816-2010）》', pollutant: '甲苯', limit: ['/', '/', '0.6'] },
        { standard: '《表面涂装（汽车制造业）挥发性有机化合物排放标准（DB44/816-2010）》', pollutant: '二甲苯', limit: ['/', '/', '0.2'] },
        { standard: '《表面涂装（汽车制造业）挥发性有机化合物排放标准（DB44/816-2010）》', pollutant: '甲苯与二甲苯合计', limit: ['18', '1.4', '/'] },
        { standard: '《锅炉大气污染物排放标准》（GB13271-2014）', pollutant: '颗粒物', limit: ['20', '/', '/'] },
        { standard: '《锅炉大气污染物排放标准》（GB13271-2014）', pollutant: '二氧化硫', limit: ['50', '/', '/'] },
        { standard: '《锅炉大气污染物排放标准》（GB13271-2014）', pollutant: '氮氧化物', limit: ['200', '/', '/'] }
      ]
      for (var val of allLimit) {
        if (data.standard === val.standard && data.pollutant === val.pollutant) {
          this.emissionStandardFormData[index].maximumAllowableEmissionConcentration = val.limit[0]
          this.emissionStandardFormData[index].maximumAllowableEmissionRate = val.limit[1]
          this.emissionStandardFormData[index].emissionMonitoring = val.limit[2]
        }
      }
    },
    addRowEmissions() {
      this.emissionStandardFormData.push({
        pollutant: '', standard: '', emissionMonitoring: '', maximumAllowableEmissionRate: '', maximumAllowableEmissionConcentration: '' })
    },
    deleteEmissions(index) {
      if (this.emissionStandardFormData.length === 1) {
        this.emissionStandardFormData.splice(index, 0)
      } else {
        this.emissionStandardFormData.splice(index, 1)
      }
    }
  }
}
</script>
