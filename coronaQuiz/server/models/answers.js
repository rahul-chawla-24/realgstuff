const db = require('../confiq/sequelize');
const Sequelize = require('sequelize');
var {DataTypes} = require("sequelize");

let Answer = db.define('answer' ,{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      text: DataTypes.TEXT,
      correct : DataTypes.BOOLEAN,
      description : DataTypes.TEXT
},
{
  timestamps: false,
});

module.exports = Answer;