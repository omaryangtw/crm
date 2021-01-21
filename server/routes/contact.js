var express = require("express");
var router = express.Router();
const ContactController = require("../controllers/ContactController");

router.post("/", (req, res) => {
  ContactController.post(req, res);
});
router.delete("/:clientId/:contactId", (req, res) => {
  ContactController.delete(req, res);
});

module.exports = router;