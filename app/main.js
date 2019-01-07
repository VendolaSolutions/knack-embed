import Vue from "vue";
import App from "./App.vue";
import router from "../embed_testing_webpack/src/router";
import store from "../embed_testing_webpack/src/store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
