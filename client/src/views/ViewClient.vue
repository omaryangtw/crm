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

    <ViewFamily v-if="isReloadAlive" :client="client" />
    <CreateFamily v-if="isReloadAlive" :target="client" />
  </div>
</template>

<script>
import ClientsService from "../services/ClientsService";
import Panel from "../components/Panel";
import CreateFamily from "./CreateFamily";
import ViewFamily from "./ViewFamily";
export default {
  name: "ViewClient",
  components: {
    Panel,
    CreateFamily,
    ViewFamily,
  },
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      clientId: null,
      client: {
        id: "",
      },
      isReloadAlive: true,
    };
  },
  methods: {
    edit() {
      this.$router.push(`/clients/${this.clientId}/edit`);
    },
    reload() {
      this.isReloadAlive = false;
      this.$nextTick(function() {
        this.isReloadAlive = true;
      });
    },
  },
  async mounted() {
    this.clientId = this.$store.state.route.params.clientId;
    this.client = (await ClientsService.get(this.clientId)).data;
  },
};
</script>

<style></style>
