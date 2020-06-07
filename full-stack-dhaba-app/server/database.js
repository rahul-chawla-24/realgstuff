const sequelize = require("sequelize");
const db= new sequelize(`postgres://nkaalxfj:XQZT9qXEqohvLZcl9V1RjDGW3LqhzFPj@ruby.db.elephantsql.com:5432/nkaalxfj`);
4
// const db = new sequelize("my-dhaba", "postgres", "rahul", {// database , user , password
//   host: "localhost",
//   dialect: "postgres"
// });

db.authenticate().then(() => {
  console.log("Database Connected");
});

db.sync().then(res => console.log('Tables Created'));
module.exports = db;
