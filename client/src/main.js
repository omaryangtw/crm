import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { sync } from "vuex-router-sync";
import store from "./store";
import "./assets/css/tailwind.css";

sync(store, router);

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
