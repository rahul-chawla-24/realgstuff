const db = require("../confiq/sequelize");
const Sequelize = require("sequelize");
const bcrypt = require("bcryptjs");
var { DataTypes } = require("sequelize");

let Season = db.define("season", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  seasonNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  releaseDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  overview: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  posterPath: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},
{
  timestamps: false,
});



module.exports = Season ;