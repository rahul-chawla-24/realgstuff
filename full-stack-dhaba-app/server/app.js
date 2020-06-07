var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var tableRouter = require("./routes/table");
var waiterRouter = require("./routes/waiter");
var menuRouter = require("./routes/menu");
var orderRouter = require("./routes/order");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/tables", tableRouter);
app.use("/waiters", waiterRouter);
app.use("/menus", menuRouter);
app.use("/orders", orderRouter);
if (process.env.NODE_ENV === "production") {
  router.use(express.static(path.join(__dirname, "/client/build")));
  router.get("*", function (req, res) {
    res.sendFile("index.html", {
      root: path.join(__dirname, "../client/build"),
    });
  });
}
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
