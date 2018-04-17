<template>
  <el-table :data="exhaustGasMaterials" style="width: 100% " fit highlight-current-row ref="exhaustGasMaterials" :rules="dataRules">
    <el-table-column type="index" width="50">
    </el-table-column>
    <el-table-column label="材料对应废气" width="300">
      <template slot-scope="scope">
        <el-input v-model="scope.row.gasName" size="small"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="材料名称" width="300">
      <template slot-scope="scope">
        <el-input v-model="scope.row.materialName" size="small"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="材料单位（一般为吨/年）" width="150">
      <template slot-scope="scope">
        <el-input v-model="scope.row.unit" size="small"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="材料年用量" width="300">
      <template slot-scope="scope">
        <el-input v-model="scope.row.usage" size="small"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="材料系数" width="300">
      <template slot-scope="scope">
        <el-input v-model="scope.row.ratio" size="small"></el-input>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: 'exhaustGasMaterialsComponent',
  props: ['exhaustGasMaterials'],
  data() {
    return {
      dataRules: {
        remark: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }]
      },
      remarkOption: [
        { value: 1, label: '有组织排放' },
        { value: 2, label: '无组织排放1' },
        { value: 3, label: '无组织排放2' }
      ]
    }
  },
  methods: {
  }
}
</script>