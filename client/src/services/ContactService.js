import api from "./api.js";

export default {
  create(record) {
    return api().post("contact", record);
  },
  remove(clientId, recordId) {
    console.log("serive:", clientId, ":", recordId);
    return api().delete(`contact/${clientId}/${recordId}`);
  },
  recent() {
    return api().get("/contact/recent");
  },
  sinceThisWeek() {
    return api().get("/contact/since-this-week");
  },
  index() {
    return api().get("/contact/all");
  },
};
