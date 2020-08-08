import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Home from "@/views/Home.vue";
import HelpTheGeek from "@/views/HelpTheGeek.vue";
import Happiness from "@/views/Happiness.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/help-the-geek",
    name: "HelpTheGeek",
    component: HelpTheGeek,
  },
  {
    path: "/happiness",
    name: "Happiness",
    component: Happiness,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
