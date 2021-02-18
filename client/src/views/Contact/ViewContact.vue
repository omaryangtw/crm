<template>
  <div>
    <div>
      <div
        v-for="contact in client.Contacts"
        :key="contact.id"
        :class="{ 'text-red-500': contact.isSuccess === false }"
        class="grid grid-cols-12 gap-y-2"
      >
        <div class="col-span-1 sm:col-span-1">
          <button
            @click="remove(contact)"
            class="inline-flex justify-center w-8 h-8 shadow-sm text-lg font-bold rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-4"
          >
            x
          </button>
        </div>
        <div class="col-span-3 sm:col-span-3">
          {{ $filters.dateFormate(contact.date) }}
        </div>
        <div class="col-span-2 sm:col-span-2">
          {{ contact.contactType }} / {{ contact.personInCharge }}
        </div>
        <div class="col-span-6 sm:col-span-6">
          {{ contact.record }}
        </div>
        <div class="hidden sm:block col-span-12" aria-hidden="true">
          <div class="py-3">
            <div class=""></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactService from "../../services/ContactService";

export default {
  name: "ViewContact",
  components: {},
  props: {
    client: {
      type: Object,
    },
  },
  methods: {
    async remove(record) {
      try {
        await ContactService.remove(this.client.id, record.id);
        this.closeModal();
        this.$router.go(0);
      } catch (err) {
        console.log(err);
      }
    },
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>

<style></style>
