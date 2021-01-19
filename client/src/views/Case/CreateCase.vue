<template>
  <div>
    <div class="text-red-500">{{ this.error }}</div>
    <panel title="Add a new Case">
      <div class="flex">
        <select name="name" v-model="clientId">
          <option
            v-for="client in clients"
            :key="client.id"
            :value="client.id"
            >{{ client.name }}</option
          >
        </select>
        <span class="mx-3"> / </span>
        <div>{{ date }}</div>
      </div>

      <div>selected: {{ clientId }}</div>
      <div></div>
      <div>{{ clients[clientId - 1] }}</div>
      <input required type="text" placeholder="name" v-model="case__.name" />
      <input
        type="text"
        placeholder="nameAlt"
        v-model="case__.personInCharge"
      />
      <input type="text" placeholder="typesMajor" v-model="case__.typesMajor" />
      <input type="text" placeholder="typesMinor" v-model="case__.typesMinor" />
      <input type="text" placeholder="note" v-model="case__.note" />
      <button @click="create">Create Case</button>
    </panel>
  </div>
</template>

<script>
import CaseService from "../../services/CaseService";
import ClientService from "../../services/ClientsService";
import Panel from "../../components/Panel";
export default {
  name: "CreateCase",
  components: {
    Panel,
  },
  data() {
    return {
      case__: {
        name: "",
        personInCharge: null,
        typesMajor: null,
        typesMinor: null,
        note: null,
      },
      clients: [],
      client: null,
      error: null,
      clientId: null,
      date: new Date().toISOString().slice(0, 10),
    };
  },
  methods: {
    async create() {
      try {
        if (this.case__.name === "") {
          this.error = "Name Required";
          return;
        }
        await CaseService.create({
          case_: this.case__,
          clientId: this.clientId,
        });
        this.$router.go(-1);
      } catch (err) {
        console.log(err);
      }
    },
  },
  watch: {
    clientId: function() {
      this.case__.name = this.clients[this.clientId - 1].name + "/" + this.date;
    },
  },
  async mounted() {
    try {
      this.clients = (await ClientService.index()).data;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style></style>
