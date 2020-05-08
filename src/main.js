import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./mockjs/mock";
import echarts from "echarts";

Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app")
