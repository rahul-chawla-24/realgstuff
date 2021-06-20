const pincode = require("../controllers/pincode");
var express = require('express')
var router = express.Router()

router.get("/",pincode.getPincodes);
module.exports = router