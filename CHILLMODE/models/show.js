const db = require('../confiq/sequelize');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
var {DataTypes} = require("sequelize");
const Actor = require('./actor');
const Director = require('./director');
const Genre = require('./genre'); 
const Season = require('./season');
const Episode = require('./episode');

let Show = db.define('show' ,{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      moviedbId : {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      adult: DataTypes.BOOLEAN,
      posterPath: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      backdropPath: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      originalTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      overview: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      language :{
        type: DataTypes.STRING,
        allowNull: false,
      },
},
{
  timestamps: false,
});

let ActorShows = db.define("ActorShows", {
  showId: {
    type: DataTypes.INTEGER,
    references: {
      model: Show, // 'Shows' would also work
      key: "id",
    },
  },
  actorId: {
    type: DataTypes.INTEGER,
    references: {
      model: Actor, // 'Actors' would also work
      key: "id",
    },
  },
},
{
  timestamps: false,
});

let DirectorShows = db.define("DirectorShows", {
  showId: {
    type: DataTypes.INTEGER,
    references: {
      model: Show, // 'Shows' would also work
      key: "id",
    },
  },
  directorId: {
    type: DataTypes.INTEGER,
    references: {
      model: Director, // 'Director' would also work
      key: "id",
    },
  },
},
{
  timestamps: false,
});

let GenreShows = db.define("GenreShows", {
  showId: {
    type: DataTypes.INTEGER,
    references: {
      model: Show, // 'Actors' would also work
      key: "id",
    },
  },
  genreId: {
    type: DataTypes.INTEGER,
    references: {
      model: Genre, // 'Genre' would also work
      key: "id",
    },
  },
},
{
  timestamps: false,
});


Show.belongsToMany(Director, { through: DirectorShows });
Director.belongsToMany(Show, { through: DirectorShows });
Show.belongsToMany(Actor, { through: ActorShows });
Actor.belongsToMany(Show, { through: ActorShows });
Show.belongsToMany(Genre, { through: GenreShows });
Genre.belongsToMany(Show, { through: GenreShows });
Show.hasMany(Season);
Season.belongsTo(Show);
Season.hasMany(Episode);
Episode.belongsTo(Season)
module.exports = Show ;