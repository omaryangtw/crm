const { Case, Client } = require("../models");
const { or, like } = require("sequelize").Op;
module.exports = {
  async post(req, res) {
    try {
      Client.findOne({ where: { id: req.body.targetId } }).then((u1) => {
        Client.findOne({ where: { id: req.body.sourceId } }).then((u2) => {
          u2.addFamily(u1, {
            through: { relationship: req.body.relationship },
          });
        });
      });

      res.send(
        req.body.sourceId +
          ", " +
          req.body.targetId +
          ", " +
          req.body.relationship
      );
    } catch (err) {
      res.status(500).send({
        error: "an error occured trying to create a relationship",
      });
    }
  },
  async delete(req, res) {
    try {
      Client.findOne({ where: { id: req.params.targetId } }).then((u1) => {
        Client.findOne({ where: { id: req.params.sourceId } }).then((u2) => {
          u2.removeFamily(u1);
        });
      });
      res.send(req.params);
    } catch (err) {
      res.status(500).send({
        error: "an error occured trying to create a relationship",
      });
    }
  },
};
