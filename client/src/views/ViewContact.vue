<template>
  <div>
    <panel title="Contact">
      <div v-for="contact in client.Contacts" :key="contact.id">
        {{ $filters.dateFormate(contact.date) }}
        {{ contact.contactType }}
        {{ contact.isSuccess }}
        {{ contact.record }}
        <button @click="remove(contact)">delete</button>
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
