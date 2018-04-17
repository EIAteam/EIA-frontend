<template>
  <el-table :data="secondLevelData" style="width: 100% " fit highlight-current-row ref="secondLevelData" :rules="dataRules">
    <el-table-column type="index" width="50">
    </el-table-column>
    <el-table-column label="废气名称" width="300">
      <template slot-scope="scope">
        <el-input v-model="scope.row.gasName" size="small" :disabled="true"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="废气标注" width="180">
      <template slot-scope="scope">
        <el-select v-model="scope.row.remark" placeholder="请选择">
          <el-option v-for="item in remarkOption" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </template>
    </el-table-column>
    <el-table-column label="收集效率" width="150" >
      <template slot-scope="scope">
        <el-input v-model="scope.row.collectionEfficiency" size="small"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="处理效率" width="150" >
      <template slot-scope="scope">
        <el-input v-model="scope.row.processingEfficiency" size="small"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="风量(m3/h)" width="150" >
      <template slot-scope="scope">
        <el-input v-model="scope.row.airQuantity" size="small"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="排气筒高度(m)" width="150" >
      <template slot-scope="scope">
        <el-input v-model="scope.row.gasCylinderHeight" size="small"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="年排放量(t)" width="150">
      <template slot-scope="scope">
        <el-input v-if="scope.row.remark == '有组织排放'" v-model="scope.row.year_discharge_wo" size="small" :disabled="true"></el-input>
        <el-input v-if="scope.row.remark == '无组织排放1'" v-model="scope.row.year_discharge_woo1" size="small" :disabled="true"></el-input>
        <el-input v-if="scope.row.remark == '无组织排放2'" v-model="scope.row.year_discharge_woo2" size="small" :disabled="true"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="小时排放量(kg)" width="150">
      <template slot-scope="scope">
        <el-input v-if="scope.row.remark == '有组织排放'" v-model="scope.row.hour_discharge_wo" size="small" :disabled="true"></el-input>
        <el-input v-if="scope.row.remark == '无组织排放1'" v-model="scope.row.hour_discharge_woo1" size="small" :disabled="true"></el-input>
        <div v-if="scope.row.remark == '无组织排放2'">--</div>
      </template>
    </el-table-column>
    <el-table-column label="排放浓度(mg/m3)" width="150">
      <template slot-scope="scope">
        <el-input v-if="scope.row.remark == '有组织排放'" v-model="scope.row.concentration_wo" size="small" :disabled="true"></el-input>
        <div v-if="scope.row.remark == '无组织排放1'">--</div>
        <div v-if="scope.row.remark == '无组织排放2'">--</div>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: 'secondLevelDataComponent',
  props: ['secondLevelData'],
  data() {
    return {
      dataRules: {
        remark: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }]
      },
      remarkOption: [
        { value: '有组织排放', label: '有组织排放' },
        { value: '无组织排放1', label: '无组织排放1' },
        { value: '无组织排放2', label: '无组织排放2' }
      ]
    }
  },
  methods: {
  }
}
</script>