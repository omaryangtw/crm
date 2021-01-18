<template>
  <div class="flex">
    <panel title="Cases">
      <div>
        <div
          v-for="case__ in cases"
          :key="case__.id"
          class="flex justify-between"
        >
          <router-link
            :to="{ name: 'ViewCase', params: { caseId: case__.id } }"
            >{{ case__.name }}</router-link
          >
        </div>
      </div>
    </panel>
  </div>
</template>

<script>
import CaseService from "../../services/CaseService.js";
import Panel from "../../components/Panel.vue";

export default {
  name: "Cases",
  components: { Panel },
  data() {
    return {
      cases: null,
      search: "",
    };
  },
  async mounted() {
    this.cases = (await CaseService.index()).data;
  },
  /* watch: {
    "$route.query.search": {
      immediate: true,
      async handler(value) {
        this.cases = (await CaseService.index(value)).data;
      },
    },
  }, */
};
</script>

<style></style>
