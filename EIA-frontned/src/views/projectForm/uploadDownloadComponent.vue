<template>
  <el-table :data="uploadDownloadComponent" style="width: 100% " fit highlight-current-row ref="secondLevelData" :rules="dataRules">
    <el-table-column type="index" width="50">
    </el-table-column>

    <el-table-column label="文件" width="180">
      <template slot-scope="scope">
        
      </template>
    </el-table-column>
    <el-table-column label="操作" width="180">
      <template slot-scope="scope">
        <el-select v-model="scope.row.operationOption" placeholder="请选择">
          <el-option v-for="item in operationOption" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'uploadDownloadComponent',
  props: ['uploadDownload'],
  data() {
    return {
      fileOption: [
        { value: 1, label: 'Word初稿' },
        { value: 2, label: 'Excel基础信息' },
        { value: 3, label: 'Excel生产信息' },
        { value: 4, label: 'Word终稿' }
      ],
      operationOption: [
        { value: 1, label: '上传' },
        { value: 2, label: '下载' }
      ]
    }
  },
  methods: {
  }
}
</script>