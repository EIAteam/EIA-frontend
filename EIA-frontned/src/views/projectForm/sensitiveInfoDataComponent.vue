<template>
<div>
  <el-table :data="sensitiveInfoData.sensitiveInfoWaterData" style="width: 100%"  fit highlight-current-row border ref="sensitiveInfoData.sensitiveInfoWaterData" :rules="sensitiveInfoWaterDataRules">
    <el-table-column label="环境要素" width="100">
      <template slot-scope="scope">
        {{scope.row.environmentalElements}}
      </template>
    </el-table-column>
    <el-table-column label="环境敏感点" width="300">
      <template slot-scope="scope">
        <el-input v-model="scope.row.environmentalSensitivePoint" placeholder="请填入附近的河涌名称" ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="方位" width="150">
      <template slot-scope="scope">
        <el-input v-model="scope.row.orientation"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="距离（m）" width="150">
      <template slot-scope="scope">
        <el-input v-model="scope.row.distance"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="环境保护目标" width="418">
      <template slot-scope="scope">
        {{scope.row.environmentalObjective}}
      </template>
    </el-table-column>
    <el-table-column label="操作" width="148">
      <template slot-scope="scope">
        <el-button  plain size="small" type="primary" @click="addRowWaterEnvironment" >增加</el-button>
        <el-button plain type="danger" size="small" @click="deleteWaterEnvironment(scope.$index)" >删除</el-button>
      </template>
    </el-table-column>
  </el-table>

    <div class="divider">———————————————————————————————————————————————————————————————————————————————</div>
  <el-table :data="sensitiveInfoData.sensitiveInfoAtmosphereData" style="width: 100%"  fit highlight-current-row border ref="sensitiveInfoData.sensitiveInfoAtmosphereData">
    <el-table-column label="环境要素" width="180">
      <template slot-scope="scope">
        {{scope.row.environmentalElements}}
      </template>
    </el-table-column>
    <el-table-column label="方位" width="200">
      <template slot-scope="scope">
        {{scope.row.orientation}}
      </template>
    </el-table-column>
    <el-table-column label="距离（m）" width="200">
      <template slot-scope="scope">
        {{scope.row.distance}}
      </template>
    </el-table-column>
    <el-table-column label="环境保护目标" width="380">
      <template slot-scope="scope">
        {{scope.row.environmentalObjective}}
      </template>
    </el-table-column>
  </el-table>

    <div class="divider">———————————————————————————————————————————————————————————————————————————————</div>
  <el-table :data="sensitiveInfoData.sensitiveInfoVoiceData" style="width: 100%"  fit highlight-current-row border ref="sensitiveInfoData.sensitiveInfoVoiceData">
    <el-table-column label="环境要素" width="180">
      <template slot-scope="scope">
        {{scope.row.environmentalElements}}
      </template>
    </el-table-column>
    <el-table-column label="方位" width="200">
      <template slot-scope="scope">
        {{scope.row.orientation}}
      </template>
    </el-table-column>
    <el-table-column label="距离（m）" width="200">
      <template slot-scope="scope">
        {{scope.row.distance}}
      </template>
    </el-table-column>
    <el-table-column label="环境保护目标" width="380">
      <template slot-scope="scope">
        {{scope.row.environmentalObjective}}
      </template>
    </el-table-column>
  </el-table>

    <div class="divider">———————————————————————————————————————————————————————————————————————————————</div>
  <el-table :data="sensitiveInfoData.sensitiveInfoHouseData" style="width: 100%"  fit highlight-current-row border ref="sensitiveInfoData.sensitiveInfoHouseData" :rules="sensitiveInfoHouseDataRules">
    <el-table-column label="环境要素" width="380">
      <template slot-scope="scope">
        <el-input v-model="scope.row.environmentalElements" placeholder="请填入民居名称，500米范围内"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="方位" width="200">
      <template slot-scope="scope">
        <el-input v-model="scope.row.orientation"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="距离（m）" width="200">
      <template slot-scope="scope">
        <el-input v-model="scope.row.distance"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="环境保护目标" width="330">
      <template slot-scope="scope">
        {{scope.row.environmentalObjective}}
      </template>
    </el-table-column>
    <el-table-column label="操作" width="148">
      <template slot-scope="scope">
        <el-button  plain size="small" type="primary" @click="addRowHouseName" >增加</el-button>
        <el-button plain type="danger" size="small" @click="deleteHouseName(scope.$index)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

    <div class="divider">———————————————————————————————————————————————————————————————————————————————</div>
  <el-table :data="sensitiveInfoData.sensitiveInfoReserveData" style="width: 100%"  fit highlight-current-row border ref="sensitiveInfoData.sensitiveInfoReserveData" :rules="sensitiveInfoReserveDataRules">
    <el-table-column label="环境要素" width="380">
      <template slot-scope="scope">
        <el-input v-model="scope.row.environmentalElements" placeholder="请填入水源保护区名称，500米范围内"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="方位" width="200">
      <template slot-scope="scope">
        <el-input v-model="scope.row.orientation"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="距离（m）" width="200">
      <template slot-scope="scope">
        <el-input v-model="scope.row.distance"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="环境保护目标" width="330">
      <template slot-scope="scope">
        <el-input v-model="scope.row.environmentalObjective" placeholder="请填入水源保护区保护级别"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="148">
      <template slot-scope="scope">
        <el-button  plain size="small" type="primary" @click="addRowWaterReserve" >增加</el-button>
        <el-button plain type="danger" size="small" @click="deleteWaterReserve(scope.$index)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  name: 'sensitiveInfoDataComponent',
  props: ['sensitiveInfoData'],
  data() {
    return {
      sensitiveInfoWaterDataRules: {
        environmentalElements: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        orientation: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        distance: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        environmentalSensitivePoint: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        environmentalObjective: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }]
      },
      sensitiveInfoHouseDataRules: {
        environmentalElements: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        orientation: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        distance: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }]
      },
      sensitiveInfoReserveDataRules: {
        environmentalElements: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        orientation: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        distance: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }],
        environmentalObjective: [{ required: false, whitespace: true, trigger: 'blur', type: 'string', message: '请输入正确的格式' }]
      }
    }
  },
  methods: {
    addRowHouseName() {
      this.sensitiveInfoData.sensitiveInfoHouseData.push({
        environmentalElements: '', orientation: '', distance: '', environmentalObjective: this.sensitiveInfoData.sensitiveInfoHouseData[0].environmentalObjective })
    },
    addRowWaterReserve() {
      this.sensitiveInfoData.sensitiveInfoReserveData.push({
        environmentalElements: '', orientation: '', distance: '', environmentalObjective: '' })
    },
    addRowWaterEnvironment() {
      this.sensitiveInfoData.sensitiveInfoWaterData.push({
        environmentalElements: '水环境', environmentalSensitivePoint: '', orientation: '', distance: '', environmentalObjective: this.sensitiveInfoData.sensitiveInfoWaterData[0].environmentalObjective })
    },
    deleteWaterEnvironment(index) {
      if (this.sensitiveInfoData.sensitiveInfoWaterData.length === 1) {
        this.sensitiveInfoData.sensitiveInfoWaterData.splice(index, 0)
      } else {
        this.sensitiveInfoData.sensitiveInfoWaterData.splice(index, 1)
      }
    },
    deleteHouseName(index) {
      if (this.sensitiveInfoData.sensitiveInfoHouseData.length === 1) {
        this.sensitiveInfoData.sensitiveInfoHouseData.splice(index, 0)
      } else {
        this.sensitiveInfoData.sensitiveInfoHouseData.splice(index, 1)
      }
    },
    deleteWaterReserve(index) {
      if (this.sensitiveInfoData.sensitiveInfoReserveData.length === 1) {
        this.sensitiveInfoData.sensitiveInfoReserveData.splice(index, 0)
      } else {
        this.sensitiveInfoData.sensitiveInfoReserveData.splice(index, 1)
      }
    }
  }
}

</script>

<style>
.divider{
    padding: 0;
    margin: 20px 0;
    line-height: 1px;
    color:#ddd;
}
</style>
