const Question = require("../models/question");
const Answer = require("../models/answers");



const controller = {
  add: async (req, res) => {
    try {
      const {
        body: {
          text,
        },
      } = req;
      let question = await Question.create({
        text,
      });
      res.send(question);
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
        text
        },
      } = req;

      const {
        params: { id },
      } = req;
      let question = await Question.update(
        {
        text
        },
        { where: { id } }
      );
      res.send(question);
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error,
      });
    }
  },

  getAll: async (req, res) => {
    try {
      let question = await Question.findAll({
        include : [Answer]
      });
      res.send(question);
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
      let question = await Question.findAll({
        where: { id },
        include : [Answer]
      });
      res.send(question);
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
      let question = await Question.destroy({ where: { id } });
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
