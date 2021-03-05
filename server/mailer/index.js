const axios = require("axios");
const express = require("express");
const cron = require("node-cron");
const fs = require("fs");

const { transporter, sender, receiever } = require("./secret");
/* const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: "",
    clientId: "",
    clientSecret: "",
    refreshToken: "",
    accessToken: "",
  },
});
  const sender = 'xxx@gmail.com'
  const receiver = 'xxx@gmail.com'
 */

app = express();
cron.schedule("40 23 * * *", function () {
  var date = new Date().toISOString().slice(0, 10);
  axios({
    method: "get",
    baseURL: "http://192.168.1.219:3000/",
    url: "/case/backup",
    "Content-Type": "application/json",
  })
    .then((result) => {
      var path = "../backup/cases/" + date + ".json";
      fs.writeFile(path, JSON.stringify(result.data), (err) => {
        if (err) throw err;
      });
      console.log("case backed up");
    })
    .catch((err) => {
      console.log(err);
    });
});
cron.schedule("45 23 * * *", function () {
  var date = new Date().toISOString().slice(0, 10);
  axios({
    method: "get",
    baseURL: "http://192.168.1.219:3000/",
    url: "/contact/backup",
    "Content-Type": "application/json",
  })
    .then((result) => {
      var path = "../backup/contacts/" + date + ".json";
      fs.writeFile(path, JSON.stringify(result.data), (err) => {
        if (err) throw err;
      });
      console.log("contact backed up");
    })
    .catch((err) => {
      console.log(err);
    });
});
cron.schedule("50 23 * * *", function () {
  var date = new Date().toISOString().slice(0, 10);
  axios({
    method: "get",
    baseURL: "http://192.168.1.219:3000/",
    url: "/clients/backup",
    "Content-Type": "application/json",
  })
    .then((result) => {
      var path = "../backup/clients/" + date + ".json";
      fs.writeFile(path, JSON.stringify(result.data), (err) => {
        if (err) throw err;
      });
      console.log("clients backed up");
    })
    .catch((err) => {
      console.log(err);
    });
});
cron.schedule("55 23 * * *", function () {
  var date = new Date().toISOString().slice(0, 10);
  axios({
    method: "get",
    baseURL: "http://192.168.1.219:3000/",
    url: "/family/backup",
    "Content-Type": "application/json",
  })
    .then((result) => {
      var path = "../backup/families/" + date + ".json";
      fs.writeFile(path, JSON.stringify(result.data), (err) => {
        if (err) throw err;
      });
      console.log("family backed up");
    })
    .catch((err) => {
      console.log(err);
    });
});

cron.schedule("0 0 * * 0", function () {
  axios({
    method: "get",
    baseURL: "http://192.168.1.219:3000/",
    url: "/clients/birthday-of-next-week",
    "Content-Type": "application/json",
  })
    .then((result) => {
      var text = "";
      for (i = 0; i < result.data.length; i++) {
        text +=
          result.data[i].name +
          "(" +
          result.data[i].age +
          "歲)" +
          "&emsp;" +
          result.data[i].birthday +
          "<br>" +
          (result.data[i].mobile != null
            ? result.data[i].mobile
            : "無手機號碼") +
          "&emsp;" +
          (result.data[i].phone != null ? result.data[i].phone : "無家用電話") +
          "<br>" +
          result.data[i].dist +
          result.data[i].vill +
          result.data[i].addr +
          "<br>" +
          "--------" +
          "<br>";
      }
      transporter.sendMail({
        from: sender,
        to: receiever,
        subject: "下周族人生日名單",
        html: text,
      });
      console.log(text);
    })
    .catch((err) => {
      console.error(err);
    });
  axios({
    method: "get",
    baseURL: "http://192.168.1.219:3000/",
    url: "/contact/all",
    "Content-Type": "application/json",
  })
    .then((result) => {
      var text = "";
      for (i = 0; i < result.data.length; i++) {
        text +=
          result.data[i].employee + "&emsp;" + result.data[i].count + "<br>";
      }
      transporter.sendMail({
        from: sender,
        to: receiever,
        subject: "本周電聯進度",
        html: text,
      });
      console.log(text);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.listen(3031);
