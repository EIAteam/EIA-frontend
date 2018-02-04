import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'// 饿了么插件
import 'element-ui/lib/theme-chalk/index.css'// 饿了么插件
import locale from 'element-ui/lib/locale/lang/en'// 国际化

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false // 阻止VUE在生成时产生提示

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
