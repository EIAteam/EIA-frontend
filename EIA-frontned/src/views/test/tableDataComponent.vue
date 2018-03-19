<template>

  <el-table :data="tableData" style="width: 100% " fit highlight-current-row border  ref="tableData" :rules="dataRules">

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
        <el-button plain type="primary" size="small" @click="addTable" >增加</el-button>
        <el-button plain type="danger" size="small" @click="deleteTable(scope.$index)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
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
    addTable() {
      this.tableData.push({ project: '', content: '', use: '' })
    },
    deleteTable(index) {
      if (this.tableData.length === 1) {
        this.tableData.splice(index, 0)
      } else {
        this.tableData.splice(index, 1)
      }
    },
    querySearch(queryString, cb) {
      var engineering = this.engineering
      var results = queryString ? engineering.filter(this.createFilter(queryString)) : engineering
      cb(results)
    },
    createFilter(queryString) {
      return (engineering) => {
        return (engineering.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    loadAll() {
      return [
        { 'value': '主体工程' },
        { 'value': '贮运工程' },
        { 'value': '辅助工程' },
        { 'value': '公用工程' }
      ]
    },
    handleSelect: function(item) {
      console.log(item)
    }
  },
  mounted() {
    this.engineering = this.loadAll()
  }
}

</script>

