import api from "./api.js";

export default {
  index() {
    return api().get("clients");
  },
};
