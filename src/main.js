import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Vant from "vant";
import "vant/lib/index.css"; // 样式文件

Vue.config.productionTip = false;
Vue.use(Vant);
// 注册一下我们自己的插件
import Plugin from "@/plugins/index";
Vue.use(Plugin);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
