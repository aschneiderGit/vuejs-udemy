import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import FirstComponent from "./components/FirstComponent.vue";
import SecondComponent from "./components/SecondComponent.vue";
import NotFound from "./components/NotFound.vue";
import ApiCall from "./components/ApiCall.vue";
//import ThirdComponent from "./components/ThirdComponent.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: HomeComponent,
  },
  {
    name: "First",
    path: "/1/:number?",
    component: FirstComponent,
  },
  {
    name: "2nd",
    path: "/second",
    component: SecondComponent,
  },
  {
    name: "ApiCall",
    path: "/api/:pageNumber",
    component: ApiCall,
  },
  {
    name: "404",
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
