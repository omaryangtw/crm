<template>
  <div>
    {{ clientId }}
    <panel title="">
      <!--      <input type="text" placeholder="name" v-model="name" />
      <input type="text" placeholder="nameAlt" v-model="nameAlt" />
      <input type="text" placeholder="IDN" v-model="IDN" />

      <form action="">
        <input type="radio" id="male" value="male" v-model="sex" />
        <label for="male">male</label>
        <br />
        <input type="radio" id="female" value="female" v-model="sex" />
        <label for="female">female</label>
        <br />
        <span>sex: {{ sex }}</span>
      </form>

      <label for="birthday">birthday</label>
      <input
        type="date"
        id="birthday"
        placeholder="birthday"
        v-model="birthday"
      />

      <input type="checkbox" id="isDead" v-model="isDead" />
      <label for="isDead">{{ isDead }}</label>

      <select v-model="incomeStatus">
        <option value="normal">normal</option>
        <option value="low">low</option>
        <option value="mid-low">mid-low</option>
        <option value="mid-low-elderly">mid-low-elderly</option>
      </select>
      <span>Selected: {{ incomeStatus }}</span>

      <select v-model="group">
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
      <span>Selected: {{ group }}</span>

      <input type="text" placeholder="tribe" v-model="tribe" />

      <form action="">
        <input type="radio" id="plain" value="plain" v-model="plainMountain" />
        <label for="plain">plain</label>
        <br />
        <input
          type="radio"
          id="mountain"
          value="mountain"
          v-model="plainMountain"
        />
        <label for="mountain">mountain</label>
        <br />
        <span>plainMountain: {{ sex }}</span>
      </form>

      <input type="checkbox" id="canCall" v-model="canCall" />
      <label for="canCall">canCall:{{ canCall }}</label>

      <input type="text" placeholder="phone" v-model="phone" />
      <input type="text" placeholder="phoneNote" v-model="phoneNote" />
      <input type="text" placeholder="phoneAlt" v-model="phoneAlt" />
      <input type="text" placeholder="phoneAltNote" v-model="phoneAltNote" />
      <input type="text" placeholder="mobile" v-model="mobile" />
      <input type="text" placeholder="mobileNote" v-model="mobileNote" />
      <input type="text" placeholder="mobileAlt" v-model="mobileAlt" />
      <input type="text" placeholder="mobileAltNote" v-model="mobileAltNote" />

      <input type="checkbox" id="canMail" v-model="canMail" />
      <label for="canMail">canMail:{{ canMail }}</label>

      <input type="text" placeholder="city" v-model="city" />
      <input type="text" placeholder="dist" v-model="dist" />
      <input type="text" placeholder="vill" v-model="vill" />
      <input type="text" placeholder="addr" v-model="addr" />
      <input type="text" placeholder="cityAlt" v-model="cityAlt" />
      <input type="text" placeholder="distAlt" v-model="distAlt" />
      <input type="text" placeholder="villAlt" v-model="villAlt" />
      <input type="text" placeholder="addrAlt" v-model="addrAlt" />
      <textarea
        name="note"
        id="note"
        cols="30"
        rows="10"
        v-model="note"
      ></textarea> -->

      {{ client.name }}
    </panel>
  </div>
</template>

<script>
import ClientsService from "../services/ClientsService";
import Panel from "../components/Panel";
export default {
  name: "ViewClient",
  components: {
    Panel,
  },
  data() {
    return {
      clientId: null,
      client: null,
    };
  },
  async mounted() {
    this.clientId = this.$store.state.route.params.clientId;
    this.client = (await ClientsService.display(this.clientId)).data;
  },
};
</script>

<style></style>
