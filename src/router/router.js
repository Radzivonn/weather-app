import Main from "@/pages/Main";
import SearchPage from "@/pages/SearchPage";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Main,
  },

  {
    path: "/searchPage",
    component: SearchPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
