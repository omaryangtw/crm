<template>
  <div class="flex">
    <panel title="Search">
      <input
        type="text"
        name="search"
        id="search"
        v-model="search"
        placeholder="search..."
      />
    </panel>
    <panel title="Client">
      <div>
        <div
          v-for="client in clients"
          :key="client.id"
          class="flex justify-between"
        >
          <router-link
            :to="{ name: 'client', params: { clientId: client.id } }"
            >{{ client.name }}</router-link
          >
        </div>
      </div>
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
    search: _.debounce(async function(value) {
      const route = {};
      if (this.search !== "") {
        route.query = {
          search: this.search,
        };
      }
      this.$router.push(route);
      console.log(value);
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
