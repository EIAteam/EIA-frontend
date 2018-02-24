<template>
<div class="app-container">

<el-container style="height: 150px;">
<el-header style="margin-bottom:50px;" >
  <el-steps :active="active" finish-status="success" align-center>
      <el-step title="基础信息"><router-link to="form2">   </router-link></el-step>
      <el-step title="产品表/材料表/设备表"></el-step>
      <el-step title="地理信息"></el-step>
      <el-step title="工程组成/敏感点信息/废气排放标准"></el-step>
      <el-step title="基础信息附图"></el-step>
  </el-steps>
  <el-button-group style="margin-top:10px;margin-left:550px;width:300px;">
    <el-button type="primary" icon="el-icon-arrow-left"  @click="previous">上一页</el-button>
    <el-button type="primary"  @click="next">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
  </el-button-group>
</el-header>
</el-container>

  <el-tabs v-model="activeName">
    <el-tab-pane label="产品表" name="first">
        <!-- 产品表 -->
  <h2 style="margin-left:400px" >产品表</h2>
  <el-table :data="productsData" style="width: 100% " fit highlight-current-row>
    <el-table-column type="index" width="50">
    </el-table-column>

    <el-table-column label="产品名称" width="200">
      <template slot-scope="scope">
        <el-input v-model="scope.row.productName" size="small"></el-input>
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
        <el-button plain type="danger" size="small" @click="deleteProduct(scope.$index)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-button  style="margin-top:10px;margin-left:350px;width:200px; " type="primary" @click="addProduct" >增加行</el-button>
    <!-- ./产品表 -->
    </el-tab-pane>
    <el-tab-pane label="材料表" name="second">
         <!-- 材料表 -->
  <h2 style="margin-left:400px">材料表</h2>
  <el-table :data="materialData" style="width: 100%"  fit highlight-current-row>
    <el-table-column type="index" width="50">
    </el-table-column>

    <el-table-column label="材料名称" width="180">
      <template slot-scope="scope">
        <el-input v-model="scope.row.materialName" size="small"></el-input>
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
    <el-table-column label="备注" width="180">
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
        <el-button plain type="danger" size="small" @click="deleteMaterial(scope.$index)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-button  style="margin-top:10px;margin-left:350px;width:200px; " type="primary" @click="addMaterial" >增加行</el-button>
  <!-- ./材料表 -->

    </el-tab-pane>
    <el-tab-pane label="设备表" name="third">
      <!-- 设备表 -->
  <h2 style="margin-left:400px">设备表</h2>
  <el-table :data="equipmentData" style="width: 100%"  fit highlight-current-row>
    <el-table-column type="index" width="50">
    </el-table-column>

    <el-table-column label="产品名称" width="200">
      <template slot-scope="scope">
        <el-input v-model="scope.row.equipmentName" size="small"></el-input>
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
        <el-button plain type="danger" size="small" @click="deleteEquipment(scope.$index)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-button  style="margin-top:10px;margin-left:350px;width:200px; " type="primary" @click="addEquipment" >增加行</el-button>
  <!-- ./设备表 -->
    </el-tab-pane>
  </el-tabs>
  <el-tooltip class="item" effect="dark" content="三表一键提交" placement="right">
    <el-button  style="margin-top:10px" type="success" @click="putThreeSheet" >提交修改</el-button>
  </el-tooltip>

</div>
</template>

<script>
import { getFormInfo } from '@/api/project'
import { putFormInfo } from '@/api/project'

export default {
  data() {
    return {
      active: 1,
      activeName: 'first',
      stateOption: [
        { value: 1, label: '固体' },
        { value: 2, label: '液体' },
        { value: 3, label: '气体' }
      ],
      productsData: [
        {
          productName: '',
          num: '',
          unit: '',
          remark: ''
        },
        {
          productName: '',
          num: '',
          unit: '',
          remark: ''
        }
      ],
      equipmentData: [
        {
          equipmentName: '',
          num: '',
          unit: '',
          remark: ''
        },
        {
          productName: '',
          num: '',
          unit: '',
          remark: ''
        }
      ],
      materialData: [
        {
          materialName: '',
          num: '',
          unit: '',
          remark: '',
          state: '',
          ratio: ''
        },
        {
          materialName: '',
          num: '',
          unit: '',
          remark: '',
          state: '',
          ratio: ''
        }
      ]
    }
  },
  /*  created() {
    this.getThreeFormInfo()
  },*/

  methods: {
    getThreeFormInfo() {
      return new Promise((resolve, reject) => {
        getFormInfo().then(response => {
          this.productsData.productName = response.productsData.productName
          this.productsData.num = response.productsData.num
          this.productsData.unit = response.productsData.unit
          this.productsData.remark = response.productsData.remark
          this.equipmentData.equipmentName = response.equipmentData.equipmentName
          this.equipmentData.num = response.equipmentData.num
          this.equipmentData.unit = response.equipmentData.unit
          this.equipmentData.remark = response.equipmentData.remark
          this.materialData.materialName = response.materialData.materialName
          this.materialData.num = response.materialData.num
          this.materialData.unit = response.materialData.unit
          this.materialData.remark = response.materialData.remark
          this.materialData.state = response.materialData.state
          this.materialData.ratio = response.materialData.ratio
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    addProduct() {
      this.productsData.push({ productName: '', num: '', unit: '', remark: '' })
    },
    addMaterial() {
      this.materialData.push({ productName: '', num: '', unit: '', remark: '' })
    },
    addEquipment() {
      this.equipmentData.push({ productName: '', num: '', unit: '', remark: '' })
    },
    deleteProduct(index) {
      this.productsData.splice(index, 1)
    },
    deleteMaterial(index) {
      this.materialData.splice(index, 1)
    },
    deleteEquipment(index) {
      this.equipmentData.splice(index, 1)
    },
    putThreeSheet() {
      this.$message({
        message: '修改成功',
        type: 'success'
      })
      putFormInfo(this.productsData, this.equipmentData, this.materialData).then(response => {})
      this.loading = false
    },
    next() {
      switch (this.active) {
        case 0:
          this.$router.push({ path: '/form/form2' })
          break
        case 1:
          this.$router.push({ path: '/form/form3' })
          break
        case 2:
          this.$router.push({ path: '/form/form4' })
          break
        case 3:
          this.$router.push({ path: '/form/form5' })
          break

        default:
          break
      }
      if (this.active++ > 4) {
        this.active = 0
        this.$router.push({ path: '/form/form1' })
      }
    },
    previous() {
      if (this.active > 0) {
        this.active--
        this.$router.go(-1)
      }
    }
  }
}
</script>
