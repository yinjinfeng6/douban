import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
if (process.env.NODE_ENV === "development") {
  require("./mock/index.js");
}
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
