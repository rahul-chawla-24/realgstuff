const sequelize = require("sequelize");


const db= new sequelize(`	postgres://pnmbmkjb:cwsPCRl6WHxAShglqRH3dv-ZmtYITGP-@ruby.db.elephantsql.com:5432/pnmbmkjb`);

// const db = new sequelize("covid19", "postgres", "rahul", {// database , user , password
//   host: "localhost",
//   dialect: "postgres"
// });

db.authenticate().then(() => {
  console.log("Database Connected");
});

db.sync().then(res => console.log('Tables Created'));
module.exports = db;
