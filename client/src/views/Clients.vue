<template>
  <div class="flex">
    <Search />

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
import ClientsServices from "../services/ClientsService.js";
import Panel from "../components/Panel.vue";
import Search from "./Search";
export default {
  name: "clients",
  components: { Panel, Search },
  data() {
    return {
      clients: null,
      search: "",
    };
  },
  watch: {
    "$route.query.search": {
      immediate: true,
      async handler(value) {
        this.clients = (await ClientsServices.index(value)).data;
      },
    },
  },
};
</script>

<style></style>
