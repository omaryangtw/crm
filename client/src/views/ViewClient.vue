<template>
  <div class="bg-gray-200">
    <panel>
      <div class="m-auto sm:mt-0 container">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0 pt-8">
              <div class="flex justify-center">
                <h3
                  class="text-4xl font-semibold leading-6 "
                  :class="{ 'text-red-600': client.isDead }"
                >
                  {{ client.name }}
                </h3>
              </div>
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-gray-200 sm:p-6">
                  <div class="grid grid-cols-12 gap-6">
                    <div class="col-span-6 sm:col-start-6" v-if="client.isDead">
                      <label
                        for="isDead"
                        class="block text-lg sm:text-xl font-bold text-red-700"
                        >死亡</label
                      >
                    </div>
                    <div
                      class="col-span-6 sm:col-start-6"
                      v-if="client.disabledStatus"
                    >
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
                    <div class="col-span-6 sm:col-start-6">
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

                    <div class="col-span-6 sm:col-start-6">
                      <label
                        for="canCall"
                        class="block text-lg sm:text-xl font-semibold text-gray-700"
                        >電話</label
                      >
                      <input
                        disabled
                        id="canCall"
                        name="canCall"
                        value="ture"
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
                    <div class="col-span-6 sm:col-start-6">
                      <label
                        for="canMail"
                        class="block text-lg sm:text-xl font-semibold text-gray-700"
                        >郵寄</label
                      >
                      <input
                        disabled
                        id="canMail"
                        name="canMail"
                        value="ture"
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
          <div class="mt-5 md:mt-0 md:col-span-2">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-gray-200 sm:p-6">
                <div class="grid grid-cols-12 gap-x-6 gap-y-1">
                  <div class="col-span-4 sm:col-span-4">
                    <label
                      for="name"
                      class="block text-lg sm:text-xl font-semibold text-gray-700"
                      >姓名</label
                    >
                    <input
                      disabled
                      type="text"
                      name="name"
                      id="name"
                      autocomplete="given-name"
                      v-model="client.name"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg sm:text-xl border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>

                  <div class="col-span-4 sm:col-span-4">
                    <label
                      for="name_Alt"
                      class="block text-lg sm:text-xl font-semibold text-gray-700"
                      >族名</label
                    >
                    <input
                      disabled
                      type="text"
                      name="name_Alt"
                      id="name_Alt"
                      autocomplete="family-name"
                      v-model="client.nameAlt"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg sm:text-xl border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>

                  <div class="col-span-4 sm:col-span-4">
                    <label
                      for="sex"
                      class="block text-lg sm:text-xl font-semibold text-gray-700"
                      >性別</label
                    >
                    <div class="flex justify-around mt-2">
                      <div>
                        <input
                          disabled
                          id="male"
                          name="sex"
                          value="male"
                          v-model="client.sex"
                          type="radio"
                          class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                        />
                        <label
                          for="male"
                          class="ml-3 text-lg sm:text-xl font-semibold text-gray-700"
                        >
                          男
                        </label>
                      </div>
                      <div>
                        <input
                          disabled
                          id="female"
                          name="sex"
                          value="female"
                          v-model="client.sex"
                          type="radio"
                          class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 ml-12 sm:ml-5"
                        />
                        <label
                          for="female"
                          class="ml-3 text-lg sm:text-xl font-semibold text-gray-700"
                        >
                          女
                        </label>
                      </div>
                    </div>
                  </div>

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
                      autocomplete="email"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg sm:text-xl border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>
                  <div class="col-span-3 sm:col-span-3">
                    <label
                      for="group"
                      class="block text-lg sm:text-xl font-semibold text-gray-700"
                      >族別</label
                    >
                    <select
                      disabled
                      id="group"
                      name="group"
                      autocomplete="group"
                      v-model="client.group"
                      class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg sm:text-xl bg-gray-100"
                    >
                      <option value="Amis">阿美</option>
                      <option value="Atayal">泰雅</option>
                      <option value="Bunun">布農</option>
                      <option value="Kanakanavu">卡那卡那富 </option>
                      <option value="Kavalan">噶瑪蘭 </option>
                      <option value="Paiwan"> 排灣</option>
                      <option value="Rukai">魯凱 </option>
                      <option value="Saaroa"> 撒阿魯哇</option>
                      <option value="Saisiyat"> 賽夏</option>
                      <option value="Sakizaya"> 撒奇萊雅</option>
                      <option value="Seediq"> 賽德克</option>
                      <option value="Taroku"> 太魯閣</option>
                      <option value="Thao"> 邵</option>
                      <option value="Tsou"> 鄒</option>
                      <option value="Yami"> 雅美</option>
                    </select>
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
                      autocomplete="plainMountain"
                      v-model="client.plainMountain"
                      class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg sm:text-xl bg-gray-100"
                    >
                      <option value="plain">平原</option>
                      <option value="mountain">山原</option>
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
                      autocomplete="email"
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
                      autocomplete="email"
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
                      autocomplete="email"
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
                      autocomplete="email"
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
                      autocomplete="email"
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
                      autocomplete="email"
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
                      autocomplete="email"
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
                      autocomplete="email"
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
                      autocomplete="email"
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
                      autocomplete="email"
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
                      autocomplete="email"
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
                      autocomplete="email"
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
                      autocomplete="email"
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
                      autocomplete="email"
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
                      autocomplete="email"
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
                      autocomplete="email"
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
                      autocomplete="email"
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
                      autocomplete="email"
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
                      autocomplete="email"
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
                      autocomplete="email"
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

    <div class="m-auto sm:mt-8 container">
      <div class="md:grid md:grid-cols-2 md:gap-6">
        <div class="md:col-span-1">
          <CreateFamily :target="client" />
          <ViewFamily :client="client" />
        </div>
        <div class="md:col-span-1">
          <CreateContact :client="client" />

          <ViewContact :client="client" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClientsService from "../services/ClientsService";
import Panel from "../components/Panel";
import CreateFamily from "./CreateFamily";
import ViewFamily from "./ViewFamily";
import CreateContact from "./CreateContact";
import ViewContact from "./ViewContact.vue";
export default {
  name: "ViewClient",
  components: {
    Panel,
    CreateFamily,
    ViewFamily,
    CreateContact,
    ViewContact,
  },
  data() {
    return {
      clientId: null,
      client: {
        id: "",
      },
    };
  },
  methods: {
    edit() {
      this.$router.push(`/clients/${this.clientId}/edit`);
    },
  },
  async mounted() {
    this.clientId = this.$store.state.route.params.clientId;
    this.client = (await ClientsService.get(this.clientId)).data;
    console.log(this.client.birthday);
  },
  computed: {
    age: function() {
      return 2021 - parseInt(this.client.birthday);
    },
  },
};
</script>

<style></style>
