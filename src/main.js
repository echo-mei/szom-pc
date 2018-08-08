import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import "./mock";
// 实际打包时应该不引入mock

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
