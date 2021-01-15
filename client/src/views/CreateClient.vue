<template>
  <div>
    <div class="text-red-500">{{ this.error }}</div>
    <panel title="Add a new client">
      <input required type="text" placeholder="name" v-model="client.name" />
      <input type="text" placeholder="nameAlt" v-model="client.nameAlt" />
      <input type="text" placeholder="IDN" v-model="client.IDN" />

      <input type="radio" id="sex" value="male" v-model="client.sex" />
      <label for="male">male</label>
      <br />
      <input type="radio" id="sex" value="female" v-model="client.sex" />
      <label for="female">female</label>
      <br />
      <span>sex: {{ client.sex }}</span>

      <label for="birthday">birthday</label>
      <input
        type="date"
        id="birthday"
        placeholder="birthday"
        v-model="client.birthday"
      />

      <input type="checkbox" id="isDead" v-model="client.isDead" />
      <label for="isDead">isDead:{{ client.isDead }}</label>

      <select v-model="client.incomeStatus">
        <option value="normal">normal</option>
        <option value="low">low</option>
        <option value="mid-low">mid-low</option>
        <option value="mid-low-elderly">mid-low-elderly</option>
      </select>
      <span>Selected: {{ client.incomeStatus }}</span>

      <select v-model="client.group">
        <option value="Amis">Amis</option>
        <option value="Atayal">Atayal</option>
        <option value="Bunun">Bunun</option>
        <option value="Kanakanavu">Kanakanavu </option>
        <option value="Kavalan">Kavalan </option>
        <option value="Paiwan"> Paiwan</option>
        <option value="Rukai">Rukai </option>
        <option value="Saaroa"> Saaroa</option>
        <option value="Saisiyat"> Saisiyat</option>
        <option value="Sakizaya"> Sakizaya</option>
        <option value="Seediq"> Seediq</option>
        <option value="Taroku"> Taroku</option>
        <option value="Thao"> Thao</option>
        <option value="Tsou"> Tsou</option>
        <option value="Yami"> Yami</option>
      </select>
      <span>Selected: {{ client.group }}</span>

      <input type="text" placeholder="tribe" v-model="client.tribe" />

      <input
        type="radio"
        id="plainMountain"
        value="plain"
        v-model="client.plainMountain"
      />
      <label for="plain">plain</label>
      <br />
      <input
        type="radio"
        id="plainMountain"
        value="mountain"
        v-model="client.plainMountain"
      />
      <label for="mountain">mountain</label>
      <br />
      <span>plainMountain: {{ client.plainMountain }}</span>

      <input type="checkbox" id="canCall" v-model="client.canCall" />
      <label for="canCall">canCall:{{ client.canCall }}</label>

      <input type="text" placeholder="phone" v-model="client.phone" />
      <input type="text" placeholder="phoneNote" v-model="client.phoneNote" />
      <input type="text" placeholder="phoneAlt" v-model="client.phoneAlt" />
      <input
        type="text"
        placeholder="phoneAltNote"
        v-model="client.phoneAltNote"
      />
      <input type="text" placeholder="mobile" v-model="client.mobile" />
      <input type="text" placeholder="mobileNote" v-model="client.mobileNote" />
      <input type="text" placeholder="mobileAlt" v-model="client.mobileAlt" />
      <input
        type="text"
        placeholder="mobileAltNote"
        v-model="client.mobileAltNote"
      />

      <input type="checkbox" id="canMail" v-model="client.canMail" />
      <label for="canMail">canMail:{{ client.canMail }}</label>

      <input type="text" placeholder="city" v-model="client.city" />
      <input type="text" placeholder="dist" v-model="client.dist" />
      <input type="text" placeholder="vill" v-model="client.vill" />
      <input type="text" placeholder="addr" v-model="client.addr" />
      <input type="text" placeholder="cityAlt" v-model="client.cityAlt" />
      <input type="text" placeholder="distAlt" v-model="client.distAlt" />
      <input type="text" placeholder="villAlt" v-model="client.villAlt" />
      <input type="text" placeholder="addrAlt" v-model="client.addrAlt" />
      <textarea
        name="note"
        id="note"
        cols="30"
        rows="10"
        v-model="client.note"
      ></textarea>
      <button @click="create">Create Client</button>
    </panel>
  </div>
</template>

<script>
import ClientsService from "../services/ClientsService";
import Panel from "../components/Panel";
export default {
  name: "CreateClient",
  components: {
    Panel,
  },
  data() {
    return {
      client: {
        name: "",
        nameAlt: null,
        IDN: null,
        sex: "male",
        birthday: null,
        isDead: false,

        incomeStatus: null,
        disabledStatus: null,

        group: null,
        tribe: null,
        plainMountain: null,

        canCall: false,
        phone: null,
        phoneNote: null,
        phoneAlt: null,
        phoneAltNote: null,
        mobile: null,
        mobileNote: null,
        mobileAlt: null,
        mobileAltNote: null,

        canMail: false,
        city: null,
        cityAlt: null,
        dist: null,
        distAlt: null,
        vill: null,
        villAlt: null,
        addr: null,
        addrAlt: null,
        note: null,
      },
      error: null,
    };
  },
  methods: {
    async create() {
      try {
        if (this.client.name === "") {
          this.error = "Name Required";
          return;
        }
        await ClientsService.create(this.client);
        this.$router.push("/clients");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
