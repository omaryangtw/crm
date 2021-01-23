<template>
  <div>
    <panel>
      <div class="container m-auto min-h-screen">
        <div class="">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0 text-right ">
                <h3
                  class="text-2xl pt-4 px-8 font-semibold leading-6 text-gray-900 underline"
                >
                  {{ case__.name }}
                </h3>
              </div>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class=" sm:col-span-1">
                      <label
                        class="ml-4 block text-lg font-semibold text-gray-700"
                        >族人</label
                      >
                      <input
                        :value="clientName"
                        disabled
                        type="text"
                        name="date"
                        id="date"
                        autocomplete="family-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="col-span-2 sm:col-span-1">
                      <label
                        for="date"
                        class="block text-lg font-semibold  text-gray-700"
                        >日期</label
                      >
                      <input
                        :value="caseDate"
                        disabled
                        type="text"
                        name="date"
                        id="date"
                        autocomplete="family-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="col-span-2 col-end-7">
                      <label
                        for="status"
                        class="block text-lg font-semibold text-gray-700"
                        >狀態</label
                      >
                      <select
                        id="status"
                        name="status"
                        autocomplete="status"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg font-semibold"
                      >
                        <option>處理中</option>
                        <option>結案</option>
                      </select>
                    </div>
                    <div class=" sm:col-span-1">
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
                        autocomplete="typesMajor"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg font-semibold"
                      >
                        <option v-for="(item, index) in list" :key="item.id">{{
                          index
                        }}</option>
                      </select>
                    </div>

                    <div class=" sm:col-span-1">
                      <label
                        for="typesMinor"
                        class="block text-lg font-semibold text-gray-700"
                        >子類型</label
                      >
                      <select
                        id="typesMinor"
                        v-model="case__.typesMinor"
                        name="typesMinor"
                        autocomplete="typesMinor"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg font-semibold"
                      >
                        <option
                          v-for="option in list[case__.typesMajor]"
                          :key="option.id"
                          >{{ option.title }}</option
                        >
                      </select>
                    </div>
                    <div class=" col-span-2 col-end-7">
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
                        autocomplete="family-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-10 sm:mt-0">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0 text-right">
                <h3
                  class="text-2xl pt-4 px-8 font-semibold leading-6 text-gray-900 hidden"
                >
                  基本資料
                </h3>
              </div>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-2">
                      <label class="block text-lg font-semibold text-gray-700"
                        >姓名</label
                      >
                      <input
                        disabled
                        v-model="clientName"
                        type="text"
                        name="first_name"
                        autocomplete="given-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="col-span-1">
                      <label class="block text-lg font-semibold text-gray-700"
                        >山平原</label
                      >
                      <input
                        disabled
                        v-model="clientPlain"
                        type="text"
                        name="first_name"
                        autocomplete="given-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="col-span-1">
                      <label class="block text-lg font-semibold text-gray-700"
                        >族群</label
                      >
                      <input
                        disabled
                        v-model="clientGroup"
                        type="text"
                        name="first_name"
                        autocomplete="given-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="col-span-1">
                      <label class="block text-lg font-semibold text-gray-700"
                        >生日</label
                      >
                      <input
                        disabled
                        v-model="clientBirthday"
                        type="text"
                        name="first_name"
                        autocomplete="given-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="col-span-1">
                      <label class="block text-lg font-semibold text-gray-700"
                        >性別</label
                      >
                      <input
                        disabled
                        v-model="clientSex"
                        type="text"
                        name="first_name"
                        autocomplete="given-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="col-span-2">
                      <label class="block text-lg font-semibold text-gray-700"
                        >身分證號</label
                      >
                      <input
                        disabled
                        v-model="clientIDN"
                        type="text"
                        name="first_name"
                        autocomplete="given-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="col-span-2">
                      <label class="block text-lg font-semibold text-gray-700"
                        >手機</label
                      >
                      <input
                        disabled
                        v-model="clientMobile"
                        type="text"
                        name="first_name"
                        autocomplete="given-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="col-span-2">
                      <label class="block text-lg font-semibold text-gray-700"
                        >電話</label
                      >
                      <input
                        disabled
                        v-model="clientPhone"
                        type="text"
                        name="first_name"
                        autocomplete="given-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-10 sm:mt-0">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0 text-right">
                <h3
                  class="text-2xl pt-4 px-8 font-semibold leading-6 text-gray-900 hidden"
                >
                  紀錄
                </h3>
              </div>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-6">
                      <label
                        for="first_name"
                        class="block text-lg font-semibold text-gray-700"
                        >紀錄</label
                      >
                      <textarea
                        type="text"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg font-semibold border-gray-300 rounded-md h-72"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    @click="save"
                    type="submit"
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
        note: null,
      },
      error: null,
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
        ],
        急難救助: [{ id: "1", title: "急難救助" }],
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
  computed: {
    clientName: function() {
      return this.case__.name.split("/")[0];
    },
    caseDate: function() {
      return this.case__.name.split("/")[1];
    },
  },
  async mounted() {
    try {
      this.caseId = this.$store.state.route.params.caseId;
      this.case__ = (await CaseService.get(this.caseId)).data;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style></style>
