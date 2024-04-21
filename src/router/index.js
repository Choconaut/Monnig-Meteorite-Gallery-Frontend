import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/Login.vue';
import Search from '../views/Search.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", // "/" means default
    name: "search", 
    component: Search }, 
    
    { path: "/login", 
    name: "login", 
    component: Login },
    
    { 
      path: "/search", //optional, both / and /search will redirect to search page
      redirect: "/" }, 
  ]
});

export default router;
