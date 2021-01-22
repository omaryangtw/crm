<template>
  <div>
    <Header />
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
import Header from "./views/Header";
export default {
  components: {
    Header,
  },
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>
<style></style>
