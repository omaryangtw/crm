<template>
  <div class="flex">
    <panel title="搜尋">
      <p class="text-gray-500">姓名、電話、地址...</p>
      <input
        class="mt-4"
        type="text"
        name="search"
        id="search"
        v-model="search"
        placeholder="搜尋"
      />
    </panel>
  </div>
</template>

<script>
import _ from "lodash";

import ClientsServices from "../services/ClientsService.js";
import Panel from "../components/Panel.vue";
export default {
  name: "Search",
  components: { Panel },
  data() {
    return {
      clients: null,
      search: "",
    };
  },
  watch: {
    search: _.debounce(async function () {
      const route = {};
      if (this.search !== "") {
        route.query = {
          search: this.search,
        };
      }
      this.$router.push(route);
    }, 500),

    "$route.query.search": {
      immediate: true,
      handler(value) {
        this.search = value;
      },
    },
  },
  async mounted() {
    // Request for clients
    this.clients = (await ClientsServices.index()).data;
  },
};
</script>

<style></style>
