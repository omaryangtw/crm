<template>
  <div>
    <h1>
      Register
    </h1>
    <form action="">
      <input type="email" name="email" v-model="email" placeholder="email" />
      <input
        type="password"
        name="password"
        v-model="password"
        placeholder="password"
      />
      <button @click="register">Register</button>
    </form>
  </div>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService/AuthenticationServices";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      await AuthenticationService.register({
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style></style>
