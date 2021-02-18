<template>
  <div>
    <div class="container relative p-8">
      <div class="grid grid-cols-12 gap-x-6 gap-y-2">
        <div class="col-span-4 sm:col-span-4">
          <label
            for="date"
            class="block text-lg sm:text-xl font-semibold text-gray-700"
            >日期</label
          >
          <input
            type="date"
            id="date"
            v-model="contact.date"
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base border-gray-300 rounded-md bg-gray-100"
          />
        </div>
        <div class="col-span-3 sm:col-span-3">
          <label
            for="contactTyle"
            class="block text-lg sm:text-xl font-semibold text-gray-700"
            >類型</label
          >
          <select
            name="contactTyle"
            v-model="contact.contactType"
            class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl bg-gray-100"
          >
            <option
              v-for="contactType in contactTypes"
              :key="contactType.id"
              :value="contactType.type"
            >
              {{ contactType.type }}
            </option>
          </select>
        </div>
        <div class="col-span-2 sm:col-span-2">
          <label
            for="isSuccess"
            class="block text-lg font-semibold text-gray-700"
            >完成</label
          >
          <div class="flex justify-center align-middle mt-2">
            <input
              id="isSuccess"
              name="isSuccess"
              type="checkbox"
              v-model="contact.isSuccess"
              class="focus:ring-indigo-500 text-indigo-600 border-gray-300 rounded form-checkbox h-8 w-8"
            />
          </div>
        </div>
        <div class="col-span-3 sm:col-span-3">
          <label
            for="employee"
            class="block text-lg sm:text-xl font-semibold text-gray-700"
            >夥伴</label
          >
          <input
            type="text"
            name="employee"
            v-model="contact.personInCharge"
            id="employee"
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md bg-gray-50"
          />
        </div>
        <div class="col-span-10 sm:col-span-10">
          <label
            for="record"
            class="block text-lg sm:text-xl font-semibold text-gray-700"
            >紀錄</label
          >
          <input
            type="text"
            name="record"
            v-model="contact.record"
            id="record"
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md bg-gray-50"
          />
        </div>
        <div class="col-span-2 p-5">
          <button
            @click="create"
            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-bold rounded-full text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            +
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactService from "../../services/ContactService";
export default {
  name: "CreateContact",
  components: {},
  data() {
    return {
      contactTypes: [
        { type: "撥出" },
        { type: "來電" },
        { type: "親訪" },
        { type: "簡訊" },
      ],
      contact: {
        contactType: null,
        isSuccess: true,
        record: "",
        date: null,
        personInCharge: null,
      },
    };
  },
  props: {
    client: {
      type: Object,
    },
  },
  methods: {
    async create() {
      try {
        if (this.record === "") {
          console.log("Fields Required");
          return;
        }
        await ContactService.create({
          clientId: this.client.id,
          contact: this.contact,
        });
        this.closeModal();
      } catch (err) {
        console.log(err);
      }
    },
    closeModal() {
      this.$emit("close-modal");
    },
  },
  async mounted() {
    try {
      this.contact.date = new Date().toISOString().slice(0, 10);
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style></style>
