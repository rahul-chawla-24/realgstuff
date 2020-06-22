var express = require("express");
var router = express.Router();
var childApi = require("../../../controllers/api/v1/childs");
// const { upload } = require("../../../config/mongoose");

router.get("/", childApi.getAll);
router.get("/:id", childApi.getOne);
router.post("/", childApi.upload, childApi.create);
router.get("/image/:filename", childApi.getImage);

module.exports = router;
