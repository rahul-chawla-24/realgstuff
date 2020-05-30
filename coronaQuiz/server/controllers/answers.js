const Answers = require("../models/answers");


const controller = {
  add: async (req, res) => {
    try {
      const {
        body: {
            text,
          correct,
          description,
          questionId
        },
      } = req;
      let answers = await Answers.create({
        text,
        correct,
        description,
        questionId
      });
      res.send(answers);
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
            text,
            correct,
            description,
            questionId
        },
      } = req;

      const {
        params: { id },
      } = req;
      let answers = await Answers.update(
        {
            text,
            correct,
            description,
            questionId
        },
        { where: { id } }
      );
      res.send(answers);
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error,
      });
    }
  },

  getAll: async (req, res) => {
    try {
      let answers = await Answers.findAll({});
      res.send(answers);
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
      let answers = await Answers.findAll({
        where: { id },
      });
      res.send(answers);
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
      let answers = await Answers.destroy({ where: { id } });
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
