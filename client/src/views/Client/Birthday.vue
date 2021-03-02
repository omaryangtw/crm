<template>
  <div class="bg-gray-200">
    <div class="m-auto sm:mt-0 container">
      <div class="md:grid md:grid-cols-6 md:gap-6">
        <div class="md:col-span-1">
          <label
            for="month"
            class="block text-lg sm:text-xl font-semibold text-gray-700"
            >月份 (總數: {{ len }} )
          </label>
          <input
            type="number"
            name="month"
            id="month"
            min="1"
            max="12"
            v-model="month"
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-xl border-gray-300 rounded-md"
          />
          <div>
            <input
              class="text-indigo-500"
              v-model="printMode"
              type="checkbox"
              name="printMode"
              id=""
            />生日卡模式
          </div>
          <div>
            <input
              class="text-indigo-500"
              v-model="visit"
              type="checkbox"
              name="visit"
              id=""
            />外訪(特助)模式
          </div>
        </div>
        <div class="md:col-span-5">
          <panel title="族人列表">
            <div class="flex flex-col">
              <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div
                  class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
                >
                  <div
                    class="shadow overflow-auto border-b border-gray-200 sm:rounded-lg"
                    style="height: 50rem"
                  >
                    <table class="min-w-full divide-y divide-gray-200">
                      <thead class="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            class="px-6 py-1 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          >
                            姓名
                          </th>
                          <th
                            v-if="!printMode"
                            scope="col"
                            class="px-6 py-1 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          >
                            族群
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-1 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          >
                            生日
                          </th>
                          <th
                            v-if="!printMode"
                            scope="col"
                            class="px-6 py-1 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          >
                            手機
                          </th>
                          <th
                            v-if="!printMode"
                            scope="col"
                            class="px-6 py-1 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          >
                            電話
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-1 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          >
                            地址
                          </th>
                        </tr>
                      </thead>
                      <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="(client, index) in clients" :key="client.id">
                          <td class="px-6 py-1 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="ml-4">
                                <div
                                  class="text-md font-medium text-gray-900 flex"
                                >
                                  <div v-if="!printMode && !visit">
                                    {{ index + 1 }}
                                  </div>
                                  <div>{{ client.name }}</div>
                                  <div v-if="!printMode && !visit">
                                    ( {{ age(client.birthday) }} )
                                  </div>
                                </div>
                                <div
                                  class="text-md text-gray-500"
                                  :class="{ 'text-red-600': client.isDead }"
                                  v-if="client.nameAlt"
                                >
                                  {{ client.nameAlt }}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td
                            class="px-6py-1 whitespace-nowrap"
                            v-if="!printMode"
                            :class="{ flex: visit }"
                          >
                            <span class="text-md text-gray-900">
                              {{ client.group }}
                            </span>
                            <span
                              v-if="client.plainMountain"
                              class="text-md text-gray-500"
                            >
                              ({{ client.plainMountain }})
                            </span>
                          </td>
                          <td class="px-6 py-1 whitespace-nowrap">
                            <span class="text-md text-gray-500">
                              {{ client.birthday }}
                            </span>
                          </td>
                          <td
                            class="px-6py1 whitespace-nowrap"
                            v-if="!printMode"
                          >
                            <div class="text-md text-gray-900">
                              {{ client.mobile }}
                            </div>
                            <div class="text-md text-gray-500">
                              {{ client.mobileAlt }}
                            </div>
                          </td>
                          <td
                            class="px-6 py-1 whitespace-nowrap"
                            v-if="!printMode"
                          >
                            <div class="text-md text-gray-900">
                              {{ client.phone }}
                            </div>
                            <div class="text-md text-gray-500">
                              {{ client.phoneAlt }}
                            </div>
                          </td>
                          <td class="px-6py-1 whitespace-nowrap">
                            <div class="text-md text-gray-900">
                              {{ client.dist }}{{ client.vill
                              }}{{ client.addr }}
                            </div>
                            <div class="text-md text-gray-500">
                              {{ client.distAlt }}{{ client.villAlt
                              }}{{ client.addrAlt }}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </panel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClientsServices from "../../services/ClientsService.js";
import Panel from "../../components/Panel.vue";
export default {
  name: "Birthday",
  components: { Panel },
  meta: {
    needLogin: true,
  },
  data() {
    return {
      allClients: null,
      clients: null,
      month: "1",
      len: null,
      printMode: false,
      visit: false,
    };
  },
  methods: {
    age(birthday) {
      return 2021 - parseInt(birthday);
    },
    ageCheck(client) {
      if (this.visit && client.age >= 55) {
        return client;
      }
      if (!this.visit) {
        return client;
      }
    },
  },
  watch: {
    month: {
      immediate: true,
      async handler() {
        this.clients = (await ClientsServices.indexAll()).data;
        this.clients = this.clients
          .filter(
            (client) => parseInt(client.birthMonth) === parseInt(this.month)
          )
          .filter((client) => !client.isDead)
          .filter((client) => client.addr)
          //.filter((client) => client.age >= 55)
          .sort((a, b) => a.birthday.slice(8, 10) - b.birthday.slice(8, 10));
        this.len = this.clients.length;
      },
    },
  },
  visit: function () {
    this.clients.filter(this.ageCheck);
  },
};
</script>

<style></style>
