<template>
  <div>
    <panel title="Add Contact Record">
      <input type="date" name="date" id="date" v-model="contact.date" />
      <select name="contactTyle" v-model="contact.contactType">
        <option
          v-for="contactType in contactTypes"
          :key="contactType.id"
          :value="contactType.type"
          >{{ contactType.type }}</option
        >
      </select>
      <input
        type="checkbox"
        name="isSuccess"
        id="isSuccess"
        v-model="contact.isSuccess"
      />
      <input
        type="text"
        name="record"
        id="record"
        placeholder="record"
        v-model="contact.record"
      />
      <button @click="create">create</button>
    </panel>
  </div>
</template>

<script>
import Panel from "../components/Panel";
import ContactService from "../services/ConstactService";
export default {
  name: "CreateContact",
  components: {
    Panel,
  },
  data() {
    return {
      contactTypes: [{ type: "撥出" }, { type: "來電" }, { type: "親訪" }],

      contact: {
        contactType: null,
        isSuccess: true,
        record: "",
        date: null,
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
        this.$router.go(0);
      } catch (err) {
        console.log(err);
      }
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
