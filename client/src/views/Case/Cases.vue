<template>
  <div class="bg-gray-200 min-h-screen">
    <div class="m-auto sm:mt-0 pt-10 container">
      <div class="md:grid md:grid-cols-6 md:gap-6">
        <div class="md:col-span-1">
          <SearchCase />
        </div>
        <div class="md:col-span-5">
          <panel title="案件列表">
            <div class="flex flex-col">
              <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div
                  class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
                >
                  <div
                    class="shadow overflow-auto border-b border-gray-200 sm:rounded-lg"
                    style="height: 40rem"
                  >
                    <table
                      class="table-fixed min-w-full divide-y divide-gray-200"
                    >
                      <thead class="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            class="w-1/3 px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          >
                            案件名稱
                          </th>
                          <th
                            scope="col"
                            class="w-1/6 px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          >
                            狀態
                            <input
                              type="checkbox"
                              name="closed"
                              id="closed"
                              v-model="closed"
                            />結案
                          </th>
                          <th
                            scope="col"
                            class="w-1/6 px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          >
                            類型
                          </th>

                          <th
                            scope="col"
                            class="w-1/3 px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                          >
                            夥伴
                          </th>
                        </tr>
                      </thead>
                      <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="case__ in cases" :key="case__.id">
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="ml-4">
                                <div class="text-md font-medium text-gray-900">
                                  <router-link
                                    :to="{
                                      name: 'ViewCase',
                                      params: { caseId: case__.id },
                                    }"
                                    >{{ case__.name }}</router-link
                                  >
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-1 whitespace-nowrap">
                            <span
                              class="px-4 inline-flex text-md leading-5 font-semibold rounded-full"
                              :class="{
                                'bg-green-100': case__.status === '結案',
                                'text-green-800': case__.status === '結案',
                                'bg-red-100': case__.status === '處理中',
                                'text-red-800': case__.status === '處理中',
                              }"
                            >
                              {{ case__.status }}
                            </span>
                          </td>
                          <td class="px-6 py-1 whitespace-nowrap">
                            <div class="text-md text-gray-900">
                              {{ case__.typesMajor }}
                            </div>
                            <div class="text-md text-gray-500">
                              {{ case__.typesMinor }}
                            </div>
                          </td>
                          <td class="px-6 py-1 whitespace-nowrap">
                            <span class="text-md text-gray-500">
                              {{ case__.personInCharge }}
                            </span>
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
import CaseService from "../../services/CaseService.js";
import Panel from "../../components/Panel.vue";
import SearchCase from "../../components/SearchCase";
export default {
  name: "Cases",
  components: { Panel, SearchCase },
  data() {
    return {
      cases: null,
      search: "",
      closed: true,
    };
  },
  computed: {
    query() {
      return this.$route.query.search + this.closed.toString(2);
    },
  },
  watch: {
    query: {
      immediate: true,
      async handler() {
        this.cases = (await CaseService.index(this.$route.query.search)).data
          .filter((case_) => (this.closed ? case_ : case_.status === "處理中"))
          .sort((a, b) => b.id - a.id);
      },
    },
  },
};
</script>

<style></style>
