const { sequelize, Client, Case, Contact } = require("../models");
const Promise = require("bluebird");
const clients = require("./clients.json");
const cases = require("./cases.json");
const families = require("./families.json");
const contacts = require("./contacts.json");
sequelize.sync({ force: true }).then(async function () {
  await Promise.all(
    clients.map((client) => {
      Client.create(client);
    })
  );
  await Promise.all(
    cases.map((case_) => {
      Case.create(case_);
    })
  );
  await Promise.all(
    contacts.map((contact) => {
      Contact.create(contact);
    })
  );
  await Promise.all(
    families.map((family) => {
      Client.findOne({ where: { id: family.ClientId } }).then((u2) => {
        Client.findOne({ where: { id: family.FamilyId } }).then((u1) => {
          u2.addFamily(u1, {
            through: { relationship: family.relationship },
          });
        });
      });
    })
  );
});
