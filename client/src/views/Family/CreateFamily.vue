<template>
  <div>
    <div class="flex items-center py-6">
      <button
        @click="create"
        class="inline-flex justify-center h-8 w-8 border border-transparent shadow-sm text-lg font-bold rounded-full text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        +
      </button>
      <div class="w-2/12 ml-4">
        <label
          for="relationship"
          class="ml-4 block text-lg font-semibold text-gray-700"
          >關係</label
        >
        <div>
          <DropdownList
            :list="familylist"
            @on-item-selected="setRelation"
            @on-item-reset="dropdownSelection = {}"
          />
        </div>
      </div>

      <div class="w-3/12 ml-4">
        <label class="block text-lg font-semibold text-gray-700">姓名</label>
        <div>
          <DropdownList
            :list="clients"
            @on-item-selected="setTargetId"
            @on-item-reset="dropdownSelection = {}"
          />
        </div>
      </div>
      <div>
        <label class="block text-lg font-semibold text-gray-700"
          >基礎資料</label
        >
        <div class="mt-2 p-2 block text-base font-semibold text-gray-700">
          {{ targetInfoString }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FamilyService from "../../services/FamilyService";
import ClientsService from "../../services/ClientsService";
import DropdownList from "../../components/DropdownList";
export default {
  name: "CreateFamily",
  components: {
    DropdownList,
  },
  data() {
    return {
      sourceId: null,
      targetId: null,
      relationship: null,
      dropdownSelection: {},
      clients: null,
      targetInfo: {
        sex: null,
        age: null,
        dist: "",
        vill: "",
      },
      targetInfoString: "",
      familylist: [
        { name: "配偶" },
        { name: "同居人" },
        { name: "父" },
        { name: "母" },
        { name: "子" },
        { name: "女" },
        { name: "兄" },
        { name: "弟" },
        { name: "姊" },
        { name: "妹" },
        { name: "祖父" },
        { name: "祖母" },
        { name: "孫子" },
        { name: "孫女" },
        { name: "岳父" },
        { name: "岳母" },
        { name: "叔" },
        { name: "伯" },
        { name: "姑" },
        { name: "舅" },
        { name: "姨" },
      ],
    };
  },
  props: {
    target: {
      type: Object,
    },
  },
  methods: {
    async create() {
      try {
        if (this.relationship === "" && this.target.name === "") {
          console.log("Fields Required");
          return;
        }
        await FamilyService.create({
          sourceId: this.sourceId,
          targetId: this.targetId,
          relationship: this.relationship,
        });
        this.closeModal();
      } catch (err) {
        console.log(err);
      }
    },
    setRelation(relation) {
      this.relationship = relation.name;
    },
    setTargetId(client) {
      console.log(client);
      this.targetId = client.id;
    },
    closeModal() {
      this.$emit("close-modal");
    },
  },
  async mounted() {
    try {
      this.sourceId = parseInt(this.$route.params.clientId);
      this.clients = (await ClientsService.index()).data;
      await console.log(this.clients);
    } catch (err) {
      console.log(err);
    }
  },
  watch: {
    targetId: function() {
      this.targetInfo.sex =
        this.clients[this.targetId - 1].sex === "male" ? "男" : "女";
      if (this.clients[this.targetId - 1].birthday) {
        this.targetInfo.age =
          " / " +
          (
            parseInt(new Date().toISOString().slice(0, 4)) -
            parseInt(this.clients[this.targetId - 1].birthday)
          ).toString() +
          "歲";
      }
      if (this.targetInfo.dist !== "") {
        this.targetInfo.dist = " / " + this.clients[this.targetId - 1].dist;
      }
      if (this.targetInfo.vill !== "") {
        this.targetInfo.vill = " / " + this.clients[this.targetId - 1].vill;
      }
      this.targetInfoString =
        this.targetInfo.sex + this.targetInfo.age + this.targetInfo.vill;
    },
  },
};
</script>

<style></style>
