<template>
  <el-table :data="secondLevelData" style="width: 100% " fit highlight-current-row ref="secondLevelData" :rules="dataRules">
    <el-table-column type="index" width="50">
    </el-table-column>

    <el-table-column label="废气名称" width="300" >
      <template slot-scope="scope">
        <el-input v-model="scope.row.gasName" size="small" v-bind:readonly="true"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="废气标注" width="180">
      <template slot-scope="scope">
        <el-select v-model="scope.row.remark" placeholder="请选择">
          <el-option v-for="item in remarkOption" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </template>
    </el-table-column>
    <el-table-column label="材料" width="200" >
      <template slot-scope="scope">
        <el-input v-model="scope.row.material" size="small" v-bind:readonly="true"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="用量" width="150" >
      <template slot-scope="scope">
        <el-input v-model="scope.row.usage" size="small" v-bind:readonly="true"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="系数" width="150" >
      <template slot-scope="scope">
        <el-input v-model="scope.row.ratio" size="small" v-bind:readonly="true"></el-input>
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