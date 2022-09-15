import TabBar from "@/components/tabbar/TabBar";
import { Lazyload } from "vant";
import api from "@/api";

export default {
  install(Vue) {
    Vue.component("TabBar", TabBar);
    Vue.use(Lazyload);

    Vue.prototype.$api = api;
  },
};
