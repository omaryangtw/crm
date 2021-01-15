<template>
  <div class="flex">
    <panel title="Sidebar">
      <p>search</p>
      <p>name-list</p>
    </panel>
    <panel title="Client">
      <div v-for="client in clients" :key="client.id">
        {{ client.name }}
        {{ client.sex }}
        <button
          @click="
            this.$router.push({
              name: 'client',
              params: { clientId: client.id },
            })
          "
        >
          view
        </button>
      </div>
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
  methods: {
    redirect(route) {
      this.$router.push(route);
    },
  },
  async mounted() {
    // Request for clients
    this.clients = (await ClientsServices.index()).data;
  },
};
</script>

<style></style>
