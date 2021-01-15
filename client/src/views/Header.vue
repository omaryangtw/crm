<template>
  <div>
    <div class="flex justify-between">
      <div>
        <button @click="redirect('/')">Home</button>
        <button @click="redirect('/about')">About</button>
      </div>
      <div>
        <button @click="redirect('/clients')">
          Clients
        </button>
        <button @click="redirect('/clients/add')">
          Create Client
        </button>
        <button
          v-if="this.$store.state.isUserLoggedIn === false"
          @click="redirect('/register')"
        >
          Register
        </button>
        <button
          @click="redirect('/login')"
          v-if="this.$store.state.isUserLoggedIn === false"
        >
          Login
        </button>
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
    redirect(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style></style>
