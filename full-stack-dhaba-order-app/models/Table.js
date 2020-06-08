const db = require("../database");
var {DataTypes} = require("sequelize");
const sequelize = require('sequelize')

let Table = db.define(
  "table",
  {
    name: { type: DataTypes.STRING , allowNull: false },
    strength: { type: DataTypes.INTEGER , allowNull: false},
    floorNumber: { type: DataTypes.INTEGER , allowNull: false }
  },
  { timestamps: false });


module.exports = Table;