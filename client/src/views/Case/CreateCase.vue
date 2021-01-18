<template>
  <div>
    <div class="text-red-500">{{ this.error }}</div>
    <panel title="Add a new Case">
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
      error: null,
    };
  },
  methods: {
    async create() {
      try {
        if (this.case__.name === "") {
          this.error = "Name Required";
          return;
        }
        await CaseService.create(this.case__);
        this.$router.go(-1);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
