var express = require("express");
var router = express.Router();
var stateApi = require("../../../controllers/api/v1/states");

router.get("/", stateApi.getAll);
router.get("/:id", stateApi.getOne);
router.post("/", stateApi.create);

module.exports = router;
