const Movie = require("../models/movie");
const Actor = require("../models/actor");
const Director = require("../models/director");
const Genre = require("../models/genre");

const controller = {
  add: async (req, res) => {
    try {
      const {
        body: {
          moviedbId,
          adult,
          posterPath,
          backdropPath,
          name,
          overview,
          originalTitle,
          language,
          rating,
          releaseDate,
          actorNames,
          directorNames,
          genreNames,
        },
      } = req;
      let movie = await Movie.create({
        moviedbId,
        adult,
        posterPath,
        backdropPath,
        name,
        overview,
        originalTitle,
        language,
        rating,
        releaseDate,
        directorId
      });

      actorNames.forEach(async (actorName) => {
        {
          let actor = await Actor.findAll({ where: { name: actorName } });
          await movie.addActor(actor);
        }
      });

      directorNames.forEach(async (directorName) => {
        {
          let director = await Director.findAll({
            where: { name: directorName },
          });
          await movie.addDirector(director);
        }
      });

      genreNames.forEach(async (genreName) => {
        {
          let genre = await Genre.findAll({ where: { name: genreName } });
          await movie.addGenre(genre);
        }
      });

      res.send(movie);
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error,
      });
    }
  },

  update: async (req, res) => {
    try {
      const {
        body: {
          moviedbId,
          adult,
          posterPath,
          backdropPath,
          name,
          overview,
          originalTitle,
          language,
          rating,
          releaseDate,
          directorId
        },
      } = req;

      const {
        params: { id },
      } = req;
      let movie = await Movie.update(
        {
          moviedbId,
          adult,
          posterPath,
          backdropPath,
          name,
          overview,
          originalTitle,
          language,
          rating,
          releaseDate,
          directorId
        },
        { where: { id } }
      );

      res.send(movie);
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error,
      });
    }
  },

  getAll: async (req, res) => {
    try {
      let movie = await Movie.findAll({
        include: [Actor, Genre, Director],
      });
      res.send(movie);
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error,
      });
    }
  },

  getOne: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let movie = await Movie.findAll({
        where: { id },
        include: [Actor, Genre, Director],
      });
      res.send(movie);
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error,
      });
    }
  },

  delete: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let movie = await Movie.destroy({ where: { id } });
      res.send("deleted successfully");
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error,
      });
    }
  },
};

module.exports = controller;
