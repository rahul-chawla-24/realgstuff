const User = require("../../../models/user");
const jwt = require("jsonwebtoken");
const confiq = require("../../../config/jwt_config.json");
const { connect } = require("mongoose");

const controller = {
  createSession: async function (req, res) {
    try {
      let user = await User.findOne({ email: req.body.email });

      if (!user || user.password != req.body.password) {
        return res.json(422, {
          sucess: false,
          message: "Invalid username or password",
        });
      }

      return res.json(200, {
        message: "Sign in successful, here is your token, please keep it safe!",
        data: {
          token: jwt.sign(user.toJSON(), confiq.jwtSecret),
          user : user.name
        },
      });
    } catch (err) {
      console.log("********", err);
      return res.json(500, {
        sucess: false,
        message: "Internal Server Error",
      });
    }
  },
  signUp: async function (req, res) {
    const {
      body: { email, name, password },
    } = req;
    try {
      let user = await User.create({ email, name, password });
      res.json({
        sucess: true,
        message: "successfully signed up",
        user: user.name,
      });
    } catch (error) {
      return res.json(500, {
        sucess: false,
        message: "Internal Server Error" + error,
      });
    }
  },
};

module.exports = controller;
