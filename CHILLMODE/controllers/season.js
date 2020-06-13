const Movie = require("../models/movie");
const Actor = require("../models/actor");
const Director = require("../models/director");
const Genre = require("../models/genre");
const Season = require('../models/season');
const Show = require("../models/show");

const controller = {
  add: async (req, res) => {
    try {
      const {
        body: {
            seasonNumber,
            rating,
            releaseDate,
            overview,
            posterPath,
            showId
        },
      } = req;
      let season = await Season.create({
            seasonNumber,
            rating,
            releaseDate,
            overview,
            posterPath,
            showId
      });
      // let show = await Show.findAll({where : {id:showId}});
      // await show.setSeason(season);
      res.send(season);
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
            seasonNumber,
            rating,
            releaseDate,
            overview,
            posterPath,
        },
      } = req;

      const {
        params: { id },
      } = req;
      let season = await Season.update(
        {
            seasonNumber,
            rating,
            releaseDate,
            overview,
            posterPath,
        },
        { where: { id } }
      );
      
      res.send(season);
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error,
      });
    }
  },

  getAll: async (req, res) => {
    try {
      let season = await Season.findAll({});
      res.send(season);
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
      let season = await Season.findAll({
        where: { id }
        // include: [Show,Episodes],
      });
      res.send(season);
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
      let season = await Season.destroy({ where: { id } });
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
