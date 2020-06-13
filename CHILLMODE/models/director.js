const db = require('../confiq/sequelize');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
var {DataTypes} = require("sequelize");

let Director = db.define('director' ,{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      }
},
{
  timestamps: false,
});

module.exports = Director ;