<template>
  <div>
    <panel :title="case__.name">
      <div class="container m-auto">
        <div class="">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="mt-5 md:mt-0 md:col-span-1">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div
                  class="px-4 py-5 bg-gradient-to-l from-blue-100 to-red-100 sm:p-6"
                >
                  <div class="grid grid-cols-2 gap-6">
                    <div class="sm:col-span-1">
                      <label
                        class="ml-4 block text-lg font-semibold text-gray-700"
                        >族人</label
                      >
                      <input
                        disabled
                        v-model="clientName"
                        type="text"
                        name="first_name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="col-span-1 sm:col-span-1">
                      <label
                        for="date"
                        class="block text-lg font-semibold text-gray-700"
                        >日期</label
                      >
                      <input
                        :value="caseDate"
                        disabled
                        type="text"
                        name="date"
                        id="date"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="sm:col-span-1">
                      <label
                        for="typesMajor"
                        class="block text-lg font-semibold text-gray-700"
                        >案件類型</label
                      >
                      <select
                        @change="majorChanged"
                        id="typesMajor"
                        name="typesMajor"
                        v-model="case__.typesMajor"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg font-semibold"
                      >
                        <option v-for="(item, index) in list" :key="item.id">
                          {{ index }}
                        </option>
                      </select>
                    </div>

                    <div class="sm:col-span-1">
                      <label
                        for="typesMinor"
                        class="block text-lg font-semibold text-gray-700"
                        >子類型</label
                      >
                      <select
                        id="typesMinor"
                        v-model="case__.typesMinor"
                        name="typesMinor"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg font-semibold"
                      >
                        <option
                          v-for="option in list[case__.typesMajor]"
                          :key="option.id"
                        >
                          {{ option.title }}
                        </option>
                      </select>
                    </div>
                    <div class="col-span-1">
                      <label
                        for="status"
                        class="block text-lg font-semibold text-gray-700"
                        >狀態</label
                      >
                      <select
                        id="status"
                        name="status"
                        v-model="case__.status"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg font-semibold"
                      >
                        <option>處理中</option>
                        <option>結案</option>
                      </select>
                    </div>
                    <div class="col-span-1">
                      <label
                        for="personInCharge"
                        class="block text-lg font-semibold text-gray-700"
                        >承辦人</label
                      >
                      <input
                        type="text"
                        name="personInCharge"
                        id="personInCharge"
                        v-model="case__.personInCharge"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-1">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-indigo-100 sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-3 sm:col-span-2">
                      <label class="block text-lg font-semibold text-gray-700"
                        >山平原</label
                      >
                      <input
                        disabled
                        v-model="clientPlain"
                        type="text"
                        name="first_name"
                        class="mt-1 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="col-span-3 sm:col-span-2">
                      <label class="block text-lg font-semibold text-gray-700"
                        >族群</label
                      >
                      <input
                        disabled
                        v-model="clientGroup"
                        type="text"
                        name="first_name"
                        class="mt-1 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="col-span-3 sm:col-span-2">
                      <label class="block text-lg font-semibold text-gray-700"
                        >生日</label
                      >
                      <input
                        disabled
                        v-model="clientBirthday"
                        type="text"
                        name="first_name"
                        class="mt-1 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="sm:col-span-2 col-span-3">
                      <label class="block text- font-semibold text-gray-700"
                        >身分證號</label
                      >
                      <input
                        disabled
                        v-model="clientIDN"
                        type="text"
                        name="first_name"
                        class="mt-1 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-md font-semibold border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="sm:col-span-2 col-span-3">
                      <label class="block text-lg font-semibold text-gray-700"
                        >手機</label
                      >
                      <input
                        disabled
                        v-model="clientMobile"
                        type="text"
                        name="first_name"
                        class="mt-1 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="col-span-3 sm:col-span-2">
                      <label class="block text-lg font-semibold text-gray-700"
                        >電話</label
                      >
                      <input
                        disabled
                        v-model="clientPhone"
                        type="text"
                        name="first_name"
                        class="mt-1 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="col-span-6">
                      <label class="block text-lg font-semibold text-gray-700"
                        >地址</label
                      >
                      <input
                        disabled
                        v-model="clientAddr"
                        type="text"
                        name="first_name"
                        class="mt-1 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-1">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div
                  class="px-4 py-5 bg-gradient-to-l from-blue-100 to-indigo-100 sm:p-6"
                >
                  <div class="grid grid-cols-2 gap-6">
                    <div class="col-span-1">
                      <label
                        for="relation1"
                        class="block text-lg font-semibold text-gray-700"
                        >關係人</label
                      >
                      <input
                        type="text"
                        name="relation1"
                        id="relation1"
                        v-model="case__.relation1"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="col-span-1">
                      <label
                        for="contact1"
                        class="block text-lg font-semibold text-gray-700"
                        >電話</label
                      >
                      <input
                        type="text"
                        name="contact1"
                        id="contact1"
                        v-model="case__.contact1"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="col-span-1">
                      <label
                        for="relation2"
                        class="block text-lg font-semibold text-gray-700"
                        >關係人</label
                      >
                      <input
                        type="text"
                        name="relation2"
                        id="relation2"
                        v-model="case__.relation2"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="col-span-1">
                      <label
                        for="contact2"
                        class="block text-lg font-semibold text-gray-700"
                        >電話</label
                      >
                      <input
                        type="text"
                        name="contact2"
                        id="contact2"
                        v-model="case__.contact2"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="col-span-1">
                      <label
                        for="relation3"
                        class="block text-lg font-semibold text-gray-700"
                        >關係人</label
                      >
                      <input
                        type="text"
                        name="relation3"
                        id="relation3"
                        v-model="case__.relation3"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="col-span-1">
                      <label
                        for="contact3"
                        class="block text-lg font-semibold text-gray-700"
                        >電話</label
                      >
                      <input
                        type="text"
                        name="contact3"
                        id="contact3"
                        v-model="case__.contact3"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden sm:block" aria-hidden="true">
          <div class="py-5">
            <div class="border-t border-gray-200"></div>
          </div>
        </div>
        <div class="mt-10 sm:mt-0">
          <div class="md:grid md:grid-cols-6 md:gap-6">
            <div class="mt-5 md:mt-0 md:col-span-6">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div
                  class="px-4 py-5 bg-gradient-to-l from-blue-100 to-red-100 sm:p-6"
                >
                  <div class="grid grid-cols-2 gap-2">
                    <div class="col-span-2 sm:col-span-1">
                      <label
                        for="first_name"
                        class="block text-lg font-semibold text-gray-700"
                        >案件狀況</label
                      >
                      <textarea
                        type="text"
                        name="first_name"
                        id="first_name"
                        v-model="case__.note"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md h-40"
                      ></textarea>
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                      <label
                        for="first_name"
                        class="block text-lg font-semibold text-gray-700"
                        >處理紀錄</label
                      >
                      <textarea
                        type="text"
                        name="first_name"
                        id="first_name"
                        v-model="case__.handle"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md h-40"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div
                  class="px-4 py-3 bg-gradient-to-l from-blue-100 to-red-100 text-right sm:px-6"
                >
                  <button
                    @click="save"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    儲存
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </panel>
  </div>
