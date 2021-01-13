<template>
  <div>
    <div
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col lg:w-6/12 lg:m-auto"
    >
      <div class="mb-4">
        <label
          class="block text-grey-700 text-sm font-bold mb-2"
          for="username"
        >
          E-mail
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700"
          id="username"
          type="email"
          placeholder="E-mail"
          v-model="email"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-grey-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-700 mb-3"
          id="password"
          type="password"
          v-model="password"
          placeholder="******************"
        />
        <p class="text-red text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <div></div>
        <button
          @click="login"
          class="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          Sign In
        </button>
        <a
          class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-700"
          href="#"
        >
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService/AuthenticationServices";
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["setToken", "setUser"]),
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
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
