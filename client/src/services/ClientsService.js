import api from "./api.js";

export default {
  index() {
    return api().get("clients");
  },
  create(client) {
    return api().post("clients", client);
  },
  display(id) {
    return api().get(`clients/${id}`);
  },
};
