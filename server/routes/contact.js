var express = require("express");
var router = express.Router();
const ContactController = require("../controllers/ContactController");

router.post("/", (req, res) => {
  ContactController.post(req, res);
});
router.delete("/:clientId/:contactId", (req, res) => {
  ContactController.delete(req, res);
});
router.get("/", ContactController.index);
router.get("/all", ContactController.get);
router.get("/recent", ContactController.recent);
router.get("/since-this-week", ContactController.sinceThisWeek);
router.get("/history", ContactController.history);
module.exports = router;
