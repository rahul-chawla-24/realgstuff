var express = require("express");
var router = express.Router();

var usersRouter = require("./users");
var childsRouter = require("./childs");
var districtsRouter = require("./districts");
var statesRouter = require("./states");
var employeesRouter = require("./employees");

router.use("/users", usersRouter);
router.use("/childs", childsRouter);
router.use("/districts", districtsRouter);
router.use("/states", statesRouter);
router.use("/employees", employeesRouter);

module.exports = router;
