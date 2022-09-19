import ButtonsPage from "@/views/ButtonsPage.vue";
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
      component: ButtonsPage
    }
  ],
});

export default router;
