const State = require("../../../models/state");

const controller = {
  create: async (req, res) => {
    try {
      const {
        body: { name },
      } = req;
      let state = await State.create({
        name,
      });
      res.json({
        sucess: true,
        status: 200,
        message: "State Added",
        state: state,
      });
    } catch (error) {
      res.json({
        sucess: false,
        status: 400,
        message: "bad request " + error,
      });
    }
  },

  getAll: async (req, res) => {
    try {
      let state = await State.find({}).select(["name"]).sort({ name: 1 });
      res.json({
        sucess: true,
        status: 200,
        message: "State Details",
        state: state,
      });
    } catch (error) {
      res.json({
        sucess: false,
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
      let state = await State.findById(id)
        .select("name")
        .populate("districts", "name")
        .exec();
        let mystate = {
            _id : state._id,
            name : state.name,
            districts : state.districts
        }
      res.json({
        sucess: true,
        status: 200,
        message: "State Details",
        state: mystate,
      });
    } catch (error) {
      res.json({
        sucess: false,
        status: 400,
        message: "bad request " + error,
      });
    }
  },
};

module.exports = controller;
