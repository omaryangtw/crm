var express = require("express");
var router = express.Router();
const ClientsController = require("../controllers/ClientsController");

router.get("/", ClientsController.index);
router.get("/all", ClientsController.indexAll);
router.get("/backup", ClientsController.backup);
router.get("/household", ClientsController.household);
router.get("/birthdaylist", ClientsController.birthdaylist);
router.post("/", (req, res) => {
  ClientsController.post(req, res);
});
router.put("/:clientId", (req, res) => {
  ClientsController.put(req, res);
});
router.get("/:clientId", (req, res) => {
  ClientsController.display(req, res);
});
router.delete("/:clientId", ClientsController.delete);

module.exports = router;
