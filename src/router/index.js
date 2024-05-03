import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Search from "../views/Search.vue";
import MainPage from "../views/MainPage.vue";
import setupGuard from "./guard";
import useUserStore from "../store/userStore";
import utils from '../utils'

const router = createRouter({
  history: createWebHistory(), //provide history implementation to use
  routes: [
    {
      path: "/", // "/" means default
      name: "home",
      component: MainPage,
    },

    {
      path: "/search",
      name: "search",
      component: Search,
    },

    {
      path: "/login",
      name: "login",
      component: Login,
    },

    {
      path: "/mainPage", //optional, both / and /mainPage will redirect to main page
      redirect: "/",
    },
  ],
});

export async function setupRouter(app) {
  if (utils.cacheUtils.get("login_token")?.token) {
    // get user info and save it to Pinia, then we can have access to user's permission list in different components
    const userStore = useUserStore();
    await userStore.getUserInfo();
    autoloadDynamicRoutes(router); // add more route records to the router, e.g., /users and /orders
  }

  setupGuard(router);
  app.use(router);
}

export default router;
