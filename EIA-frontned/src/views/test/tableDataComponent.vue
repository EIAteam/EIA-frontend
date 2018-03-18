<template>
      <el-table :data="tableData" style="width: 100% " fit highlight-current-row border  ref="tableData" :rules="dataRules">

    <el-table-column label="项目" width="133">
      <template slot-scope="scope">
        <el-input v-model="scope.row.project" type="text"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="内容" width="500">
      <template slot-scope="scope">
        <el-input v-model="scope.row.content" type="textarea" @change="getInformation($event)"></el-input>
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
    getInformation: function($event) {
      if (this.geographicInfoForm.domesticSewageGo === '经三级化粪处理后排入污水处理厂') {
        this.scope.row.content = '供水来源为市政自来水，生活污水经三级化粪处理后排入污水处理厂'
      } else if (this.geographicInfoForm.domesticSewageGo === '经独立生活污水处理设施处理后排入内河涌') {
        this.scope.row.content = '供水来源为市政自来水，生活污水经独立生活污水处理设施处理后排入内河涌'
      }
    }
  }
}
</script>

