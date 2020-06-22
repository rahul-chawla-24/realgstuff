const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://primeprime:prime@1234@dhwaniris-ssaes.mongodb.net/dhawaniris?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.Promise = global.Promise;
const conn = mongoose.connection;

conn.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = {
  conn,
};
