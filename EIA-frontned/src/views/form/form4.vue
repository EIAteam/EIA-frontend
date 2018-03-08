<template>
<div class="app-container">

<el-container style="height: 650px;">
<el-header style="margin-bottom:50px;" >
  <el-steps :active="active" finish-status="success" align-center>
      <el-step title="基础信息"></el-step>
      <el-step title="产品表/材料表/设备表"></el-step>
      <el-step title="地理信息"></el-step>
      <el-step title="工程组成/敏感点信息/废气排放标准"></el-step>
      <el-step title="基础信息附图"></el-step>
  </el-steps>
  <el-button-group style="margin-top:10px;margin-left:550px;width:300px;">
    <el-button type="primary" icon="el-icon-arrow-left"  @click="previous">上一页</el-button>
    <el-button type="primary" @click="next">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
  </el-button-group>
</el-header>

<el-main>
  <el-tabs v-model="activeName">
<!-- ./工程组成-->
    <el-tab-pane label="工程组成" name="first">
      <el-table :data="tableData" style="width: 100% " fit highlight-current-row border>

    <el-table-column label="项目" width="200">
      <template slot-scope="scope">
        {{scope.row.project}}
      </template>
    </el-table-column>
    <el-table-column label="内容" width="500">
      <template slot-scope="scope">
        <el-input v-model="scope.row.content" type="textarea"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="用途" width="500">
      <template slot-scope="scope">
        <el-input v-model="scope.row.use" type="textarea"></el-input>
      </template>
    </el-table-column>

      </el-table>
    <el-button  style="margin-top:10px;margin-left:500px;width:300px;" type="primary" @click="addRow" >如有需要请按此按钮，新增一行环保工程</el-button>
    </el-tab-pane>
<!-- ./敏感点信息 -->
    <el-tab-pane label="敏感点信息" name="second">

  <el-table :data="sensitiveInfoData1" style="width: 100%"  fit highlight-current-row border :span-method="spanMethod">

    <el-table-column label="环境要素" width="180">
      <template slot-scope="scope">
        {{scope.row.environmentalElements}}
      </template>
    </el-table-column>
    <el-table-column label="环境敏感点" width="300">
      <template slot-scope="scope">
        <el-input v-model="scope.row.environmentalSensitivePoint" placeholder="请填入附近的河涌名称"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="方位" width="180">
      <template slot-scope="scope">
        <el-input v-model="scope.row.orientation"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="距离（m）" width="180">
      <template slot-scope="scope">
        <el-input v-model="scope.row.distance"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="环境保护目标" width="380">
      <template slot-scope="scope">
        {{scope.row.environmentalObjective}}
      </template>
    </el-table-column>

  </el-table>

  <el-table :data="sensitiveInfoData2" style="width: 100%"  fit highlight-current-row border>

    <el-table-column label="环境要素" width="180">
      <template slot-scope="scope">
        {{scope.row.environmentalElements}}
      </template>
    </el-table-column>
    <el-table-column label="方位" width="200">
      <template slot-scope="scope">
        {{scope.row.orientation}}
      </template>
    </el-table-column>
    <el-table-column label="距离（m）" width="200">
      <template slot-scope="scope">
        {{scope.row.distance}}
      </template>
    </el-table-column>
    <el-table-column label="环境保护目标" width="380">
      <template slot-scope="scope">
        {{scope.row.environmentalObjective}}
      </template>
    </el-table-column>

  </el-table>

  <el-table :data="sensitiveInfoData3" style="width: 100%"  fit highlight-current-row border>

    <el-table-column label="环境要素" width="380">
      <template slot-scope="scope">
        <el-input v-model="scope.row.environmentalElements" placeholder="请填入名居名称或水源保护区名称，500米范围内"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="方位" width="200">
      <template slot-scope="scope">
        <el-input v-model="scope.row.orientation"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="距离（m）" width="200">
      <template slot-scope="scope">
        <el-input v-model="scope.row.distance"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="环境保护目标" width="250">
      <template slot-scope="scope">
        {{scope.row.environmentalObjective}}
      </template>
    </el-table-column>

  </el-table>
    <el-button  style="margin-top:10px;margin-left:500px;width:300px; " type="primary" @click="addRow2" >按此按钮增加行数</el-button>
    </el-tab-pane>
