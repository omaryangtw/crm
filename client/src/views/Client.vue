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
import Panel from "../components/Panel.vue";
export default {
  name: "client",
  components: { Panel },
};
</script>

<style></style>
