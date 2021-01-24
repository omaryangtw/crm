const { sequelize, Client } = require("../models");
const Promise = require("bluebird");
const clients = require("./clients.json");

sequelize.sync({ force: true }).then(async function () {
  await Promise.all(
    clients.map((client) => {
      Client.create(client);
    })
  );
});
