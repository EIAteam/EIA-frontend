<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">工程组成
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column label="项目"></el-table-column>
          <el-table-column label="内容"></el-table-column>
          <el-table-column label="用途"></el-table-column>
        </el-table>

      </el-menu-item>
      <el-menu-item index="2">敏感点信息</el-menu-item>
      <el-menu-item index="3">废气排放标准表
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column label="污染物"></el-table-column>
          <el-table-column label="最高允许排放浓度（mg/m³）"></el-table-column>
          <el-table-column label="最高允许排放速率（kg/h）"></el-table-column>
          <el-table-column label="无组织排放监控点浓度限值（mg/m³）"></el-table-column>
          <el-table-column label="标准"></el-table-column>
      </el-menu-item>

    </el-menu>
  </div>
</template>

