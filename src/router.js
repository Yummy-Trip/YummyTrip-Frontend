import { createWebHistory, createRouter } from "vue-router";
import MainPage from "./components/MainPage.vue";
import LoginPage from "./components/LoginPage"
import JoinPage from "./components/JoinPage"

const routes = [
  {
    path: "/",
    component: MainPage
  },
  {
    path: "/login",
    component: LoginPage
  },
  {
    path: "/join",
    component: JoinPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;