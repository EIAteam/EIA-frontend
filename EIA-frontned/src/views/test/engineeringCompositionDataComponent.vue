<template>
<div>
  <el-table :data="engineeringCompositionData.otherEngineeringData" style="width: 100% " fit highlight-current-row border  ref="engineeringCompositionData.otherEngineeringData" :rules="otherEngineeringDataRules">

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

