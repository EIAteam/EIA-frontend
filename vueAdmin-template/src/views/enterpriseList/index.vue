<template>
  <div class="app-container">
     <el-card class="box-card">
       <div slot="header" class="clearfix">
         <span align="center">职员表</span>
         <el-card-column
         prop="name"
         label="姓名"
         width="180">
         </el-card-column>
         <el-card-column
         prop="position"
         label="职位">
         <el-select class="form-control">
           <el-option>高级管理者</el-option>
           <el-option>管理者</el-option>
           <el-option>编写员</el-option>
           <el-option>中介</el-option>
           <el-option>甲方</el-option>
           </el-select>
         </el-card-column>
         </div>
    </el-card>
  </div>
</template>



