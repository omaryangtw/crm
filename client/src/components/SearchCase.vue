<template>
  <div class="flex">
    <panel title="搜尋">
      <input
        class="mt-4"
        type="text"
        name="search"
        id="search"
        v-model="search"
        placeholder="搜尋"
      />
    </panel>
  </div>
</template>

<script>
import _ from "lodash";
import CaseService from "../services/CaseService";
import Panel from "./Panel";
export default {
  name: "SearchCase",
  components: { Panel },
  data() {
    return {
      clients: null,
      search: "",
    };
  },
  watch: {
    search: _.debounce(async function() {
      const route = {};
      if (this.search !== "") {
        route.query = {
          search: this.search,
        };
      }
      this.$router.push(route);
    }, 500),

    "$route.query.search": {
      immediate: true,
      handler(value) {
        this.search = value;
      },
    },
  },
  async mounted() {
    // Request for
    this.cases = (await CaseService.index()).data;
  },
};
</script>

<style></style>