<!-- ./废气排放标准表 -->
    <el-tab-pane label="废气排放标准表" name="third">

  <el-table :data="emissionStandardFormData" style="width: 100%"  fit highlight-current-row border>

    <el-table-column label="污染物" width="180">
      <template slot-scope="scope">
        <el-select v-model="scope.row.pollutant" placeholder="请选择污染物" @change="getPollutant(scope.row,scope.$index)" v-if="scope.row.standard!=''">
          <el-option v-for="item in scope.row.pollutantOptions" :label="item.label" :value="item.value" :key="item.value"></el-option>
        </el-select>
      </template>
    </el-table-column>
    <el-table-column label="最高允许排放浓度（mg/m³）" width="150">
      <template slot-scope="scope">
        {{scope.row.maximumAllowableEmissionConcentration}}
      </template>
    </el-table-column>
    <el-table-column label="最高允许排放速率（kg/h）" width="150">
      <template slot-scope="scope">
        {{scope.row.maximumAllowableEmissionRate}}
      </template>
    </el-table-column>
    <el-table-column label="无组织排放监控点浓度限值（mg/m³）" width="150">
      <template slot-scope="scope">
        {{scope.row.emissionMonitoring}}
      </template>
    </el-table-column>
    <el-table-column label="标准" width="600">
      <template slot-scope="scope">
        <el-select v-model="scope.row.standard" placeholder="请选择标准" @change="getStandard(scope.$index,$event)" style="width:530px;">
          <el-option v-for="item in standardOptions" :label="item.label" :value="item.value" :key="item.value"></el-option>
        </el-select>
      </template>
    </el-table-column>

  </el-table>
    <el-button  style="margin-top:10px;margin-left:500px;width:300px; " type="primary" @click="addRow1" >按此按钮增加行数</el-button>
    </el-tab-pane>

  </el-tabs>
  <el-tooltip class="item" effect="dark" content="保存" placement="right">
    <el-button  style="margin-top:10px" type="success" @click="save" >提交修改</el-button>
  </el-tooltip>
</el-main>
</el-container>
</div>
</template>


