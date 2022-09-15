import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter); //注册

// 像这种使用 ()=>import() 导入语法声明的组件，叫做Vue异步组件；
// 当webpack打包时，只要遇到 ()=>import() 动态导入语法，就会把导入的模块独立成一个新的JS文件。
const HomeList = () => import("./pages/home/HomeList.vue");
const CateList = () => import("./pages/cate/CateList.vue");
const CartList = () => import("./pages/cart/CartList.vue");
const UserProfile = () => import("./pages/user/UserProfile.vue");
const GoodInfo = () => import("./pages/home/GoodInfo.vue");
const UserLogin = () => import("./pages/user/UserLogin.vue");

export const tabRouters = [
  {
    path: "/",
    component: HomeList,
    mate: { id: 1, text: "首页", icon: "wap-home-o", name: "home" },
  },
  {
    path: "/cate",
    component: CateList,
    mate: { id: 1, text: "分类", icon: "apps-o", name: "cate" },
  },
  {
    path: "/cart",
    component: CartList,
    mate: { id: 1, text: "购物车", icon: "cart", name: "cart" },
  },
  {
    path: "/user",
    component: UserProfile,
    mate: { id: 1, text: "我的", icon: "manager-o", name: "user" },
  },
];


//创建路由实例
const router = new VueRouter({
  mode: "hash",
  routes: [
    ...tabRouters,
    {
      path: "/user/login",
      component: UserLogin,
      mate: { id: 1, text: "我的", icon: "manager-o", name: "user" },
    },
    { path: "/good/info/:id", name: "info", component: GoodInfo, props: true },
  ],
});


export default router;
