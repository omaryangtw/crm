<template>
  <div class="bg-gray-200 min-h-screen">
    <div class="m-auto sm:mt-0 pt-10 container">
      <div class="md:grid md:grid-cols-6 md:gap-6">
        <div class="md:col-span-3">
          <BarChart />
        </div>
        <div class="md:col-span-3">
          <div class="relative pt-20">
            <div class="flex mb-2 items-center justify-between">
              <div>
                <span
                  class="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200"
                >
                  本周進度
                </span>
                <span
                  class="text-sm font-semibold inline-block py-1 px-2 uppercase text-pink-600"
                >
                  {{ weeklyCount }} / 100
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block text-pink-600">
                  {{ weeklyCount }} %
                </span>
              </div>
            </div>
            <div
              class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200"
            >
              <div
                :style="{ width: this.weeklyCount + '%' }"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
              ></div>
            </div>
          </div>
        </div>
        <div class="md:col-span-3">
          <panel title="距上次聯繫逾一個月">
            <div class="flex flex-col">
              <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div
                  class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
                >
                  <div
                    class="shadow overflow-auto border-b border-gray-200 sm:rounded-lg h-96"
                  >
                    <table class="min-w-full divide-y divide-gray-200">
                      <thead class="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          >
                            客戶名稱
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          >
                            上次聯絡時間
                          </th>
                        </tr>
                      </thead>
                      <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="client in ever" :key="client.id">
                          <td class="px-6 py-1 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="ml-4">
                                <div class="text-md font-medium text-gray-900">
                                  <router-link
                                    :to="{
                                      name: 'client',
                                      params: { clientId: client.id },
                                    }"
                                    >{{ client.name }}</router-link
                                  >
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-1 whitespace-nowrap">
                            {{
                              lastContactDate(
                                client.Contacts[client.Contacts.length - 1].date
                              )
                            }}
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
        <div class="md:col-span-3">
          <panel title="未曾聯絡">
            <div class="flex flex-col">
              <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div
                  class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
                >
                  <div
                    class="shadow overflow-auto border-b border-gray-200 sm:rounded-lg h-96"
                  >
                    <table class="min-w-full divide-y divide-gray-200">
                      <thead class="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          >
                            客戶名稱
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          >
                            上次聯絡時間
                          </th>
                        </tr>
                      </thead>
                      <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="client in never" :key="client.id">
                          <td class="px-6 py-1 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="ml-4">
                                <div class="text-md font-medium text-gray-900">
                                  <router-link
                                    :to="{
                                      name: 'client',
                                      params: { clientId: client.id },
                                    }"
                                    >{{ client.name }}</router-link
                                  >
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-1 whitespace-nowrap">N/A</td>
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
// @ is an alias to /src
import Panel from "../components/Panel";
import ContactService from "../services/ContactService";
import BarChart from "../components/BarChart";
export default {
  name: "Home",
  components: {
    Panel,
    BarChart,
  },
  data() {
    return {
      todolist: null,
      never: null,
      ever: null,
      weeklyContact: null,
      weeklyCount: null,
    };
  },
  methods: {
    lastContactDate(date) {
      return date.slice(0, 10);
    },
  },
  async mounted() {
    this.todolist = (await ContactService.recent()).data;
    var date = new Date().getUTCDate();
    var month = new Date().getMonth();
    var oneMonthAgo = new Date(2021, month - 1, date);
    this.never = this.todolist.filter((client) => client.Contacts.length == 0);
    this.ever = this.todolist
      .filter((client) => client.Contacts.length > 0)
      .filter(
        (client) =>
          new Date(client.Contacts[client.Contacts.length - 1].date) <
          oneMonthAgo
      )
      .sort(
        (a, b) =>
          new Date(a.Contacts[a.Contacts.length - 1].date) -
          new Date(b.Contacts[b.Contacts.length - 1].date)
      );
    this.weeklyContact = (await ContactService.sinceThisWeek()).data;
    this.weeklyCount = this.weeklyContact.length;
  },
};
</script>
