<template>
  <div class="bg-gray-200">
    <div class="m-auto sm:mt-0 container ">
      <div class="md:grid md:grid-cols-6 md:gap-6">
        <div class="md:col-span-1">
          <Search />
        </div>
        <div class="md:col-span-5">
          <panel title="族人列表">
            <div class="flex flex-col">
              <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div
                  class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
                >
                  <div
                    class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
                  >
                    <table class="min-w-full divide-y divide-gray-200">
                      <thead class="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          >
                            姓名
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          >
                            族群
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          >
                            生日
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          >
                            手機
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          >
                            電話
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          >
                            地址
                          </th>

                          <th scope="col" class="relative px-6 py-3">
                            <span class="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="client in clients" :key="client.id">
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="ml-4">
                                <div
                                  class="text-md font-medium text-gray-900"
                                  :class="{ 'text-red-600': client.isDead }"
                                >
                                  <router-link
                                    :to="{
                                      name: 'client',
                                      params: { clientId: client.id },
                                    }"
                                    >{{ client.name }}</router-link
                                  >
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
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-md text-gray-900">
                              {{ client.group }}
                            </div>
                            <div class="text-md text-gray-500">
                              {{ client.plainMountain }}
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <span class="text-md text-gray-500">
                              {{ client.birthday }}
                            </span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-md text-gray-900">
                              {{ client.mobile }}
                            </div>
                            <div class="text-md text-gray-500">
                              {{ client.mobileAlt }}
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-md text-gray-900">
                              {{ client.phone }}
                            </div>
                            <div class="text-md text-gray-500">
                              {{ client.phoneAlt }}
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-md text-gray-900">
                              {{ client.city }}{{ client.dist }}{{ client.vill
                              }}{{ client.addr }}
                            </div>
                            <div class="text-md text-gray-500">
                              {{ client.cityAlt }}{{ client.distAlt
                              }}{{ client.villAlt }}{{ client.addrAlt }}
                            </div>
                          </td>

                          <td
                            class="px-6 py-4 whitespace-nowrap text-right text-md font-medium"
                          >
                            <button
                              @click="edit(client.id)"
                              class="text-indigo-600 hover:text-indigo-900"
                            >
                              編輯
                            </button>
                          </td>
                        </tr>

                        <!-- More items... -->
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
import Search from "../Search";
export default {
  name: "clients",
  components: { Panel, Search },
  meta: {
    needLogin: true,
  },
  data() {
    return {
      clients: null,
      search: "",
    };
  },
  watch: {
    "$route.query.search": {
      immediate: true,
      async handler(value) {
        this.clients = (await ClientsServices.index(value)).data;
      },
    },
  },
  computed: {},
  methods: {
    edit(clientId) {
      this.$router.push(`/clients/${clientId}/edit`);
    },
  },
};
</script>

<style></style>
