const express = require("express");
const router = express.Router();
const Waiter = require("../Models/Waiter");

router.get("/", async (req, res) => {
  try {
    let waiter = await Waiter.findAll({});
    res.send(waiter);
  } catch (error) {
    res.json({
      status: 400,
      message: "bad request " + error
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const {
      params: { id }
    } = req;
    let waiter = await Waiter.findAll({ where: { id } });
    res.send(waiter);
  } catch (error) {
    res.json({
      status: 400,
      message: "bad request " + error
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      body: { name, age, mobile, rating, experience }
    } = req;
    let waiter = await Waiter.create({ name, age, mobile, rating, experience });
    res.send(waiter);
  } catch (error) {
    res.json({
      status: 400,
      message: "bad request " + error
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const {
      body: { name, age, mobile, rating, experience }
    } = req;

    const {
      params: { id }
    } = req;
    let waiter = await Waiter.update(
      { name, age, mobile, rating, experience },
      { where: { id } }
    );
    await waiter.save();
    res.send(waiter);
  } catch (error) {
    res.json({
      status: 400,
      message: "bad request " + error
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const {
      params: { id }
    } = req;
    let waiter = await Waiter.destroy({ where: { id } });
    res.send("deleted successfully");
  } catch (error) {
    res.json({
      status: 400,
      message: "bad request " + error
    });
  }
});

module.exports = router;
