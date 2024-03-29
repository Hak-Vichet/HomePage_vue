import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;