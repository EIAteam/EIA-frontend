<template>
<div>
  <el-table :data="engineeringCompositionData.otherEngineeringData" style="width: 100% " :span-method="arraySpanMethod"
 fit highlight-current-row border  ref="engineeringCompositionData.otherEngineeringData" :rules="otherEngineeringDataRules">

    <el-table-column label="项目" width="133">
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
    <el-table-column label="参考内容" width="500">
      <template slot-scope="scope">
      <b>主体工程</b><br/>生产车间，位于所在厂房二层，面积为265平方米<br/>
      <b>储运工程</b><br/>仓库，位于所在厂房二层西北侧，面积为48平方米<br/>
      <b>辅助工程</b><br/>办公室，位于所在厂房三层西北侧，面积为48平方米<br/>
      <b>公用工程</b><br/>市政供电、市政供水，排水为雨污分流，雨水经雨水管道排入市政下水道，生活污水经独立生活污水处理设施处理后排入内河涌<br/>
      <b>环保工程</b><br/>有机废气经集气罩收集后15米排气筒高空排放
      </template>
    </el-table-column>
  </el-table>

  <el-table :data="engineeringCompositionData.environmentalEngineeringData" style="width: 100% " fit highlight-current-row border  ref="engineeringCompositionData.environmentalEngineeringData" :rules="environmentalEngineeringDataRules">

    <el-table-column label="项目" width="133">
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
    <el-table-column label="操作" width="150">
      <template slot-scope="scope">
        <el-button plain type="primary" size="small" @click="addRowData" >增加</el-button>
        <el-button plain type="danger" size="small" @click="deleteRowData(scope.$index)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

</div>
</template>

<script>
export default {
  name: 'engineeringCompositionDataComponent',
  props: ['engineeringCompositionData'],
  data() {
    return {
      otherEngineeringDataRules: {
        content: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        use: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }]
      },
      environmentalEngineeringDataRules: {
        content: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        use: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }]
      }
    }
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 3) {
        if (rowIndex === 0) {
          return {
            rowspan: 4,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    addRowData() {
      console.log(1)
      this.engineeringCompositionData.environmentalEngineeringData.push({ project: '环保工程', content: this.engineeringCompositionData.environmentalEngineeringData[0].content, use: '' })
    },
    deleteRowData(index) {
      if (this.engineeringCompositionData.environmentalEngineeringData.length === 1) {
        this.engineeringCompositionData.environmentalEngineeringData.splice(index, 0)
      } else {
        this.engineeringCompositionData.environmentalEngineeringData.splice(index, 1)
      }
    }
  }
}

</script>

