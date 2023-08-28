import { createRouter, createWebHistory } from "vue-router";
import Landing from "./views/Landing.vue"; // Import your components
import ProjectDisplay from "./views/Display/ProjectDisplay.vue";

const routes = [
  {
    path: "/",
    component: Landing,
  },
  {
    path: "/projects",
    component: ProjectDisplay,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
