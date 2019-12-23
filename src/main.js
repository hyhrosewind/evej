import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "./mockjs/mock";
import echarts from "echarts";
// import axios from "axios";

Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");

//向 axios 传递相关配置来创建请求
// axios.all([axios({
//   url: "http://123.207.32.32:8000/home/multidata"
// }),axios({
//   url: "http://123.207.32.32:8000/home/data",
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })]).then(res => {
//   console.log(res);
// });
