<template>
  <div>
    <panel title="通聯記錄" class="pb-20">
      <div>
        <div
          v-for="contact in client.Contacts"
          :key="contact.id"
          :class="{ 'line-through': isSuccess === false }"
          class="grid grid-cols-12 gap-y-2"
        >
          <div class="col-span-1 sm:col-span-1">
            <button
              @click="remove(contact)"
              type="submit"
              class="inline-flex justify-center w-8 h-8 border border-transparent shadow-sm text-lg font-bold rounded-full text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              -
            </button>
          </div>
          <div class="col-span-3 sm:col-span-3">
            {{ $filters.dateFormate(contact.date) }}
          </div>
          <div class="col-span-2 sm:col-span-2">
            {{ contact.contactType }}
          </div>
          <div class="col-span-6 sm:col-span-6">
            {{ contact.record }}
          </div>
          <div class="hidden sm:block col-span-12" aria-hidden="true">
            <div class="py-3">
              <div class="border-t border-gray-400"></div>
            </div>
          </div>
        </div>
      </div>
    </panel>
  </div>
</template>

<script>
import Panel from "../components/Panel";
import ContactService from "../services/ConstactService";

export default {
  name: "ViewContact",
  components: {
    Panel,
  },
  props: {
    client: {
      type: Object,
    },
  },
  methods: {
    async remove(record) {
      try {
        console.log(
          "remove",
          "\nclientId:",
          this.client.id,
          "\nrecordId:",
          record.id
        );
        await ContactService.remove(this.client.id, record.id);
        this.$router.go(0);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
