<template>
  <el-collapse accordion style="width:800px; margin-left:200px">
  <el-collapse-item>
    <template slot="title">
      <a style="margin-left:300px">获取地理位置<i class="el-icon-location"></i></a>
    </template>
    <div id='container' style="width:800px;height:400px;"></div>
    <el-row>
  <el-col :span="3"><el-button @click="init" size="mini">定位</el-button></el-col>
  <el-col :span="6"><el-input id="explore-input" size="mini" placeholder="请输入地点进行搜索"></el-input></el-col>
  <el-col :span="15">
    <span v-if="info.lng==null||info.lat==null||info.place==null"><i class="el-icon-loading"></i></span>
    <span v-else><el-tag size="mini">[{{info.lng}},{{info.lat}}]</el-tag>地点:{{info.place}}</span>
  </el-col>
</el-row>
  </el-collapse-item>
</el-collapse>
</template>

<script>
import AMap from 'AMap'
import AMapUI from 'AMapUI'
let map, geolocation, marker, geocoder
export default {
  name: 'amap',
  data() {
    return {
      info: {
        lng: null,
        lat: null,
        place: null,
        province: null,
        city: null
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // 地图初始化
      map = new AMap.Map('container', {
        center: [116.397428, 39.90923],
        zoom: 16,
        resizeEnable: true
      })

      // 地图基础控件加载
      AMapUI.loadUI(['control/BasicControl'], function(BasicControl) {
        map.addControl(new BasicControl.LayerSwitcher({
          position: 'rt'
        }))
      })

      // 插件
      map.plugin(['AMap.Geolocation', 'AMap.ToolBar', 'AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Geocoder'], () => {
        // 定位插件
        geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, // 是否使用高精度定位，默认:true
          timeout: 10000, // 超过10秒后停止定位，默认：无穷大
          showCircle: false, // 是否显示精度范围
          buttonOffset: new AMap.Pixel(10, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          zoomToAccuracy: true, // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          showButton: false // 是否显示定位按钮
        })

        // 输入自动补全
        var autoOptions = {
          city: '', // 城市，默认全国
          input: 'explore-input'
        }
        var autocomplete = new AMap.Autocomplete(autoOptions)

        // POI搜索插件
        var placeSearch = new AMap.PlaceSearch({
          city: '',
          map: map
        })

        // 地理编码转换插件
        geocoder = new AMap.Geocoder({
          radius: 1000,
          extensions: 'all'
        })
        AMap.event.addListener(autocomplete, 'select', function(e) {
          // TODO 针对选中的poi实现自己的功能
          placeSearch.search(e.poi.name)
        })

        map.addControl(geolocation)
        map.addControl(new AMap.ToolBar())

        // 定位
        geolocation.getCurrentPosition()

        // 监听定位完成
        AMap.event.addListener(geolocation, 'complete', (result) => {
          this.info.lng = result.position.getLng()
          this.info.lat = result.position.getLat()
          geocoder.getAddress(result.position.lnglat, (status, result) => {
            if (status === 'complete' && result.info === 'OK') {
              this.info.place = result.regeocode.formattedAddress
              this.info.province = result.regeocode.addressComponent.province
              this.info.city = result.regeocode.addressComponent.city
            }
          })
        }) // 返回定位信息

        // 监听定位错误
        AMap.event.addListener(geolocation, 'error', (result) => {
          console.log(result)
        }) // 返回定位出错信息
      })

      // 标记点样式
      marker = new AMap.Marker({
        map: map,
        position: [0, 0],
        icon: new AMap.Icon({
          size: new AMap.Size(40, 50), // 图标大小
          image: 'http://webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png',
          imageOffset: new AMap.Pixel(0, -60)
        })
      })

      // 监听地图点击事件
      map.on('click', (e) => {
        this.info.lng = e.lnglat.getLng()
        this.info.lat = e.lnglat.getLat()
        var geocoder = new AMap.Geocoder({
          radius: 1000,
          extensions: 'all'
        })
        geocoder.getAddress(e.lnglat, (status, result) => { // 坐标->位置信息
          if (status === 'complete' && result.info === 'OK') {
            this.info.place = result.regeocode.formattedAddress
            this.info.province = result.regeocode.addressComponent.province
            this.info.city = result.regeocode.addressComponent.city
          }
        })
        marker.setPosition(e.lnglat)
      })
    }
  }
}
</script>
