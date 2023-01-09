import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);
import Layout from "@/layout/index.vue";

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/home",
        component: () => import("@/views/home/home.vue"),
        meta: { title: "首页", isShow: true },
      },
      {
        path: "/about",
        component: () => import("@/views/about/about.vue"),
        meta: { title: "关于我们", isShow: true },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login.vue"),
    meta: { title: "登录" },
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/error/404.vue"),
    meta: { title: "404" },
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
