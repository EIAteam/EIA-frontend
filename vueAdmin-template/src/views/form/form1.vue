<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="项目性质">
      <el-select v-model="formInline.projectType" placeholder="请选择">
        <el-option label="新建"></el-option>
        <el-option label="搬迁"></el-option>
        <el-option label="扩建"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="项目所在地">
      <el-select v-model="formInline.region" placeholder="请选择">
        <el-option label="河南"></el-option>
        <el-option label="广东"></el-option>
        <el-option label="北京"></el-option>
        <el-option label="河北"></el-option>
        <el-option label="江苏"></el-option>
        <el-option label="浙江"></el-option>
      </el-select>
      <el-select v-model="formInline.region" placeholder="请选择">
        <el-option label="佛山"></el-option>
        <el-option label="广州"></el-option>
        <el-option label="深圳"></el-option>
        <el-option label="珠海"></el-option>
        <el-option label="东莞"></el-option>
        <el-option label="中山"></el-option>
      </el-select>
      <el-select v-model="formInline.region" placeholder="请选择">
        <el-option label="禅城"></el-option>
        <el-option label="南海"></el-option>
        <el-option label="顺德"></el-option>
      </el-select>
      <el-select v-model="formInline.region" placeholder="请选择">
        <el-option label="勒流"></el-option>
        <el-option label="大良"></el-option>
        <el-option label="容桂"></el-option>
        <el-option label="均安"></el-option>
        <el-option label="陈村"></el-option>
        <el-option label="伦教"></el-option>
        <el-option label="乐从"></el-option>
        <el-option label="龙江"></el-option>
        <el-option label="北滘"></el-option>
      </el-select>
    </el-form-item>

  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="名称缩写">
      <el-input v-model="formInline" type="text" placeholder="单位名称">

</template>



