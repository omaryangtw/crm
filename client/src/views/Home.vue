<template>
  <div class="bg-gray-200 min-h-screen">
    <div class="m-auto sm:mt-0 pt-10 container">
      <div class="md:grid md:grid-cols-6 md:gap-6">
        <div class="md:col-span-2">
          <BarChart />
        </div>
        <div class="md:col-span-2 px-6">
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
                  Nakaw
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block text-pink-600">
                  {{ weeklyNakaw }} %
                </span>
              </div>
            </div>
            <div
              class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200"
            >
              <div
                :style="{ width: this.weeklyNakaw + '%' }"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-400"
              ></div>
            </div>
          </div>
          <div class="relative pt-10">
            <div class="flex mb-2 items-center justify-between">
              <div>
                <span
                  class="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200"
                >
                  本周進度
                </span>
                <span
                  class="text-sm font-semibold inline-block py-1 px-2 uppercase text-green-600"
                >
                  Kilang
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block text-green-600">
                  {{ weeklyKilang }} %
                </span>
              </div>
            </div>
            <div
              class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200"
            >
              <div
                :style="{ width: this.weeklyKilang + '%' }"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-400"
              ></div>
            </div>
          </div>
          <div class="relative pt-10">
            <div class="flex mb-2 items-center justify-between">
              <div>
                <span
                  class="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-600 bg-yellow-200"
                >
                  本周進度
                </span>
                <span
                  class="text-sm font-semibold inline-block py-1 px-2 uppercase text-yellow-600"
                >
                  立恩
                </span>
              </div>
              <div class="text-right">
                <span
                  class="text-xs font-semibold inline-block text-yellow-600"
                >
                  {{ weeklyAhoho }} %
                </span>
              </div>
            </div>
            <div
              class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-yellow-200"
            >
              <div
                :style="{ width: this.weeklyAhoho + '%' }"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-400"
              ></div>
            </div>
          </div>
        </div>
        <div class="md:col-span-2 px-6">
          <div class="relative pt-20">
            <div class="flex mb-2 items-center justify-between">
              <div>
                <span
                  class="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200"
                >
                  總進度
                </span>
                <span
                  class="text-sm font-semibold inline-block py-1 px-2 uppercase text-pink-600"
                >
                  Nakaw
                </span>
                <span
                  class="text-sm font-semibold inline-block py-1 px-2 uppercase text-gray-600"
                >
                  {{ historyNakaw }} /{{ 100 * week }}
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block text-pink-600">
                  {{ percentage(historyNakaw / week) }} %
                </span>
              </div>
            </div>
            <div
              class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200"
            >
              <div
                :style="{ width: this.historyNakaw / this.week + '%' }"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-600"
              ></div>
            </div>
          </div>
          <div class="relative pt-10">
            <div class="flex mb-2 items-center justify-between">
              <div>
                <span
                  class="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200"
                >
                  總進度
                </span>
                <span
                  class="text-sm font-semibold inline-block py-1 px-2 uppercase text-green-600"
                >
                  Kilang
                </span>
                <span
                  class="text-sm font-semibold inline-block py-1 px-2 uppercase text-gray-600"
                >
                  {{ historyKilang }} /{{ 100 * week }}
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block text-green-600">
                  {{ percentage(historyKilang / week) }} %
                </span>
              </div>
            </div>
            <div
              class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200"
            >
              <div
                :style="{ width: this.historyKilang / this.week + '%' }"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600"
              ></div>
            </div>
          </div>
          <div class="relative pt-10">
            <div class="flex mb-2 items-center justify-between">
              <div>
                <span
                  class="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-600 bg-yellow-200"
                >
                  總進度
                </span>
                <span
                  class="text-sm font-semibold inline-block py-1 px-2 uppercase text-yellow-600"
                >
                  立恩
                </span>
                <span
                  class="text-sm font-semibold inline-block py-1 px-2 uppercase text-gray-600"
                >
                  {{ historyAhoho }} /{{ 100 * week }}
                </span>
              </div>
              <div class="text-right">
                <span
                  class="text-xs font-semibold inline-block text-yellow-600"
                >
                  {{ percentage(historyAhoho / week) }} %
                </span>
              </div>
            </div>
            <div
              class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-yellow-200"
            >
              <div
                :style="{ width: this.historyAhoho / this.week + '%' }"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-600"
              ></div>
            </div>
          </div>
        </div>
        <div class="md:col-span-6">
          <panel title="最近動態" style="min-height: 50%">
            <div class="flex flex-col">
              <div class="-my-2 overflow-auto sm:-mx-6 lg:-mx-8">
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
                            class="px-2 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          >
                            客戶名稱
                          </th>
                          <th
                            scope="col"
                            class="px-2 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          >
                            by
                          </th>
                          <th
                            scope="col"
                            class="px-2 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          >
                            訊息
                          </th>
                        </tr>
                      </thead>
                      <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="contact in weeklyContact" :key="contact.id">
                          <td class="px-6 py-1 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="ml-4">
                                <div class="text-md font-medium text-gray-900">
                                  <div>
                                    <router-link
                                      :to="{
                                        name: 'client',
                                        params: { clientId: contact.Client.id },
                                      }"
                                      >{{ contact.Client.name }}</router-link
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-1 whitespace-nowrap">
                            {{ contact.personInCharge }} /
                            {{ contact.contactType }}
                          </td>
                          <td class="px-6 py-1 whitespace-normal">
                            {{ contact.record }}
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
        <div class="md:col-span-2">
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
        <div class="md:col-span-2">
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
      weeklyNakaw: null,
      weeklyKilang: null,
      weeklyAhoho: null,
      historyNakaw: null,
      historyKilang: null,
      historyAhoho: null,
      week: null,
    };
  },
  methods: {
    lastContactDate(date) {
      return date.slice(0, 10);
    },
    percentage(num) {
      return num.toFixed(2);
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
    this.weeklyContact = (await ContactService.sinceThisWeek()).data.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    this.historyContact = (await ContactService.historyContact()).data.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    var today = new Date();
    var startday = new Date(2021, 1, 22, 0, 0, 0, 0);
    var diff = today.getTime() - startday.getTime();
    this.week = Math.ceil(diff / 86400000 / 7);

    this.weeklyCount = this.weeklyContact.length;

    this.weeklyNakaw = this.weeklyContact
      .filter((contact) => contact.personInCharge == "Nakaw")
      .filter((contact) => contact.isSuccess === true)
      .filter((contact) => contact.contactType != "簡訊").length;
    this.weeklyKilang = this.weeklyContact.filter(
      (contact) => contact.personInCharge == "Kilang"
    ).length;
    this.weeklyAhoho = this.weeklyContact.filter(
      (contact) => contact.personInCharge == "立恩"
    ).length;
    this.historyNakaw = this.historyContact
      .filter((contact) => contact.personInCharge == "Nakaw")
      .filter((contact) => contact.contactType != "簡訊").length;
    this.historyKilang = this.historyContact.filter(
      (contact) => contact.personInCharge == "Kilang"
    ).length;
    this.historyAhoho = this.historyContact.filter(
      (contact) => contact.personInCharge == "立恩"
    ).length;
  },
};
</script>
