const User = require("../models/user");


const controller = {
  add: async (req, res) => {
    try {
      const {
        body: {
          firstName,
          lastName,
          email
        },
      } = req;
      let user = await User.create({
        firstName,
        lastName,
        email,
      });
      res.send(user);
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
            firstName,
            lastName,
            email
        },
      } = req;

      const {
        params: { id },
      } = req;
      let user = await User.update(
        {
            firstName,
            lastName,
            email
        },
        { where: { id } }
      );
      res.send(user);
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error,
      });
    }
  },

  getAll: async (req, res) => {
    try {
      let user = await User.findAll({});
      res.send(user);
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
      let user = await User.findAll({
        where: { id },
      });
      res.send(user);
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
      let user = await User.destroy({ where: { id } });
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
