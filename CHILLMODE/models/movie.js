const db = require("../confiq/sequelize");
const Sequelize = require("sequelize");
const bcrypt = require("bcryptjs");
var { DataTypes } = require("sequelize");
const Actor = require("./actor");
const Director = require("./director");
const Genre = require("./genre");

let Movie = db.define(
  "movie",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    moviedbId: {
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
    overview: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    originalTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    language: {
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
  }
);

let ActorMovies = db.define("ActorMovies", {
  movieId: {
    type: DataTypes.INTEGER,
    references: {
      model: Movie, // 'Actors' would also work
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

let DirectorMovies = db.define("DirectorMovies", {
  movieId: {
    type: DataTypes.INTEGER,
    references: {
      model: Movie, // 'Actors' would also work
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

let GenreMovies = db.define("GenreMovies", {
  movieId: {
    type: DataTypes.INTEGER,
    references: {
      model: Movie, // 'Actors' would also work
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

Movie.belongsToMany(Director, { through: DirectorMovies });
Director.belongsToMany(Movie, { through: DirectorMovies });
Movie.belongsToMany(Actor, { through: ActorMovies });
Actor.belongsToMany(Movie, { through: ActorMovies });
Movie.belongsToMany(Genre, { through: GenreMovies });
Genre.belongsToMany(Movie, { through: GenreMovies });

module.exports = Movie;