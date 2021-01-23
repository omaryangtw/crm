<template>
  <!-- Question Listing Item Card -->
  <router-link :to="{ name: 'ViewCase', params: { caseId: caseId } }">
    <div
      class="bg-white rounded-lg shadow-sm hover:shadow-lg duration-500 px-2 sm:px-6 md:px-2 py-4 my-2 mx-2"
    >
      <div class="grid grid-cols-12 gap-3">
        <!-- Summary Column -->
        <div class="col-span-12 col-start-2 px-3 sm:px-0">
          <!-- Question Labels -->
          <div class="grid grid-cols-2 mt-4 my-auto">
            <!-- Categories  -->
            <div class="col-span-12 lg:col-span-8">
              <a
                :class="{
                  'bg-red-500': status === '處理中',
                  'bg-green-500': status === '結案',
                }"
                class="inline-block rounded-full text-white 
              
                           duration-300 
                            text-base font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-6 py-1 
                            opacity-90 hover:opacity-100"
              >
                {{ status }}
              </a>
              <a
                class="inline-block rounded-full text-white 
                            bg-yellow-500  duration-300 
                            text-base font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-6 py-1 
                            opacity-90 hover:opacity-100"
              >
                {{ typesMajor }}
              </a>
            </div>

            <!-- User -->
            <div
              class="col-none hidden mr-2 lg:block lg:col-start-9 lg:col-end-12"
            >
              <a href="#" class="flex items-center">
                <div class="text-gray-600 font-bold text-lg hover:underline">
                  {{ personInCharge }}
                </div>
              </a>
            </div>
          </div>
          <div class="mt-2">
            <a
              href="#"
              class="sm:text-sm md:text-md lg:text-lg text-gray-700 font-bold hover:underline"
            >
              {{ name }}
            </a>

            <p class="mt-2 text-gray-600 text-sm md:text-md">
              {{ note }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ItemCart",
  components: {},
  props: {
    name: String,
    caseId: Number,
    note: String,
    personInCharge: String,
    status: String,
    typesMajor: String,
    trackTime: String,
  },
  computed: {},
};
</script>

<style></style>
