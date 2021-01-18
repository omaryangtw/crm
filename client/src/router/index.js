import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Clients from "../views/Clients";
import CreateClient from "../views/CreateClient";
import ViewClient from "../views/ViewClient";
import EditClient from "../views/EditClient";
import Cases from "../views/Case/Cases";
import CreateCase from "../views/Case/CreateCase";
import ViewCase from "../views/Case/ViewCase";
import EditCase from "../views/Case/EditCase";
import Search from "../views/Search";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/clients",
    name: "Clients",
    component: Clients,
  },
  {
    path: "/clients/:clientId",
    name: "client",
    component: ViewClient,
  },
  {
    path: "/clients/:clientId/edit",
    name: "Editclient",
    component: EditClient,
  },
  {
    path: "/clients/add",
    name: "CreateClient",
    component: CreateClient,
  },
  {
    path: "/case",
    name: "Cases",
    component: Cases,
  },
  {
    path: "/case/:caseId",
    name: "ViewCase",
    component: ViewCase,
  },
  {
    path: "/case/:caseId/edit",
    name: "EditCase",
    component: EditCase,
  },
  {
    path: "/case/add",
    name: "CreateCase",
    component: CreateCase,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  mode: "history",
});

export default router;
