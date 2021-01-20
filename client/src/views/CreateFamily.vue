<template>
  <div>
    <panel title="Link Family Member">
      <label for="relationship">relationship</label>
      <input
        v-model="relationship"
        id="relationship"
        placeholder="relationship"
      />
      <select name="name" v-model="targetId">
        <option v-for="client in clients" :key="client.id" :value="client.id">{{
          client.name
        }}</option>
      </select>
      <button @click="create">create</button>
    </panel>
  </div>
</template>

<script>
import FamilyService from "../services/FamilyService";
import ClientsService from "../services/ClientsService";
import Panel from "../components/Panel";
export default {
  name: "CreateFamily",
  components: {
    Panel,
  },
  data() {
    return {
      sourceId: null,
      targetId: null,
      relationship: null,
      clients: null,
    };
  },
  props: {
    target: {
      type: Object,
    },
  },
  methods: {
    async create() {
      try {
        if (this.relationship === "" && this.target.name === "") {
          console.log("Fields Required");
          return;
        }
        await FamilyService.create({
          sourceId: this.sourceId,
          targetId: this.targetId,
          relationship: this.relationship,
        });
        this.$router.go(0);
      } catch (err) {
        console.log(err);
      }
    },
  },
  async mounted() {
    try {
      this.sourceId = parseInt(this.$route.params.clientId);
      this.clients = (await ClientsService.index()).data;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style></style>
