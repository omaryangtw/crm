const { Client, Case, Family } = require("../models");
const { or, like } = require("sequelize").Op;
module.exports = {
  async index(req, res) {
    try {
      let clients = null;
      const search = req.query.search;

      if (search) {
        clients = await Client.findAll({
          where: {
            [or]: ["name", "sex"].map((key) => ({
              [key]: {
                [like]: `%${search}%`,
              },
            })),
          },
          include: { all: true, nested: true },
        });
      } else {
        clients = await Client.findAll({
          limit: 10,
          include: { all: true, nested: true },
        });
      }

      res.send(clients);
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
        include: { all: true, nested: true },
      });
      res.send(client);
    } catch (err) {
      res.status(500).send({
        error: "an error occured trying to fetch clients",
      });
    }
  },
};
