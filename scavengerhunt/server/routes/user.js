const user = require("../controllers/user");
const multer = require('multer')
var express = require('express')
var router = express.Router()
const upload = multer({ dest: 'uploads/' });

router.post("/csv",upload.single("uploadCsv"),user.importCsv);
router.get("/:id",user.getUser);
module.exports = router