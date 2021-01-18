<template>
  <div>
    <button @click="edit">edit</button>
    <panel title="View case">
      <div>
        {{ case__.name }}
        {{ case__.status }}
        {{ case__.personInCharge }}
        {{ case__.typesMajor }}
        {{ case__.typesMinor }}
        {{ case__.note }}
      </div>
    </panel>
  </div>
</template>

<script>
import CaseService from "../../services/CaseService";
import Panel from "../../components/Panel";
export default {
  name: "ViewCase",
  components: {
    Panel,
  },
  data() {
    return {
      caseId: null,
      case__: {
        id: "",
      },
    };
  },
  methods: {
    edit() {
      this.$router.push(`/case/${this.caseId}/edit`);
    },
  },
  async mounted() {
    this.caseId = this.$store.state.route.params.caseId;
    this.case__ = (await CaseService.get(this.caseId)).data;
  },
};
</script>

<style></style>
