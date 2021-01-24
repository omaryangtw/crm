const { Case, Client } = require("../models");
const { or, like } = require("sequelize").Op;
module.exports = {
  async index(req, res) {
    try {
      let cases = null;
      const search = req.query.search;

      if (search) {
        console.log("search string = ", search);
        cases = await Case.findAll({
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
        cases = await Case.findAll({ where: { status: "處理中" } });
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
      console.log(req.body);

      const case__ = await Case.create(req.body.case_);
      const client = await Client.findOne({ where: { id: req.body.clientId } });
      case__.setClient(client);
      res.send(case__);
    } catch (err) {
      res.status(500).send({
        error: "an error occured trying to create a case__",
      });
    }
  },
  async put(req, res) {
    try {
      const case__ = await Case.update(req.body, {
        where: {
          id: req.params.caseId,
        },
      });
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: "an error occured trying to update a case__",
      });
    }
  },
  async display(req, res) {
    try {
      const case__ = await Case.findOne({
        where: { id: req.params.caseId },
      });
      res.send(case__);
    } catch (err) {
      res.status(500).send({
        error: "an error occured trying to fetch cases",
      });
    }
  },
};
