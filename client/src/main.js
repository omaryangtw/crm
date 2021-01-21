import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { sync } from "vuex-router-sync";
import store from "./store";
import "./assets/css/tailwind.css";
import moment from "moment";
sync(store, router);

const app = createApp(App);

app.config.globalProperties.$filters = {
  dateFormate(date) {
    const formatString = "YYYY-MM-DD";
    return moment(date).format(formatString);
  },
};
app
  .use(store)
  .use(router)
  .mount("#app");
