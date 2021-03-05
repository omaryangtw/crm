<template>
  <div>
    <div class="print-div" id="print_area">
      <p class="serial">案件編號:{{ caseId }}</p>
      <h1 class="pheader">Ingay穎艾達利辦公室服務案件</h1>

      <div class="pflex">
        <p class="pcell">日期</p>
        <p class="pcell">{{ caseDate }}</p>
        <p class="pcell">類別</p>
        <p class="pcell">{{ caseTypesMajor }} / {{ caseTypesMinor }}</p>
        <p class="pcell">承辦人</p>
        <p class="pcell">{{ casePersonInCharge }}</p>
      </div>
      <div class="pflex">
        <p class="pcell">姓名</p>
        <p class="pcell">{{ caseName }}</p>
        <p class="pcell">族別</p>
        <p class="pcell">{{ clientGroup }} / {{ clientPlain }}</p>
        <p class="pcell">手機</p>
        <p class="pcell">{{ clientMobile }} {{ clientPhone }}</p>
      </div>
      <div class="pflex">
        <p class="pcell">性別</p>
        <p class="pcell">{{ clientSex }}</p>
        <p class="pcell">身分證字號</p>
        <p class="pcell">{{ clientIDN }}</p>
        <p class="pcell">生日</p>
        <p class="pcell">{{ clientBirthday }}</p>
      </div>
      <div class="pflex">
        <p class="pcell">地址</p>
        <p class="pcell-addr">{{ clientAddr }}</p>
      </div>
      <div class="pflex">
        <p class="pcell">關係人</p>
        <p class="pcell-addr"></p>
      </div>
      <div class="pflex">
        <p class="pcell">案件狀況</p>
        <p class="pcell-note">{{ caseNote }}</p>
      </div>
      <div class="pflex">
        <p class="pcell">處理紀錄</p>
        <p class="pcell-note">{{ caseHandle }}</p>
      </div>
    </div>

    <button type="button" @click="print">Print Form</button>
  </div>
</template>

<script>
import printJS from "print-js";
export default {
  props: {
    case_: Object,
    client: Object,
    childPrint: Boolean,
  },
  data() {
    return {
      caseId: null,
      caseName: null,
      caseDate: null,
      caseTypesMajor: null,
      caseTypesMinor: null,
      casePersonInCharge: null,

      caseNote: null,
      caseHandle: null,
      clientGroup: null,
      clientPlain: null,
      clientBirthday: null,
      clientSex: null,
      clientIDN: null,
      clientMobile: null,
      clientPhone: null,
      clientAddr: null,
    };
  },
  methods: {
    print() {
      printJS({
        printable: "print_area",
        type: "html",
        targetStyles: ["*"],
        font_size: "16px",
      });
    },
  },
  watch: {
    childPrint: function () {
      this.print();
    },
    client: function () {
      if (this.client.plainMountain) {
        this.clientPlain = this.client.plainMountain;
      }
      this.caseId = this.case_.id;
      this.caseName = this.case_.name.split("/")[0];
      this.caseDate = this.case_.name.split("/")[1];
      this.clientGroup = this.client.group;
      this.clientBirthday = this.client.birthday;
      if (this.client.sex) {
        this.clientSex = this.client.sex === "male" ? "男" : "女";
      }
      this.clientIDN = this.client.IDN;
      this.clientMobile = this.client.mobile;
      this.clientPhone = this.client.phone;
      this.clientAddr =
        Strings.orEmpty(this.client.city) +
        Strings.orEmpty(this.client.dist) +
        Strings.orEmpty(this.client.vill) +
        Strings.orEmpty(this.client.addr);
      this.caseTypesMajor = this.case_.typesMajor;
      this.caseTypesMinor = this.case_.typesMinor;
      this.casePersonInCharge = this.case_.personInCharge;
      this.caseNote = this.case_.note;
      this.caseHandle = this.case_.handle;
    },
  },
};
const Strings = {};
Strings.orEmpty = function (entity) {
  return entity || "";
};
</script>

<style>
.print-div {
  font-size: larger;
  text-align: center;
}
.serial {
  text-decoration: underline;
  text-align: end;
}
.pheader {
  font-weight: 900;
  padding: 15px 0px;
}
.pflex {
  display: flex;
  justify-content: center;
}
.pcell {
  width: 16%;
  min-height: 50px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
}
.pblock {
  width: 16%;
  min-height: 50px;
  border: 1px solid black;
  font-size: 16px;
  font-weight: 700;
}
.pcell-addr {
  width: 80%;
  min-height: 50px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  padding: 5px;
  font-weight: 600;
}
.pcell-note {
  width: 80%;
  min-height: 300px;
  border: 1px solid black;
  white-space: pre-line;
  display: flex;
  padding: 5px;
  text-align: start;
  font-weight: 600;
}
</style>
