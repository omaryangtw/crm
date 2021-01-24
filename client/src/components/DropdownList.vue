<template>
  <div class="dropdown">
    <input
      v-if="Object.keys(selectedItem).length === 0"
      ref="dropdowninput"
      v-model.trim="inputValue"
      class="dropdown-input font-semibold"
      type="text"
      placeholder="..."
    />
    <div v-else @click="resetSelection" class="dropdown-selected">
      <img :src="selectedItem.flag" class="dropdown-item-flag" />
      {{ selectedItem.name }}
    </div>
    <div v-show="inputValue" class="dropdown-list">
      <div
        @click="selectItem(item)"
        v-show="itemVisible(item)"
        v-for="item in this.list"
        :key="item.name"
        class="dropdown-item"
      >
        <img :src="item.flag" class="dropdown-item-flag" />
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: {},
      inputValue: "",
      itemList: [],
      apiLoaded: false,
      apiUrl: "https://restcountries.eu/rest/v2/all?fields=name;flag",
    };
  },
  props: {
    list: Array,
  },
  mounted() {
    this.getList();
    console.log(this.list);
    console.log(this.itemList);
  },
  methods: {
    resetSelection() {
      this.selectedItem = {};
      this.$nextTick(() => this.$refs.dropdowninput.focus());
      this.$emit("on-item-reset");
    },
    selectItem(theItem) {
      this.selectedItem = theItem;
      this.inputValue = "";
      this.$emit("on-item-selected", theItem);
      console.log(theItem);
    },
    itemVisible(item) {
      let currentName = item.name;
      let currentInput = this.inputValue;
      return currentName.includes(currentInput);
    },
    getList() {
      this.itemList = this.list;
    },
  },
};
</script>

<style>
.dropdown {
  position: relative;
  width: 90%;
  max-width: 400px;
}
.dropdown-input,
.dropdown-selected {
  width: 100%;
  padding: 10px 16px;
  border: 1px solid transparent;
  background: #edf2f7;
  line-height: 1.5em;
  outline: none;
  border-radius: 8px;
}
.dropdown-input:focus,
.dropdown-selected:hover {
  background: #fff;
  border-color: #e2e8f0;
}
.dropdown-input::placeholder {
  opacity: 0.7;
}
.dropdown-selected {
  font-weight: bold;
  cursor: pointer;
}
.dropdown-list {
  position: absolute;
  width: 100%;
  max-height: 500px;
  margin-top: 4px;
  overflow-y: auto;
  background: #ffffff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}
.dropdown-item {
  display: flex;
  width: 100%;
  padding: 11px 16px;
  cursor: pointer;
}
.dropdown-item:hover {
  background: #edf2f7;
}
.dropdown-item-flag {
  max-width: 24px;
  max-height: 18px;
  margin: auto 12px auto 0px;
}
</style>
