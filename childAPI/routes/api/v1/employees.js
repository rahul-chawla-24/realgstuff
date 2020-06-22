var express = require("express");
var router = express.Router();
var employeeApi = require("../../../controllers/api/v1/employees");

router.get("/", employeeApi.getAll);
router.get("/:id", employeeApi.getOne);
router.post("/", employeeApi.create);

module.exports = router;
