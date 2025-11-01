import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import FirstComponent from "./components/FirstComponent.vue";
import SecondComponent from "./components/SecondComponent.vue";
//import ThirdComponent from "./components/ThirdComponent.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: HomeComponent,
  },
  {
    name: "First",
    path: "/1",
    component: FirstComponent,
  },
  {
    name: "2nd",
    path: "/second",
    component: SecondComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