<script>
import { getFormInfo } from '@/api/project'
import { putFormInfo } from '@/api/project'
export default {
  data() {
    return {
      active: 3,
      activeName: 'first',
      tableData: [
        {
          project: '主体工程',
          content: '',
          use: ''
        },
        {
          project: '储运工程',
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
        },
        {
          project: '环保工程',
          content: '',
          use: ''
        }
      ],
      sensitiveInfoData1: [
        {
          environmentalElements: '水环境',
          environmentalSensitivePoint: '',
          orientation: '',
          distance: '',
          environmentalObjective: '《地表水环境质量标准》（GB3838-2002）中的III类标准'
        },
        {
          environmentalElements: '',
          environmentalSensitivePoint: '',
          orientation: '',
          distance: '',
          environmentalObjective: ''
        },
        {
          environmentalElements: '',
          environmentalSensitivePoint: '',
          orientation: '',
          distance: '',
          environmentalObjective: ''
        }
      ],
      sensitiveInfoData2: [
        {
          environmentalElements: '大气环境',
          orientation: '---',
          distance: '---',
          environmentalObjective: '《环境空气质量标准》（GB3095-2012）二级标准'
        },
        {
          environmentalElements: '声环境',
          orientation: '---',
          distance: '---',
          environmentalObjective: '《声环境质量标准》（GB3096-2008）中的2类标准'
        }
      ],
      sensitiveInfoData3: [
        {
          environmentalElements: '',
          orientation: '',
          distance: '',
          environmentalObjective: '环境空气二级标准，声环境2类标准'
        }
      ],
      standardOptions: [
        { label: '《大气污染物排放限值》（DB44/27-2001）', value: '《大气污染物排放限值》（DB44/27-2001）' },
        { label: '《印刷行业挥发性有机化合物排放标准》（DB44/815-2010）', value: '《印刷行业挥发性有机化合物排放标准》（DB44/815-2010）' },
        { label: '《家具制造行业挥发性有机化合物排放标准》（DB44/814-2010）', value: '《家具制造行业挥发性有机化合物排放标准》（DB44/814-2010）' },
        { label: '《合成树脂工业污染物排放标准》（GB31572-2015）', value: '《合成树脂工业污染物排放标准》（GB31572-2015）' },
        { label: '《恶臭污染物排放标准》（GB14554-93）', value: '《恶臭污染物排放标准》（GB14554-93）' },
        { label: '《表面涂装（汽车制造业）挥发性有机化合物排放标准（DB44/816-2010）》', value: '《表面涂装（汽车制造业）挥发性有机化合物排放标准（DB44/816-2010）》' },
        { label: '《锅炉大气污染物排放标准》（GB13271-2014）', value: '《锅炉大气污染物排放标准》（GB13271-2014）' }
      ],
      emissionStandardFormData: [
        {
          standard: '',
          pollutant: '',
          pollutantOptions: [],
          emissionMonitoring: '',
          maximumAllowableEmissionRate: '',
          maximumAllowableEmissionConcentration: ''
        }
      ]
    }
  },
  /* created() {
    this.getFiveFormInfo()
  },*/
  methods: {
    getFiveFormInfo() {
      return new Promise((resolve, reject) => {
        getFormInfo().then(response => {
          this.tableData.content = response.tableData.content
          this.tableData.use = response.tableData.use
          this.sensitiveInfoData1.environmentalSensitivePoint = response.sensitiveInfoData1.environmentalSensitivePoint
          this.sensitiveInfoData1.orientation = response.sensitiveInfoData1.orientation
          this.sensitiveInfoData1.distance = response.sensitiveInfoData1.distance
          this.sensitiveInfoData3.environmentalElements = response.sensitiveInfoData3.environmentalElements
          this.sensitiveInfoData3.orientation = response.sensitiveInfoData3.orientation
          this.sensitiveInfoData3.distance = response.sensitiveInfoData3.distance
          this.emissionStandardFormData.standard = response.emissionStandardFormData.standard
          this.emissionStandardFormData.pollutant = response.emissionStandardFormData.pollutant
          this.emissionStandardFormData.pollutantOptions = response.emissionStandardFormData.pollutantOptions
          this.emissionStandardFormData.emissionMonitoring = response.emissionStandardFormData.emissionMonitoring
          this.emissionStandardFormData.maximumAllowableEmissionRate = response.emissionStandardFormData.maximumAllowableEmissionRate
          this.emissionStandardFormData.maximumAllowableEmissionConcentration = response.emissionStandardFormData.maximumAllowableEmissionConcentration
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    addRow() {
      this.tableData.push({ project: '环保工程', content: '', use: '' })
    },
    addRow1() {
      this.emissionStandardFormData.push({
        pollutant: '', standard: '', emissionMonitoring: '', maximumAllowableEmissionRate: '', maximumAllowableEmissionConcentration: '' })
    },
    addRow2() {
      this.sensitiveInfoData3.push({
        environmentalElements: '', orientation: '', distance: '', environmentalObjective: '环境空气二级标准，声环境2类标准' })
    },
    spanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex === 0) {
          return [3, 1]
        } else {
          return [0, 0]
        }
      }
      if (columnIndex === 4) {
        if (rowIndex === 0) {
          return [3, 1]
        } else {
          return [0, 0]
        }
      }
    },
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
    save() {
      this.$message({
        message: '修改成功',
        type: 'success'
      })
      putFormInfo(this.tableData, this.sensitiveInfoData1, this.materialData).then(response => {})
      this.loading = false
    },
    next() {
      switch (this.active) {
        case 0:
          this.$router.push({ path: '/form/form2' })
          break
        case 1:
          this.$router.push({ path: '/form/form3' })
          break
        case 2:
          this.$router.push({ path: '/form/form4' })
          break
        case 3:
          this.$router.push({ path: '/form/form5' })
          break
        default:
          break
      }
      if (this.active++ > 4) {
        this.active = 0
        this.$router.push({ path: '/form/form1' })
      }
    },
    previous() {
      if (this.active > 0) {
        this.active--
        this.$router.go(-1)
      }
    }
  }
}
</script>