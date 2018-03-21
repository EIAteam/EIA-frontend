<template>
  <el-table :data="equipmentData" style="width: 100%"  fit highlight-current-row ref="equipmentData" :rules="dataRules">
    <el-table-column type="index" width="50">
    </el-table-column>

    <el-table-column label="设备名称" width="200">
      <template slot-scope="scope">
        <el-input v-model="scope.row.equipmentName" size="small"></el-input>
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
        <el-button plain type="primary" size="small" @click="addEquipment" >增加</el-button>
        <el-button plain type="danger" size="small" @click="deleteEquipment(scope.$index)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'equipmentDataComponent',
  props: ['equipmentData'],
  data() {
    return {
      dataRules: {
        equipmentName: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        num: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        unit: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        remark: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }]
      }
    }
  },
  methods: {
    addEquipment() {
      this.equipmentData.push({ equipmentData: '', num: '', unit: '', remark: '' })
    },
    deleteEquipment(index) {
      if (this.equipmentData.length === 1) {
        this.equipmentData.splice(index, 0)
      } else {
        this.equipmentData.splice(index, 1)
      }
    }
  }
}
</script>

