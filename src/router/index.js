import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/AxiosGet",
    name: "AxiosGet",
    component: () => import("@/views/AxiosGet.vue"),
  },
  {
    path: "/AxiosPost",
    name: "AxiosPost",
    component: () => import("@/views/AxiosPost.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
