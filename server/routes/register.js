var express = require("express");
var router = express.Router();

router.post("/", (req, res) => {
  res.send({
    message: `${req.body.email}  Registered`,
  });
  console.log(req.body.email);
});

module.exports = router;
