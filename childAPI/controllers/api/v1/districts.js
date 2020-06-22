const District = require("../../../models/district");
const State = require("../../../models/state");

const controller = {
  create: async (req, res) => {
    try {
      const {
        body: { name, state },
      } = req;
      console.log()
      let currState = await State.findById(state._id);
      let district = await District.create({
        name,
        state: state._id,
      });
      console.log(district);
      currState.districts.push(district);
      currState.save();
      res.json({
        success: true,
        status: 200,
        message: "District Added",
        district: district,
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
      let district = await District.find({})
        .select("name")
        .sort({ name: 1 })
        .exec();
      res.json({
        success: true,
        status: 200,
        message: "District Details",
        district: district,
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
      let district = await District.findById(id)
        .select("name")
        .populate("state", "name")
        .exec();
      res.json({
        success: true,
        status: 200,
        message: "District Details",
        district: district,
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
