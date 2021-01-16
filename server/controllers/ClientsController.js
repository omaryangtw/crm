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
      const client = await Client.create(req.body);
      res.send(client);
    } catch (err) {
      res.status(500).send({
        error: "an error occured trying to create a client",
      });
    }
  },
  async put(req, res) {
    try {
      const client = await Client.update(req.body, {
        where: {
          id: req.params.clientId,
        },
      });
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: "an error occured trying to update a client",
      });
    }
  },
  async display(req, res) {
    try {
      const client = await Client.findOne({
        where: { id: req.params.clientId },
      });
      res.send(client);
    } catch (err) {
      res.status(500).send({
        error: "an error occured trying to fetch clients",
      });
    }
  },
};
