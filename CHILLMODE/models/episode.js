const db = require("../confiq/sequelize");
const Sequelize = require("sequelize");
const bcrypt = require("bcryptjs");
var { DataTypes } = require("sequelize");

let Episode = db.define("episode", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  episodeNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  overview: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  seasonNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  stillPath: {
    type: DataTypes.STRING,
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
},
{
  timestamps: false,
});

module.exports = Episode ;