</template>

<script>
import CaseService from "../../services/CaseService";
import Panel from "../../components/Panel";
import ClientsService from "../../services/ClientsService";
export default {
  name: "CreateCase",
  components: {
    Panel,
  },
  data() {
    return {
      case__: {
        name: "",
        status: null,
        personInCharge: null,
        typesMajor: null,
        typesMinor: null,
        relation1: null,
        relation2: null,
        relation3: null,
        contact1: null,
        contact2: null,
        contact3: null,
        note: null,
        handle: null,
      },
      clientName: "",
      clientPlain: "",
      clientGroup: "",
      clientBirthday: null,
      clientSex: "",
      clientIDN: "",
      clientMobile: "",
      clientPhone: "",
      clientAddr: "",
      error: null,
      clientId: null,
      client: null,
      caseId: null,
      list: {
        一般: [
          { id: "1", title: "一般" },
          { id: "2", title: "求職" },
          { id: "3", title: "陳情" },
          { id: "4", title: "施政建議" },
        ],
        法律: [
          { id: "1", title: "債務" },
          { id: "2", title: "勞資" },
          { id: "3", title: "車禍" },
          { id: "4", title: "家事" },
          { id: "5", title: "繼承" },
          { id: "6", title: "諮詢" },
          { id: "7", title: "非訟" },
          { id: "8", title: "刑事" },
        ],
        急難救助: [
          { id: "1", title: "生活扶助" },
          { id: "2", title: "死亡救助" },
          { id: "3", title: "急難紓困" },
          { id: "4", title: "重大災害" },
          { id: "5", title: "醫療補助" },
        ],
      },
    };
  },
  methods: {
    async save() {
      try {
        if (this.case__.name === "") {
          this.error = "Name Required";
          return;
        }
        await CaseService.put(this.case__);
        this.$router.go(-1);
      } catch (err) {
        console.log(err);
      }
    },
  },
  watch: {
    client: function () {
      this.clientName = this.client.name;
      this.clientPlain = this.client.plainMountain;
      this.clientGroup = this.client.group;
      this.clientBirthday = this.client.birthday;
      if (this.client.sex) {
        this.clientSex = this.client.sex;
      }
      this.clientIDN = this.client.IDN;
      this.clientMobile = this.client.mobile;
      this.clientPhone = this.client.phone;
      this.clientAddr =
        Strings.orEmpty(this.client.city) +
        Strings.orEmpty(this.client.dist) +
        Strings.orEmpty(this.client.vill) +
        Strings.orEmpty(this.client.addr);
    },
  },
  computed: {
    caseDate: function () {
      return this.case__.name.split("/")[1];
    },
  },
  async mounted() {
    try {
      this.caseId = this.$store.state.route.params.caseId;
      this.case__ = (await CaseService.get(this.caseId)).data;
      this.client = (await ClientsService.get(this.case__.ClientId)).data;
    } catch (err) {
      console.log(err);
    }
  },
};
const Strings = {};
Strings.orEmpty = function (entity) {
  return entity || "";
};
</script>

<style></style>
