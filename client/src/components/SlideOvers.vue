<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="fixed inset-0 overflow-hidden z-50" v-if="slideOverSwitch">
    <div class="absolute inset-0 overflow-hidden">
      <!--
      Background overlay, show/hide based on slide-over state.

      Entering: "ease-in-out duration-500"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in-out duration-500"
        From: "opacity-100"
        To: "opacity-0"
    -->
      <div
        class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>
      <section
        class="absolute inset-y-0 right-0 pl-10 max-w-full flex"
        aria-labelledby="slide-over-heading"
      >
        <!--
        Slide-over panel, show/hide based on slide-over state.

        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-0"
          To: "translate-x-full"
      -->
        <div class="relative w-screen max-w-md">
          <!--
          Close button, show/hide based on slide-over state.

          Entering: "ease-in-out duration-500"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-500"
            From: "opacity-100"
            To: "opacity-0"
        -->
          <div
            class="absolute top-0 left-0 -ml-8  border-r-2 border-dotted border-gray-500 flex sm:-ml-10 "
          >
            <button
              @click="closePanel"
              class=" bg-gray-100 text-gray-300 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span class="sr-only">Close panel</span>
              <!-- Heroicon name: x -->
              <svg
                class="h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="h-full flex flex-col py-6 bg-gray-100 shadow-xl overflow-y-scroll"
          >
            <div class="px-4 sm:px-6">
              <h2
                id="slide-over-heading"
                class="text-2xl font-semibold text-gray-900"
              >
                案件紀錄
              </h2>
            </div>
            <div v-for="case_ in cases" :key="case_.id">
              <item-card
                :caseId="case_.id"
                :note="case_.note"
                :name="case_.name"
                :personInCharge="case_.personInCharge"
                :status="case_.status"
                :typesMajor="case_.typesMajor"
                :trackTime="case_.trackTime"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import CaseService from "../services/CaseService";
import ItemCard from "./ItemCard.vue";
export default {
  components: { ItemCard },
  name: "SlideOvers",
  props: {
    slideOverSwitch: Boolean,
    clientId: Number,
  },
  data() {
    return { cases: [] };
  },
  methods: {
    closePanel() {
      this.$emit("closePanel");
    },
  },
  watch: {
    slideOverSwitch: async function() {
      this.cases = ((await CaseService.byClient(this.clientId)).data).Cases;
    },
  },
};
</script>

<style></style>
