const db = require('../confiq/sequelize');
const Sequelize = require('sequelize');
var {DataTypes} = require("sequelize");

let User = db.define('user' ,{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      }
},
{
  timestamps: false,
});

module.exports = User;