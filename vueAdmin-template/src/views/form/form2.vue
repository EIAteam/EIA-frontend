<template>
<div class="app-container">
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
  export default {
    data() {
      return {
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
    methods: {
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
      }
    }
  }
</script>