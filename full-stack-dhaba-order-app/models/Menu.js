const db = require("../database");
var {DataTypes} = require("sequelize");

let Menu = db.define(
  "menu",
  {
    itemName: { type: DataTypes.STRING , allowNull: false},
    cusineName: { type: DataTypes.STRING , allowNull: false},
    type: { type: DataTypes.STRING , allowNull: false},
    price :{ type: DataTypes.INTEGER , allowNull: false}
  },
  { timestamps: false });


module.exports = Menu;