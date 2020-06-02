var express = require("express");
var router = express.Router();
var path = require("path");

/* GET home page. */
var questionRouter = require("./questions");
var answerRouter = require("./answers");
var userRouter = require("./users");

if (process.env.NODE_ENV === "production") {
  router.use(express.static(path.join(__dirname, "/client/build")));
  router.get("*", function (req, res) {
    res.sendFile("index.html", {
      root: path.join(__dirname, "../client/build"),
    });
  });
}

router.use("/user", userRouter);
router.use("/answers", answerRouter);
router.use("/questions", questionRouter);

module.exports = router;
