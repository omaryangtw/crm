var express = require("express");
var router = express.Router();
const AuthenticationController = require("../controllers/AuthenticationController");
const AuthenticationControllerPolicy = require("../controllers/AuthenticationControllerPolicy");

router.post("/", (req, res) => {
  AuthenticationController.login(req, res);
});

module.exports = router;
