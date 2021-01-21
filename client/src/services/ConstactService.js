import api from "./api.js";

export default {
  create(record) {
    return api().post("contact", record);
  },
  remove(clientId, recordId) {
    console.log("serive:", clientId, ":", recordId);
    return api().delete(`contact/${clientId}/${recordId}`);
  },
};
