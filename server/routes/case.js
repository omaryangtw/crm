var express = require("express");
var router = express.Router();
const CaseController = require("../controllers/CaseController");

router.get("/", CaseController.index);
router.get('/by-client/:clientId', CaseController.getByClient)
router.post("/", (req, res) => {
  CaseController.post(req, res);
});
router.put("/:caseId", (req, res) => {
  CaseController.put(req, res);
});
router.get("/:caseId", (req, res) => {
  CaseController.display(req, res);
});
router.delete("/:caseId", CaseController.delete);

module.exports = router;
