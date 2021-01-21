<template>
  <div>
    <button @click="edit">edit</button>
    <panel title="c">
      <div>
        {{ client.name }}
        {{ client.nameAlt }}
        {{ client.IDN }}
        {{ client.sex }}
        {{ client.birthday }}
        {{ client.isDead }}
        {{ client.incomeStatus }}
        {{ client.disalbedStatus }}
        {{ client.group }}
        {{ client.tribe }}
        {{ client.plainMountain }}
        {{ client.canCall }}
        {{ client.phone }}
        {{ client.phoneNote }}
        {{ client.phoneAlt }}
        {{ client.phoneAAltNote }}
        {{ client.mobile }}
        {{ client.mobileNote }}
        {{ client.mobileAlt }}
        {{ client.mobileAltNote }}
        {{ client.canMail }}
        {{ client.city }}
        {{ client.cityAlt }}
        {{ client.dist }}
        {{ client.distAlt }}
        {{ client.vill }}
        {{ client.villAlt }}
        {{ client.addr }}
        {{ client.addrAlt }}
        {{ client.note }}
      </div>
    </panel>

    <ViewFamily :client="client" />
    <CreateFamily :target="client" />
    <ViewContact :client="client" />
    <CreateContact :client="client" />
  </div>
</template>

<script>
import ClientsService from "../services/ClientsService";
import Panel from "../components/Panel";
import CreateFamily from "./CreateFamily";
import ViewFamily from "./ViewFamily";
import CreateContact from "./CreateContact";
import ViewContact from "./ViewContact.vue";
export default {
  name: "ViewClient",
  components: {
    Panel,
    CreateFamily,
    ViewFamily,
    CreateContact,
    ViewContact,
  },
  data() {
    return {
      clientId: null,
      client: {
        id: "",
      },
    };
  },
  methods: {
    edit() {
      this.$router.push(`/clients/${this.clientId}/edit`);
    },
  },
  async mounted() {
    this.clientId = this.$store.state.route.params.clientId;
    this.client = (await ClientsService.get(this.clientId)).data;
  },
};
</script>

<style></style>
