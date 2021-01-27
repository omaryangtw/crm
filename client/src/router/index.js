import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Clients from "../views/Client/Clients";
import CreateClient from "../views/Client/CreateClient";
import ViewClient from "../views/Client/ViewClient";
import EditClient from "../views/Client/EditClient";
import Cases from "../views/Case/Cases";
import CreateCase from "../views/Case/CreateCase";
import ViewCase from "../views/Case/ViewCase";
import EditCase from "../views/Case/EditCase";
import store from "../store";
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
    beforeEnter(to, from, next) {
      if (store.state.isUserLoggedIn) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
  {
    path: "/clients/:clientId",
    name: "client",
    component: ViewClient,
    beforeEnter(to, from, next) {
      if (store.state.isUserLoggedIn) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
  {
    path: "/clients/:clientId/edit",
    name: "Editclient",
    component: EditClient,
    beforeEnter(to, from, next) {
      if (store.state.isUserLoggedIn) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
  {
    path: "/clients/add",
    name: "CreateClient",
    component: CreateClient,
    beforeEnter(to, from, next) {
      if (store.state.isUserLoggedIn) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
  {
    path: "/case",
    name: "Cases",
    component: Cases,
    beforeEnter(to, from, next) {
      if (store.state.isUserLoggedIn) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
  {
    path: "/case/:caseId",
    name: "ViewCase",
    component: ViewCase,
    beforeEnter(to, from, next) {
      if (store.state.isUserLoggedIn) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
  {
    path: "/case/:caseId/edit",
    name: "EditCase",
    component: EditCase,
    beforeEnter(to, from, next) {
      if (store.state.isUserLoggedIn) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
  {
    path: "/case/add",
    name: "CreateCase",
    component: CreateCase,
    beforeEnter(to, from, next) {
      if (store.state.isUserLoggedIn) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  mode: "history",
});

export default router;
