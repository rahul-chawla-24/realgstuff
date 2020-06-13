const Movie = require("../models/movie");
const Actor = require("../models/actor");
const Director = require("../models/director");
const Genre = require("../models/genre");

const controller = {
  add: async (req, res) => {
    try {
      const {
        body: {
          name
        },
      } = req;
      let genre = await Genre.create({
        name
      });
      res.send(genre);
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
          name
        },
      } = req;

      const {
        params: { id },
      } = req;
      let genre = await Genre.update(
        {
          name
        },
        { where: { id } }
      );
      
      res.send(genre);
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error,
      });
    }
  },

  getAll: async (req, res) => {
    try {
      let genre = await Genre.findAll({});
      res.send(genre);
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
      let genre = await Genre.findAll({
        where: { id }
      });
      res.send(genre);
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
      let genre = await Genre.destroy({ where: { id } });
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
