import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/help-the-geek",
    name: "HelpTheGeek",
    component: () => import("../views/HelpTheGeek.vue"),
  },
  {
    path: "/happiness",
    name: "Happiness",
    component: () => import("../views/Happiness.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
