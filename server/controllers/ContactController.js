const { Contact, Client, sequelize } = require("../models");
const { or, like, gte, and, ne } = require("sequelize").Op;
module.exports = {
  async index(req, res) {
    try {
      let contacts = null;
      const search = req.query.search;

      if (search) {
        console.log("search string = ", search);
        contacts = await Contact.findAll({
          where: {
            [or]: ["name", "record"].map((key) => ({
              [key]: {
                [like]: `%${search}%`,
              },
            })),
          },
          include: [
            {
              model: Client,
            },
          ],
        });
      } else {
        contacts = await Contact.findAll({
          limit: 8,
          order: [["date", "desc"]],
        });
      }

      res.send(contacts);
    } catch (err) {
      res.status(500).send({
        error: "an error occured trying to fetch contacts",
      });
    }
  },
  async post(req, res) {
    try {
      const contact = await Contact.create(req.body.contact);
      const client = await Client.findOne({ where: { id: req.body.clientId } });
      contact.setClient(client);
      res.send(contact);
    } catch (err) {
      res.status(500).send({
        error: "an error occured trying to create a contact record",
      });
    }
  },
  async delete(req, res) {
    try {
      Contact.findOne({ where: { id: req.params.contactId } }).then((u1) => {
        Client.findOne({ where: { id: req.params.clientId } }).then((u2) => {
          u2.removeContact(u1);
          u1.destroy();
        });
      });

      res.send(req.params);
    } catch (err) {
      res.status(500).send({
        error: "an error occured trying to delete a contact record",
      });
    }
  },
  async get(req, res) {
    try {
      var d = new Date();
      var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6 : 1);
      var startday = d.setDate(diff);
      startday = new Date(startday);
      startday.setHours(0, 0, 0, 0);
      const records = await Contact.findAll({
        where: {
          [and]: {
            date: {
              [gte]: startday,
            },
            contactType: {
              [ne]: "簡訊",
            },
            isSuccess: {
              [ne]: false,
            },
          },
        },
        attributes: [
          ["personInCharge", "employee"],
          [sequelize.fn("count", sequelize.col("personInCharge")), "count"],
        ],
        order: [["date", "DESC"]],
        group: ["personInCharge"],
      });
      res.send(records);
    } catch (err) {
      res.status(500).send({
        error: "an error occured trying to get records",
      });
    }
  },
  async recent(req, res) {
    try {
      const records = await Client.findAll({
        where: {
          canCall: true,
        },
        include: [
          {
            model: Contact,
          },
        ],
        attributes: [
          ["id", "id"],
          ["name", "name"],
        ],
      });
      res.send(records);
    } catch (err) {
      res.status(500).send({
        error: "an error occured trying to get records",
      });
    }
  },
  async sinceThisWeek(req, res) {
    try {
      var d = new Date();
      var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6 : 1);
      var startday = d.setDate(diff);
      startday = new Date(startday);
      console.log(startday.setHours(0, 0, 0, 0));
      console.log(startday);
      const records = await Contact.findAll({
        where: {
          date: {
            [gte]: startday,
          },
        },
        include: [
          {
            model: Client,
          },
        ],
      });
      res.send(records);
    } catch (err) {
      res.status(500).send({
        error: "an error occured trying to get records",
      });
    }
  },
  async history(req, res) {
    try {
      var startday = new Date(2021, 1, 22, 0, 0, 0, 0);
      const records = await Contact.findAll({
        where: {
          date: {
            [gte]: startday,
          },
        },
      });
      res.send(records);
    } catch (err) {
      res.status(500).send({
        error: "an error occured trying to get records",
      });
    }
  },
};
