var express = require("express");
var router = express.Router();
const AuthenticationController = require("../controllers/AuthenticationController");
const AuthenticationControllerPolicy = require("../controllers/AuthenticationControllerPolicy");

router.post("/", (req, res) => {
  AuthenticationControllerPolicy.register(req, res),
    AuthenticationController.register(req, res);
});

module.exports = router;
