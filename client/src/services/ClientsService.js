import api from "./api.js";

export default {
  index(search) {
    return api().get("clients", {
      params: {
        search: search,
      },
    });
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
  indexAll() {
    return api().get("clients/all");
  },
};
