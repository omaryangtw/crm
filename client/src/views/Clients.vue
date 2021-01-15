<template>
  <div class="flex">
    <panel title="Sidebar">
      <p>search</p>
      <p>name-list</p>
    </panel>
    <panel title="Client">
      <p>name</p>
      <p>sex</p>
      <p>birthday</p>
    </panel>
  </div>
</template>

<script>
import ClientsServices from "../services/ClientsService.js";
import Panel from "../components/Panel.vue";
export default {
  name: "clients",
  components: { Panel },
  data() {
    return {
      clients: null,
    };
  },
  async mounted() {
    // Request for clients
    this.clients = await ClientsServices.index();
  },
};
</script>

<style></style>
