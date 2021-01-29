const { Client, Case, Family, Contact, sequelize } = require("../models");
const { or, like, not, and } = require("sequelize").Op;
module.exports = {
  async index(req, res) {
    try {
      let clients = null;
      const search = req.query.search;
      console.log(req.query);
      if (search) {
        clients = await Client.findAll({
          limit: 8,
          where: {
            [or]: ["name", "mobile", "mobileAlt"].map((key) => ({
              [key]: {
                [like]: `%${search}%`,
              },
            })),
          },
          include: { all: true, nested: true },
        });
      } else {
        clients = await Client.findAll({
          limit: 8,
          order: [["updatedAt", "DESC"]],
        });
      }

      res.send(clients);
    } catch (err) {
      res.status(500).send({
        error: "an error occured trying to fetch clients",
      });
    }
  },
  async indexAll(req, res) {
    try {
      let clients = null;
      clients = await Client.findAll({
        attributes: [
          "id",
          "sex",
          "name",
          "plainMountain",
          "group",
          "birthday",
          "IDN",
          "phone",
          "mobile",
          "city",
          "dist",
          "vill",
          "addr",
        ],
      });
      res.send(clients);
    } catch (err) {
      res.status(500).send({
        error: "an error occured trying to fetch clients",
      });
    }
  },
  async birthdaylist(req, res) {
    try {
      let clients = null;
      clients = await Client.findAll({
        attributes: [
          "id",
          "name",
          "birthday",
          "age",
          "phone",
          "mobile",
          "dist",
          "vill",
          "addr",
        ],
        where: {
          [and]: [
            {
              birthday: {
                [not]: null,
              },
              addr: {
                [not]: null,
              },
              [or]: [
                {
                  phone: {
                    [not]: null,
                  },
                },
                {
                  mobile: {
                    [not]: null,
                  },
                },
              ],
            },
          ],
        },
      });

      res.send(clients);
    } catch (err) {
      res.status(500).send({
        error: "an error occured trying to fetch clients",
      });
    }
  },
  async household(req, res) {
    try {
      let clients = null;
      clients = await Client.findAll({
        where: {
          addr: { [not]: null },
          isDead: false,
          canMail: true,
        },
        attributes: [
          "id",
          "name",
          sequelize.fn("min", sequelize.col("birthday")),
          "sex",
          "city",
          "dist",
          "vill",
          "addr",
        ],
        group: "addr",
      });

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
        include: [
          /* 
          { model: Contact, order: [Contact, "date", "DESC"] },
          { model: Case }, */
          { all: true, nested: true },
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
