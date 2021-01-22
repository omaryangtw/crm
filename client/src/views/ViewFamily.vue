<template>
  <div>
    <panel title="家人名單">
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div
              class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
            >
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-200">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-lg font-semi-bold text-gray-700 uppercase tracking-wider"
                    >
                      移除
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-lg font-semi-bold text-gray-700 uppercase tracking-wider"
                    >
                      關係
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-lg font-semi-bold text-gray-700 uppercase tracking-wider"
                    >
                      姓名
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-lg font-semi-bold text-gray-700 uppercase tracking-wider"
                    >
                      手機
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-gray-100 divide-y divide-gray-200">
                  <tr
                    v-for="member in client.Family"
                    :key="member.id"
                    :class="{
                      'bg-red-500': member.isDead,
                      'text-gray-50': member.isDead,
                    }"
                  >
                    <td class="px-1 py-4 whitespace-nowrap">
                      <a
                        @click="remove(member)"
                        type="submit"
                        class="inline-flex justify-center py-2 px-5 border border-transparent shadow-sm text-lg font-bold rounded-full text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        -
                      </a>
                    </td>
                    <td class="px-1 py-4 whitespace-nowrap">
                      <div>{{ member.ClientClients.relationship }}</div>
                    </td>
                    <td class="px-1 py-4 whitespace-nowrap">
                      <div>
                        <button @click="redirect(member.id)">
                          {{ member.name }}
                        </button>
                      </div>
                    </td>
                    <td class="px-1 py-4 whitespace-nowrap">
                      <div>{{ member.mobile }}</div>
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
</template>

<script>
import Panel from "../components/Panel";
import FamilyService from "../services/FamilyService";
export default {
  name: "ViewFamily",
  components: {
    Panel,
  },
  inject: ["reload"],
  props: {
    client: {
      type: Object,
    },
  },
  methods: {
    async remove(him) {
      try {
        await FamilyService.remove(this.client.id, him.id);
        this.$router.go(0);
      } catch (err) {
        console.log(err);
      }
    },
    async redirect(clientId) {
      console.log("pressed");
      await this.$router.push({
        name: "client",
        params: { clientId: clientId },
      });
      await this.reload();
    },
  },
};
</script>

<style></style>
