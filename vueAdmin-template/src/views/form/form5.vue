<template>
  <div class="app-container">
    <h3 class="title">{{ msg }}</h3>
    <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'" :plugin="plugin" :center="center"></el-amap>
    </div>
    <div class="toolbar">
        <span v-if="loaded">
          location: lng = {{ lng }} lat = {{ lat }}
        </span>
        <span v-else>正在定位</span>
      </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      msg: 'vue-amap向你问好！',
      center: [121.59996, 31.197646],
      lng: 0,
      lat: 0,
      loaded: false,
      plugin: [
        {
          pName: 'ToolBar',
          events: {
            init(instance) {
              console.log(instance)
            }
          }
        },
        { pName: 'Geolocation',
          timeout: 10000,
          events: {
            init(o) {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  this.lng = result.position.lng
                  this.lat = result.position.lat
                  this.center = [this.lng, this.lat]
                  this.loaded = true
                  this.$nextTick()
                }
              })
            }
          }}
      ]
    }
  }
}
</script>

<style>
.amap-wrapper {
  width: 500px;
  height: 500px;
}
</style>