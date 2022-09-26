import HomePage from "@/views/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/buttons",
      name: "buttons",
      component: () => import("../views/ButtonsPage.vue"),
    },
    {
      path: "/inputs",
      name: "inputs",
      component: () => import("../views/InputsPage.vue"),
    },
  ],
});

export default router;
