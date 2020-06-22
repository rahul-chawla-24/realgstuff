var express = require("express");
var router = express.Router();
var userApi = require("../../../controllers/api/v1/users");

router.post("/create-session", userApi.createSession);
router.post("/sign-up", userApi.signUp);

module.exports = router;
