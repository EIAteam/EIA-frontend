<template>
<div>
  <el-table :data="tableData.environmentalProtectionData" style="width: 100% " fit highlight-current-row border  ref="tableData.environmentalProtectionData" :rules="dataRules">

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
        <el-button plain type="primary" size="small" @click="addEnvironmentalProtectionData" >增加</el-button>
        <el-button plain type="danger" size="small" @click="deleteEnvironmentalProtectionData(scope.$index)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-table :data="tableData.referenceData" style="width: 100% " fit highlight-current-row border  ref="tableData.referenceData" :rules="dataRules">

    <el-table-column label="项目" width="133">
      <template slot-scope="scope">
        <el-autocomplete class="inline-input" v-model="scope.row.project" :fetch-suggestions="querySearch"
         @select="handleSelect($event)"></el-autocomplete>
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
        <el-button plain type="primary" size="small" @click="addReferenceData" >增加</el-button>
        <el-button plain type="danger" size="small" @click="deleteReferenceData(scope.$index)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

</div>
</template>

<script>
export default {
  name: 'tableDataComponent',
  props: ['tableData'],
  data() {
    return {
      dataRules: {
        project: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        content: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        use: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }]
      }
    }
  },
  methods: {
    addEnvironmentalProtectionData() {
      this.tableData.environmentalProtectionData.push({ project: '环保工程', content: this.tableData.environmentalProtectionData[0].content, use: '' })
    },
    addReferenceData() {
      this.tableData.referenceData.push({ project: '', content: '', use: '' })
    },
    deleteEnvironmentalProtectionData(index) {
      if (this.tableData.environmentalProtectionData.length === 1) {
        this.tableData.environmentalProtectionData.splice(index, 0)
      } else {
        this.tableData.environmentalProtectionData.splice(index, 1)
      }
    },
    deleteReferenceData(index) {
      if (this.tableData.referenceData.length === 1) {
        this.tableData.referenceData.splice(index, 0)
      } else {
        this.tableData.referenceData.splice(index, 1)
      }
    },
    querySearch(queryString, cb) {
      var reference = this.reference
      var results = queryString ? reference.filter(this.createFilter(queryString)) : reference
      cb(results)
    },
    createFilter(queryString) {
      return (reference) => {
        return (reference.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    loadAll() {
      return [
        { 'value': '主体工程' },
        { 'value': '辅助工程' },
        { 'value': '公用工程' },
        { 'value': '贮运工程' }
      ]
    },
    handleSelect: function(item) {
      console.log(item)
    }
  },
  mounted() {
    this.reference = this.loadAll()
  }
}

</script>

