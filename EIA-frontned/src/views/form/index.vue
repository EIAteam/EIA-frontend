<template>
<div class="app-container">
<el-container style="height: 650px;">
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
<el-main>
  <router-view></router-view>
</el-main>
</el-container>
</div>
</template>

<script>
export default {
  name: 'formLayout',
  data() {
    return {
      active: 0
    }
  },
  watch: {
    '$route': function(to, from) {
      console.log('parent')
    }
  },
  methods: {
    next() {
      switch (this.active) {
        case 0:
          this.$router.push({ path: '/form/index/form2' })
          break
        case 1:
          this.$router.push({ path: '/form/index/form3' })
          break
        case 2:
          this.$router.push({ path: '/form/index/form4' })
          break
        case 3:
          this.$router.push({ path: '/form/index/form5' })
          break

        default:
          break
      }
      if (this.active++ > 4) {
        this.active = 0
        this.$router.push({ path: '/form/index/form1' })
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

