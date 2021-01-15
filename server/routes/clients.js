var express = require("express");
var router = express.Router();
const ClientsController = require("../controllers/ClientsController");

router.get("/", ClientsController.index);
router.post("/", (req, res) => {
  console.log("router");
  ClientsController.post(req, res);
});
router.get("/:clientId", (req, res) => {
  ClientsController.display(req, res);
});

module.exports = router;
