<template>
  <div>
    <div
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col lg:w-6/12 lg:m-auto"
    >
      <div class="mb-4">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="username"
        >
          E-mail
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="username"
          type="email"
          placeholder="E-mail"
          v-model="email"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-grey-darker mb-3"
          id="password"
          type="password"
          v-model="password"
          placeholder="******************"
        />
        <p v-if="password == ''" class="text-red-500 text-xs italic">
          Please choose a password.
        </p>
      </div>
      <div class="flex items-center justify-between">
        <a
          class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
          href="#"
        >
          Learn More
        </a>
        <button
          @click="register"
          class="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          Register
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "../services/AuthenticationServices";
import { mapActions } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["setToken", "setUser"]),
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
        });
        this.$router.push("/login");
        this.setToken(response.data.token);
        this.setUser(response.data.user);
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style></style>
