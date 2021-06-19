const alert = require("../controllers/alert");
var express = require('express')
var router = express.Router()

router.post("/create",alert.createAlertLog);
router.get("/:id",alert.getAlert);
router.get('/branch_alert',alert.getAlertByBranchApi)

module.exports = router