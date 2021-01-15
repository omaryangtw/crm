const { Client } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const client = await Client.findAll({ limit: 10 });
      res.send(client);
    } catch (err) {
      res.status(500).send({
        error: "an error occured trying to fetch clients",
      });
    }
  },
  async post(req, res) {
    try {
      console.log("controller");
      const client = await Client.create(req.body);
      res.send(client);
    } catch (err) {
      res.status(500).send({
        error: "an error occured trying to create a client",
      });
    }
  },
};
