var express = require("express");
var router = express.Router();
const FamilyController = require("../controllers/FamilyController");

router.post("/", (req, res) => {
  console.log(req.body);
  FamilyController.post(req, res);
});
router.delete("/:sourceId/:targetId", (req, res) => {
  FamilyController.delete(req, res);
});
router.get("/", FamilyController.get);
router.get("/backup", FamilyController.get);

module.exports = router;
