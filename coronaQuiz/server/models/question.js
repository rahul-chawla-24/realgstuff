const db = require('../confiq/sequelize');
const Sequelize = require('sequelize');
const Answer = require("./answers");
var {DataTypes} = require("sequelize");


let Question = db.define('question' ,{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      text: DataTypes.TEXT,
},
{
  timestamps: false,
});

Question.hasMany(Answer);
Answer.belongsTo(Question);

module.exports = Question;