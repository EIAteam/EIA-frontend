<template>
  <el-table :data="productsData" style="width: 100% " fit highlight-current-row ref="productsData" :rules="dataRules">
    <el-table-column type="index" width="50">
    </el-table-column>

    <el-table-column label="产品名称" width="200" >
      <template slot-scope="scope">
        <el-input v-model="scope.row.productName" size="small"></el-input>
        <el-input v-model="scope.row.id" size="small" style="display:none"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="数量" width="200">
      <template slot-scope="scope">
        <el-input v-model="scope.row.num" size="small"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="单位" width="200">
      <template slot-scope="scope">
        <el-input v-model="scope.row.unit" size="small"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="备注" width="200">
      <template slot-scope="scope">
        <el-input v-model="scope.row.remark" size="small"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="200">
      <template slot-scope="scope">
        <el-button plain type="primary" size="small" @click="addProduct" >增加</el-button>
        <el-button plain type="danger" size="small" @click="deleteProduct(scope.$index)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'productsDataComponent',
  props: ['productsData'],
  data() {
    return {
      dataRules: {
        productName: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        num: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        unit: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        remark: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }]
      }
    }
  },
  methods: {
    addProduct() {
      this.productsData.push({ productName: '', num: '', unit: '', remark: '' })
    },
    deleteProduct(index) {
      if (this.productsData.length === 1) {
        this.productsData.splice(index, 0)
      } else {
        this.productsData.splice(index, 1)
      }
    }
  }
}
</script>

