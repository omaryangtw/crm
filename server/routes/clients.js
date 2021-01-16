var express = require("express");
var router = express.Router();
const ClientsController = require("../controllers/ClientsController");

router.get("/", ClientsController.index);
router.post("/", (req, res) => {
  ClientsController.post(req, res);
});
router.put("/:clientId", (req, res) => {
  ClientsController.put(req, res);
});
router.get("/:clientId", (req, res) => {
  ClientsController.display(req, res);
});

module.exports = router;
