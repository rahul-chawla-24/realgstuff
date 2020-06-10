const mongoose = require('mongoose');
const uri = "mongodb+srv://rahulchawlarc:rahul@2405@youtube-clone-gbjpi.mongodb.net/youtube-clone?retryWrites=true&w=majority";

// const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).then(async (res) => {
  console.log("Mongo connection established successfully!");
}, err => {
  console.log("Mongo connection established unsuccessfully", err);
});