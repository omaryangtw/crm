<template>
  <div>
    <div class="flex justify-between">
      <div class="flex justify-around">
        <router-link :to="{ name: 'Home' }">Home</router-link>

        <router-link :to="{ name: 'About' }">About</router-link>
      </div>
      <div class="flex justify-around">
        <router-link :to="{ name: 'Cases' }">Case</router-link>
        <router-link :to="{ name: 'CreateCase' }">CreateCase</router-link>
      </div>
      <div class="flex justify-around">
        <router-link :to="{ name: 'Clients' }">Clients</router-link>
        <router-link :to="{ name: 'CreateClient' }">CreateClient</router-link>
      </div>
      <div class="flex justify-around">
        <router-link
          v-if="this.$store.state.isUserLoggedIn === false"
          :to="{ name: 'Register' }"
          >Register</router-link
        >
        <router-link
          v-if="this.$store.state.isUserLoggedIn === false"
          :to="{ name: 'Login' }"
          >Login</router-link
        >
        <button
          @click="logout"
          v-if="this.$store.state.isUserLoggedIn === true"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Header",
  methods: {
    ...mapActions(["setToken", "setUser"]),
    logout() {
      this.setToken(null);
      this.setUser(null);
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
