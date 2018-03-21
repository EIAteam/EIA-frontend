<template>
  <el-table :data="materialData" style="width: 100% " fit highlight-current-row ref="materialData" :rules="dataRules">
    <el-table-column type="index" width="50">
    </el-table-column>

    <el-table-column label="材料名称" width="180">
      <template slot-scope="scope">
        <el-input v-model="scope.row.materialName" size="small"></el-input>
        <el-input v-model="scope.row.id" size="small" style="display:none"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="数量" width="180">
      <template slot-scope="scope">
        <el-input v-model="scope.row.num" size="small"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="单位" width="180">
      <template slot-scope="scope">
        <el-input v-model="scope.row.unit" size="small"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="备注" width="180">
      <template slot-scope="scope">
        <el-input v-model="scope.row.remark" size="small"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="材料状态" width="180">
      <template slot-scope="scope">
        <el-select v-model="scope.row.state" placeholder="请选择">
          <el-option v-for="item in stateOption" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </template>
    </el-table-column>
    <el-table-column label="边角料系数" width="180">
      <template slot-scope="scope">
        <el-input v-model="scope.row.ratio" size="small"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="150">
      <template slot-scope="scope">
        <el-button plain type="primary" size="small" @click="addMaterial" >增加</el-button>
        <el-button plain type="danger" size="small" @click="deleteMaterial(scope.$index)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'materialDataComponent',
  props: ['materialData'],
  data() {
    return {
      dataRules: {
        materialName: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        num: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        unit: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        remark: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        state: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        ratio: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }]
      },
      stateOption: [
        { value: 1, label: '固体' },
        { value: 2, label: '液体' },
        { value: 3, label: '气体' }
      ]
    }
  },
  methods: {
    addMaterial() {
      this.materialData.push({ materialData: '', num: '', unit: '', remark: '', state: '', ratio: '' })
    },
    deleteMaterial(index) {
      if (this.materialData.length === 1) {
        this.materialData.splice(index, 0)
      } else {
        this.materialData.splice(index, 1)
      }
    }
  }
}
</script>

