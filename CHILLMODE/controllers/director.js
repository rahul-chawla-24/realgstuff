const Movie = require("../models/movie");
const Actor = require("../models/actor");
const Director = require("../models/director");
const Genre = require("../models/genre");

const controller = {
  add: async (req, res) => {
    try {
      const {
        body: {
          name,
          gender
        },
      } = req;
      let director = await Director.create({
        name,
        gender
      });
      res.send(director);
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
          name,
          gender
        },
      } = req;

      const {
        params: { id },
      } = req;
      let director = await Director.update(
        {
          name,
          gender
        },
        { where: { id } }
      );
      
      res.send(director);
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error,
      });
    }
  },

  getAll: async (req, res) => {
    try {
      let director = await Director.findAll({});
      res.send(director);
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
      let director = await Director.findAll({
        where: { id },
      });
      res.send(director);
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
      let director = await Director.destroy({ where: { id } });
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
