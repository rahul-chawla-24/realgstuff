const alert = require("../controllers/alert");
var express = require('express')
var router = express.Router()

router.post("/create",alert.createAlertLog);
router.get("/",alert.getAlertByBranch);


module.exports = router