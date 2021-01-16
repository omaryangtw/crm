import api from "./api.js";

export default {
  index() {
    return api().get("clients");
  },
  create(client) {
    return api().post("clients", client);
  },
  put(client) {
    return api().put(`clients/${client.id}`, client);
  },
  get(id) {
    return api().get(`clients/${id}`);
  },
};
