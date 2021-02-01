<template>
  <div class="bg-gray-200">
    <SlideOvers
      :clientId="clientIdModified"
      :slideOverSwitch="slideOverSwitch"
      @closePanel="closePanel"
    />
    <panel>
      <div
        class="fixed z-10 inset-0 overflow-y-auto "
        v-if="modalContactCreate"
      >
        <div
          class="flex items-end justify-center  min-h-screen px-4 text-center sm:block sm:p-0"
        >
          <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
          <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
            >&#8203;</span
          >
          <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
          <div
            class="inline-block relative align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div
              class="flex justify-between px-8 py-2 bg-gradient-to-tr from-gray-100 to-yellow-50"
            >
              <div
                class="block text-lg sm:text-3xl font-semibold text-gray-700"
              >
                增加通聯記錄
              </div>
              <div class=" ">
                <button class="z-30" @click="closeModal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 18 18"
                  >
                    <path
                      d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <CreateContact
              :client="client"
              @close-modal="closeModal"
              class="bg-gradient-to-br from-gray-100 to-yellow-50"
            />
          </div>
        </div>
      </div>
      <div class="fixed z-10 inset-0 overflow-y-auto " v-if="modalContact">
        <div
          class="flex items-end justify-center  min-h-screen px-4 text-center sm:block sm:p-0"
        >
          <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
          <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
            >&#8203;</span
          >
          <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
          <div
            class="p-3 inline-block relative align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div
              class="flex justify-between px-8 py-2 bg-gradient-to-tr from-gray-100 to-yellow-50"
            >
              <div
                class="block text-lg sm:text-3xl font-semibold text-gray-700"
              >
                通聯記錄
              </div>
              <div>
                <button class="z-30" @click="closeModal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 18 18"
                  >
                    <path
                      d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <ViewContact
              :client="client"
              @close-modal="closeModal"
              class="bg-gradient-to-br from-gray-100 to-yellow-50"
            />
          </div>
        </div>
      </div>
      <div class="fixed z-10 inset-0 overflow-y-auto " v-if="modalFamily">
        <div
          class="flex items-end justify-center  min-h-screen px-4 text-center sm:block sm:p-0"
        >
          <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
          <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
            >&#8203;</span
          >
          <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
          <div
            class="inline-block relative align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div
              class="flex justify-between px-8 py-2 bg-gradient-to-tr from-gray-100 to-yellow-50"
            >
              <div
                class="block text-lg sm:text-3xl font-semibold text-gray-700"
              >
                家人名單
              </div>
              <div class=" ">
                <button class="z-30" @click="closeModal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 18 18"
                  >
                    <path
                      d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <ViewFamily
              :client="client"
              @close-modal="closeModal"
              class="bg-gradient-to-br from-gray-100 to-yellow-50"
            />
          </div>
        </div>
      </div>
      <div class="fixed z-10 inset-0 overflow-y-auto " v-if="modalFamilyCreate">
        <div
          class="flex items-end justify-center  min-h-screen px-4 text-center sm:block sm:p-0"
        >
          <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
          <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
            >&#8203;</span
          >
          <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
          <div
            class="inline-block relative align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div
              class="flex justify-between px-8 py-2 bg-gradient-to-tr from-gray-100 to-yellow-50"
            >
              <div
                class="block text-lg sm:text-3xl font-semibold text-gray-700"
              >
                增加家人名單
              </div>
              <div class=" ">
                <button class="z-30" @click="closeModal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 18 18"
                  >
                    <path
                      d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <CreateFamily
              :target="client"
              @close-modal="closeModal"
              class="bg-gradient-to-br from-gray-100 to-yellow-50"
            />
          </div>
        </div>
      </div>

      <div class="absolute right-8 flex flex-col m-2">
        <button
          @click="slideOverSwitch = true"
          class=" top-96 right-8 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg sm:text-xl font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          案件紀錄
        </button>
        <div class="flex mt-10">
          <button
            @click="modalFamily = true"
            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg sm:text-xl font-semibold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            家人名單
          </button>
          <button
            @click="modalFamilyCreate = true"
            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg sm:text-xl font-semibold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            +
          </button>
        </div>
        <div class="mt-10">
          <button
            @click="modalContact = true"
            class="inline-flex justify-start py-2 px-4 border border-transparent shadow-sm text-lg sm:text-xl font-semibold rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            通聯記錄
          </button>
          <button
            @click="modalContactCreate = true"
            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg sm:text-xl font-semibold rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            +
          </button>
        </div>
      </div>

      <div class="m-auto sm:mt-0 container">
        <div class="md:grid md:grid-cols-4 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0 pt-8">
              <div class="flex justify-center">
                <div v-show="client.sex === 'male'">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    focusable="false"
                    style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
                    class="h-10 w-10 mr-2"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 9c1.29 0 2.5.41 3.47 1.11L17.58 5H13V3h8v8h-2V6.41l-5.11 5.09c.7 1 1.11 2.2 1.11 3.5a6 6 0 0 1-6 6a6 6 0 0 1-6-6a6 6 0 0 1 6-6m0 2a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4z"
                      fill="#3B82F6"
                    />
                  </svg>
                </div>
                <div v-show="client.sex === 'female'">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    focusable="false"
                    class="h-10 w-10 mr-2"
                    style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 4a6 6 0 0 1 6 6c0 2.97-2.16 5.44-5 5.92V18h2v2h-2v2h-2v-2H9v-2h2v-2.08c-2.84-.48-5-2.95-5-5.92a6 6 0 0 1 6-6m0 2a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4z"
                      fill="#EF4444"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    class="text-4xl font-semibold leading-6 "
                    :class="{ 'text-red-600': client.isDead }"
                  >
                    {{ client.name }}
                  </h3>
                  <span
                    class="block text-xl sm:text-2xl font-semibold text-gray-700 leading-3 h-6"
                  >
                    {{ client.nameAlt }}
                  </span>
                </div>
              </div>
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-gray-200 sm:p-6">
                  <div class="grid grid-cols-12 gap-6">
                    <div class="col-span-12" v-if="client.isDead">
                      <label
                        for="isDead"
                        class="block text-lg sm:text-xl font-bold text-red-700"
                        >死亡</label
                      >
                    </div>
                    <div class="col-span-12" v-if="client.disabledStatus">
                      <label
                        for="disabledStatus"
                        class="block text-lg sm:text-xl font-semibold text-gray-700"
                        >身心障礙</label
                      >
                      <div
                        class="block text-lg sm:text-xl font-semibold text-red-300"
                        v-if="client.disabledStatus == 'light'"
                      >
                        輕度
                      </div>
                      <div
                        class="block text-lg sm:text-xl font-semibold text-red-500"
                        v-if="client.disabledStatus == 'mid'"
                      >
                        中度
                      </div>
                      <div
                        class="block text-lg sm:text-xl font-semibold text-red-700"
                        v-if="client.disabledStatus == 'heavy'"
                      >
                        重度
                      </div>
                    </div>
                    <div class="col-span-12" v-if="client.incomeStatus">
                      <label
                        for="incomeStatus"
                        class="block text-lg sm:text-xl font-semibold text-gray-700"
                        >中低收入戶</label
                      >
                      <div
                        class="block text-lg sm:text-xl font-semibold text-red-500"
                        v-if="client.incomeStatus == 'low'"
                      >
                        低收
                      </div>
                      <div
                        class="block text-lg sm:text-xl font-semibold text-red-500"
                        v-if="client.incomeStatus == 'mid-low'"
                      >
                        中低收
                      </div>
                      <div
                        class="block text-lg sm:text-xl font-semibold text-red-500"
                        v-if="client.incomeStatus == 'mid-low-elderly'"
                      >
                        中低收老人
                      </div>
                    </div>

                    <div class="col-span-12">
                      <label
                        for="canCall"
                        class="block text-lg sm:text-xl font-semibold text-gray-700"
                        >電話</label
                      >
                      <input
                        disabled
                        id="canCall"
                        name="canCall"
                        value="true"
                        v-model="client.canCall"
                        type="radio"
                        class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
                      />
                      <label
                        for="canCall"
                        class="ml-3 text-lg sm:text-xl font-semibold text-gray-700"
                      >
                        可
                      </label>

                      <input
                        disabled
                        id="cannotCall"
                        name="canCall"
                        value="false"
                        v-model="client.canCall"
                        type="radio"
                        class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 ml-12"
                      />
                      <label
                        for="cannotCall"
                        class="ml-3 text-lg sm:text-xl font-semibold text-gray-700"
                      >
                        不可
                      </label>
                    </div>
                    <div class="col-span-12 ">
                      <label
                        for="canMail"
                        class="block text-lg sm:text-xl font-semibold text-gray-700"
                        >郵寄</label
                      >
                      <input
                        disabled
                        id="canMail"
                        name="canMail"
                        value="true"
                        v-model="client.canMail"
                        type="radio"
                        class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
                      />
                      <label
                        for="canMail"
                        class="ml-3 text-lg sm:text-xl font-semibold text-gray-700"
                      >
                        可
                      </label>

                      <input
                        disabled
                        id="cannotMail"
                        name="cannotMail"
                        value="false"
                        v-model="client.canMail"
                        type="radio"
                        class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 ml-12"
                      />
                      <label
                        for="cannotCall"
                        class="ml-3 text-lg sm:text-xl font-semibold text-gray-700"
                      >
                        不可
                      </label>
                    </div>
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-200 text-center sm:px-6 mt-24">
                  <button
                    @click="edit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg sm:text-xl font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    編輯
                  </button>
                  <button
                    class="ml-10 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg sm:text-xl font-semibold rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    刪除
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-3">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-gray-200 sm:p-6">
                <div class="grid grid-cols-12 gap-x-6 gap-y-1">
                  <div class="col-span-4 sm:col-span-4 ">
                    <label
                      for="birthday"
                      class="block text-lg sm:text-xl font-semibold text-gray-700"
                      >生日</label
                    >
                    <input
                      disabled
                      type="date"
                      id="birthday"
                      class="block text-lg sm:text-xl font-medium text-gray-700 w-11/12 bg-gray-100"
                      v-model="client.birthday"
                    />
                  </div>

                  <div class="col-start-5 col-span-2">
                    <label
                      for="age"
                      class="block text-lg sm:text-xl font-semibold text-gray-700"
                      >年紀</label
                    >
                    <div class="flex mt-2">
                      <span
                        v-if="age"
                        class="block text-xl sm:text-2xl font-semibold text-gray-700 ml-3 lg:ml-6"
                        >{{ age }}
                      </span>

                      <span
                        v-if="age"
                        class="block text-xl sm:text-2xl font-semibold text-gray-700 ml-3 lg:ml-6"
                        >歲
                      </span>
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-6">
                    <label
                      for="IDN"
                      class="block text-lg sm:text-xl font-semibold text-gray-700"
                      >身分證號</label
                    >
                    <input
                      disabled
                      type="text"
                      name="IDN"
                      v-model="client.IDN"
                      id="IDN"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg sm:text-xl border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>
                  <div class="col-span-3 sm:col-span-3">
                    <label
                      for="group"
                      class="block text-lg sm:text-xl font-semibold text-gray-700"
                      >族別</label
                    >
                    <input
                      disabled
                      type="text"
                      name="group"
                      v-model="client.group"
                      id="group"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg sm:text-xl border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>
                  <div class="col-span-3 sm:col-span-3">
                    <label
                      for="plainMountain"
                      class="block text-lg sm:text-xl font-semibold text-gray-700"
                      >平原/山原</label
                    >
                    <select
                      disabled
                      id="plainMountain"
                      name="plainMountain"
                      v-model="client.plainMountain"
                      class="mt-1 block w-full py-2 px-3 border  bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg sm:text-xl "
                    >
                      <option value="平原">平原</option>
                      <option value="山原">山原</option>
                    </select>
                  </div>
                  <div class="col-span-6 sm:col-span-6">
                    <label
                      for="tribe"
                      class="block text-lg sm:text-xl font-semibold text-gray-700"
                      >部落</label
                    >
                    <input
                      disabled
                      type="text"
                      name="tribe"
                      id="tribe"
                      v-model="client.tribe"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg sm:text-xl border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>

                  <div class="hidden sm:block col-span-12" aria-hidden="true">
                    <div class="py-3">
                      <div class="border-t border-gray-400"></div>
                    </div>
                  </div>

                  <div class="col-span-3 sm:col-span-3">
                    <label
                      for="mobile"
                      class="block text-lg sm:text-xl font-semibold text-gray-700"
                      >手機1</label
                    >
                    <input
                      disabled
                      type="text"
                      name="mobile"
                      id="mobile"
                      v-model="client.mobile"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg sm:text-xl border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>

                  <div class="col-span-3 sm:col-span-3">
                    <label
                      for="mobileNote"
                      class="block text-lg sm:text-xl font-semibold text-gray-700"
                      >備註</label
                    >
                    <input
                      disabled
                      type="text"
                      name="mobileNote"
                      id="mobileNote"
                      v-model="client.mobileNote"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg sm:text-xl border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>
                  <div class="col-span-3 sm:col-span-3">
                    <label
                      for="mobileAlt"
                      class="block text-lg sm:text-xl font-semibold text-gray-700"
                      >手機2</label
                    >
                    <input
                      disabled
                      type="text"
                      name="mobileAlt"
                      id="mobileAlt"
                      v-model="client.mobileAlt"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg sm:text-xl border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>

                  <div class="col-span-3 sm:col-span-3">
                    <label
                      for="mobileAltNote"
                      class="block text-lg sm:text-xl font-semibold text-gray-700"
                      >備註</label
                    >
                    <input
                      disabled
                      type="text"
                      name="mobileAltNote"
                      id="mobileAltNote"
                      v-model="client.mobileAltNote"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg sm:text-xl border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>
                  <div class="col-span-3 sm:col-span-3">
                    <label
                      for="phone"
                      class="block text-lg sm:text-xl font-semibold text-gray-700"
                      >家用1</label
                    >
                    <input
                      disabled
                      type="text"
                      name="phone"
                      id="phone"
                      v-model="client.phone"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg sm:text-xl border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>

                  <div class="col-span-3 sm:col-span-3">
                    <label
                      for="phoneNote"
                      class="block text-lg sm:text-xl font-semibold text-gray-700"
                      >備註</label
                    >
                    <input
                      disabled
                      type="text"
                      name="phoneNote"
                      id="phoneNote"
                      v-model="client.phoneNote"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg sm:text-xl border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>
                  <div class="col-span-3 sm:col-span-3">
                    <label
                      for="phoneAlt"
                      class="block text-lg sm:text-xl font-semibold text-gray-700"
                      >家用2</label
                    >
                    <input
                      disabled
                      type="text"
                      name="phoneAlt"
                      id="phoneAlt"
                      v-model="client.phoneAlt"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg sm:text-xl border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>

                  <div class="col-span-3 sm:col-span-3">
                    <label
                      for="phoneAltNote"
                      class="block text-lg sm:text-xl font-semibold text-gray-700"
                      >備註</label
                    >
                    <input
                      disabled
                      type="text"
                      name="phoneAltNote"
                      id="phoneAltNote"
                      v-model="client.phoneAltNote"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg sm:text-xl border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>

                  <div class="hidden sm:block col-span-12" aria-hidden="true">
                    <div class="py-3">
                      <div class="border-t border-gray-400"></div>
                    </div>
                  </div>

                  <div class="col-span-2 sm:col-span-2">
                    <label
                      for="city"
                      class="block text-lg sm:text-xl font-semibold text-gray-700"
                      >縣市</label
                    >
                    <input
                      disabled
                      type="text"
                      name="city"
                      id="city"
                      v-model="client.city"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg sm:text-xl border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>
                  <div class="col-span-2 sm:col-span-2">
                    <label
                      for="dist"
                      class="block text-lg sm:text-xl font-semibold text-gray-700"
                      >區</label
                    >
                    <input
                      disabled
                      type="text"
                      name="dist"
                      id="dist"
                      v-model="client.dist"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg sm:text-xl border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>
                  <div class="col-span-2 sm:col-span-2">
                    <label
                      for="vill"
                      class="block text-lg sm:text-xl font-semibold text-gray-700"
                      >里</label
                    >
                    <input
                      disabled
                      type="text"
                      name="vill"
                      id="vill"
                      v-model="client.vill"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg sm:text-xl border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>

                  <div class="col-span-4 sm:col-span-4">
                    <label
                      for="addr"
                      class="block text-lg sm:text-xl font-semibold text-gray-700"
                      >地址</label
                    >
                    <input
                      disabled
                      type="text"
                      name="addr"
                      id="addr"
                      v-model="client.addr"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg sm:text-xl border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>
                  <div class="col-span-2 sm:col-span-2">
                    <label
                      for="addrNote"
                      class="block text-lg sm:text-xl font-semibold text-gray-700"
                      >備註</label
                    >
                    <input
                      disabled
                      type="text"
                      name="addrNote"
                      id="addrNote"
                      v-model="client.addrNote"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg sm:text-xl border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>

                  <div class="col-span-2 sm:col-span-2">
                    <label
                      v-if="client.addr"
                      for="cityAlt"
                      class="block text-lg sm:text-xl font-semibold text-gray-700"
                      >縣市</label
                    >
                    <input
                      disabled
                      v-if="client.addr"
                      type="text"
                      name="cityAlt"
                      id="cityAlt"
                      v-model="client.cityAlt"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg sm:text-xl border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>
                  <div class="col-span-2 sm:col-span-2">
                    <label
                      v-if="client.addr"
                      for="distAlt"
                      class="block text-lg sm:text-xl font-semibold text-gray-700"
                      >區</label
                    >
                    <input
                      disabled
                      v-if="client.addr"
                      type="text"
                      name="distAlt"
                      id="distAlt"
                      v-model="client.distAlt"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg sm:text-xl border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>
                  <div class="col-span-2 sm:col-span-2">
                    <label
                      v-if="client.addr"
                      for="villAlt"
                      class="block text-lg sm:text-xl font-semibold text-gray-700"
                      >里</label
                    >
                    <input
                      disabled
                      v-if="client.addr"
                      type="text"
                      name="villAlt"
                      id="villAlt"
                      v-model="client.villAlt"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg sm:text-xl border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>

                  <div class="col-span-4 sm:col-span-4">
                    <label
                      v-if="client.addr"
                      for="addrAlt"
                      class="block text-lg sm:text-xl font-semibold text-gray-700"
                      >地址</label
                    >
                    <input
                      disabled
                      v-if="client.addr"
                      type="text"
                      name="addrAlt"
                      id="addrAlt"
                      v-model="client.addrAlt"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg sm:text-xl border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>
                  <div class="col-span-2 sm:col-span-2">
                    <label
                      v-if="client.addr"
                      for="addrAltNote"
                      class="block text-lg sm:text-xl font-semibold text-gray-700"
                      >備註</label
                    >
                    <input
                      disabled
                      v-if="client.addr"
                      type="text"
                      name="addrAltNote"
                      id="addrAltNote"
                      v-model="client.addrAltNote"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg sm:text-xl border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>

                  <div class="col-span-12 sm:col-span-12">
                    <label
                      for="note"
                      class="block text-lg sm:text-xl font-semibold text-gray-700"
                      >註記</label
                    >
                    <textarea
                      disabled
                      type="text"
                      name="note"
                      id="note"
                      v-model="client.note"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg sm:text-xl border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>
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
import ClientsService from "../../services/ClientsService";
import Panel from "../../components/Panel";
import CreateFamily from "../Family/CreateFamily";
import ViewFamily from "../Family/ViewFamily";
import CreateContact from "../Contact/CreateContact";
import ViewContact from "../Contact/ViewContact.vue";
import SlideOvers from "../../components/SlideOvers.vue";
export default {
  name: "ViewClient",
  components: {
    Panel,
    CreateFamily,
    ViewFamily,
    CreateContact,
    ViewContact,
    SlideOvers,
  },
  data() {
    return {
      clientId: null,
      client: {
        id: "",
      },
      slideOverSwitch: false,
      modalContact: false,
      modalContactCreate: false,
      modalFamily: false,
      modalFamilyCreate: false,
    };
  },
  methods: {
    edit() {
      this.$router.push(`/clients/${this.clientId}/edit`);
    },
    closePanel() {
      this.slideOverSwitch = false;
    },
    closeModal() {
      this.modalContact = false;
      this.modalContactCreate = false;
      this.modalFamily = false;
      this.modalFamilyCreate = false;
    },
  },
  async mounted() {
    this.clientId = this.$store.state.route.params.clientId;
    this.client = (await ClientsService.get(this.clientId)).data;
  },
  computed: {
    age: function() {
      return 2021 - parseInt(this.client.birthday);
    },
    clientIdModified: function() {
      return parseInt(this.clientId);
    },
  },
};
</script>

<style></style>
