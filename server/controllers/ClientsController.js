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
          where: {
            [or]: [
              "name",
              "mobile",
              "mobileAlt",
              "mobileNote",
              "mobileAltNote",
              "phone",
              "phoneAlt",
              "phoneNote",
              "phoneAltNote",
              "dist",
              "distAlt",
              "vill",
              "villAlt",
              "addr",
              "addrAlt",
              "addrNote",
              "addrAltNote",
              "note",
            ].map((key) => ({
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
          "birthMonth",
          "age",
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
  async backup(req, res) {
    try {
      let clients = null;
      clients = await Client.findAll({
        attributes: [
          "id",
          "name",
          "nameAlt",
          "IDN",
          "sex",
          "birthday",
          "isDead",
          "incomeStatus",
          "disabledStatus",
          "plainMountain",
          "group",
          "tribe",
          "canCall",
          "phone",
          "phoneNote",
          "phoneAlt",
          "phoneAltNote",
          "mobile",
          "mobileNote",
          "mobileAlt",
          "mobileAltNote",
          "canMail",
          "city",
          "cityAlt",
          "dist",
          "distAlt",
          "vill",
          "villAlt",
          "addr",
          "addrAlt",
          "addrNote",
          "addrAltNote",
          "note",
          "createdAt",
          "updatedAt",
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
  async delete(req, res) {
    try {
      const client = await Client.findOne({
        where: { id: req.params.clientId },
      });
      client.destroy();
      res.send(req.params.clientId);
    } catch {
      res.status(500).send({
        error: "an error occured trying to delete a client",
      });
    }
  },
};
