<template>
  <div>
    <panel title="family">
      <div v-for="member in client.Family" :key="member.id">
        {{ member.ClientClients.relationship }}
        {{ member.name }}
        <button @click="remove(member)">delete</button>
      </div>
    </panel>
  </div>
</template>

<script>
import Panel from "../components/Panel";
import FamilyService from "../services/FamilyService";
export default {
  name: "ViewFamily",
  components: {
    Panel,
  },
  props: {
    client: {
      type: Object,
    },
  },
  methods: {
    async remove(him) {
      try {
        await FamilyService.remove(this.client.id, him.id);
        this.$router.go(0);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
