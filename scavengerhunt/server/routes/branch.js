const branch = require("../controllers/branch");
var express = require('express')
var router = express.Router()

router.get("/:id",branch.getBranches);
module.exports = router