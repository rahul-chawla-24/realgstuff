const Movie = require("../models/movie");
const Actor = require("../models/actor");
const Director = require("../models/director");
const Genre = require("../models/genre");
const Show = require("../models/show");
const Season = require("../models/season");
const Episode = require("../models/episode");

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
          originalTitle,
          overview,
          rating,
          language,
          actorNames,
          directorNames,
          genreNames,
        },
      } = req;
      let show = await Show.create({
        moviedbId,
        adult,
        posterPath,
        backdropPath,
        name,
        originalTitle,
        overview,
        rating,
        language,
      });
      actorNames.forEach(async (actorName) => {
        {
          console.log(actorName);
          let actor = await Actor.findAll({ where: { name: actorName } });
          await show.addActor(actor);
        }
      });

      directorNames.forEach(async (directorName) => {
        {
          let director = await Director.findAll({
            where: { name: directorName },
          });
          await show.addDirector(director);
        }
      });

      genreNames.forEach(async (genreName) => {
        {
          let genre = await Genre.findAll({ where: { name: genreName } });
          await show.addGenre(genre);
        }
      });

      res.send(show);
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
          originalTitle,
          overview,
          rating,
          language,
        },
      } = req;

      const {
        params: { id },
      } = req;
      let show = await Show.update(
        {
          moviedbId,
          adult,
          posterPath,
          backdropPath,
          name,
          originalTitle,
          overview,
          rating,
          language,
        },
        { where: { id } }
      );
      res.send(show);
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error,
      });
    }
  },

  getAll: async (req, res) => {
    try {
      let show = await Show.findAll({ include :[Genre]});
      res.send(show);
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
      let show = await Show.findAll({
        where: { id },
        include: [
          { model: Season, include: [Episode] },
          { model: Genre, attributes: ["name"] },
          { model: Actor, attributes: ["name"] },
          { model: Director, attributes: ["name"] },
        ],
      });
      res.send(show);
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
      let show = await Show.destroy({ where: { id } });
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
