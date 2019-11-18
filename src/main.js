import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import echarts from 'echarts'
import './mockjs/mock'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
