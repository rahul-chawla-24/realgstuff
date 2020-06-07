const db = require("../database");
var {DataTypes} = require("sequelize");

let Waiter = db.define(
  "waiter",
  {
    name: { type: DataTypes.STRING , allowNull: false},
    age: { type: DataTypes.INTEGER , allowNull: false},
    mobile: { type: DataTypes.CHAR(10) , allowNull: false},
    rating :{ type: DataTypes.INTEGER , allowNull: false},
    experience : {type: DataTypes.INTEGER , allowNull: false}
  },
  { timestamps: false });

module.exports = Waiter;