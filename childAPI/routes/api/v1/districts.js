var express = require("express");
var router = express.Router();
var districtApi = require("../../../controllers/api/v1/districts");

router.get("/", districtApi.getAll);
router.get("/:id", districtApi.getOne);
router.post("/", districtApi.create);


module.exports = router;
