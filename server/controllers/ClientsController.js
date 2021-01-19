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
      await Client.create({
        name: "dummyFamily",
      });

      Client.findOne({ where: { name: req.body.name } }).then((u1) => {
        Client.findOne({ where: { name: "dummyFamily" } }).then((u2) => {
          u2.addFamily(u1, { through: { relationship: "aunt" } });
        });
      });

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
        include: [
          {
            model: Case,
          },
        ],
      });
      res.send(client);
    } catch (err) {
      res.status(500).send({
        error: "an error occured trying to fetch clients",
      });
    }
  },
};
