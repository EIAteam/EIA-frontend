<template>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}" >
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <app-main></app-main>
  <circle-menu type='top' :number='2' circle btn style="right:30px;bottom:30px;position:fixed">
    <svg-icon slot="item_1" icon-class="project"/>
    <svg-icon slot="item_2" icon-class="people" />
  </circle-menu>
    </div>
  </div>

</template>

<script>
import { Navbar, Sidebar, AppMain } from '@/views/layout/components'
import CircleMenu from 'vue-circle-menu'
export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    CircleMenu
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
