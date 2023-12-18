import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import AddChannelView from "../views/AddChannelView.vue";
import JoinChannelView from "../views/JoinChannelView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/addchannel",
      name: "addchannel",
      component: AddChannelView,
    },
    {
      path: "/channel",
      name: "channel",
      component: JoinChannelView,
    },
  ],
});

export default router;
