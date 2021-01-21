const { Contact, Client } = require("../models");
const { or, like } = require("sequelize").Op;
module.exports = {
  async index(req, res) {
    try {
      let contacts = null;
      const search = req.query.search;

      if (search) {
        console.log("search string = ", search);
        contacts = await Contact.findAll({
          where: {
            [or]: ["name"].map((key) => ({
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
        contacts = await Contact.findAll({ id: {} });
      }

      res.send(cases);
    } catch (err) {
      res.status(500).send({
        error: "an error occured trying to fetch cases",
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
};