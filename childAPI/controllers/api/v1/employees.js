const Employee = require("../../../models/employee");

const controller = {
  create: async (req, res) => {
    try {
      const {
        body: { name, organization, designation },
      } = req;
      let employee = await Employee.create({
        name,
        organization,
        designation,
      });
      res.json({
        sucess: true,
        status: 200,
        message: "Employee Added",
        employee : employee
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
      let employee = await Employee.find({}).select(["name" , "organization" , "designation"]).sort({ name: 1 });
      res.json({
        sucess: true,
        status: 200,
        message: "Employee Details",
        employees : employee
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
      let employee = await Employee.findById(id);
      res.json({
        sucess: true,
        status: 200,
        message: "Employee Details",
        employee : employee
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
