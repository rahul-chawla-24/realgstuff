const express = require("express");
const router = express.Router();
const Table = require("../Models/Table");

router.get("/", async (req, res) => {
  try {
    let table = await Table.findAll({});
    res.json(table);
  } catch (error) {
    res.json({
      status: 400,
      message: "bad request " + error,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    let table = await Table.findAll({ where: { id } });
    res.send(table);
  } catch (error) {
    res.json({
      status: 400,
      message: "bad request " + error,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      body: { name, strength, floorNumber },
    } = req;
    let table = await Table.create({ name, strength, floorNumber });
    res.send(table);
  } catch (error) {
    res.json({
      status: 400,
      message: "bad request " + error,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const {
      body: { name, strength, floorNumber },
    } = req;
    const {
      params: { id },
    } = req;
    let table = await Table.update(
      { name, strength, floorNumber },
      { where: { id } }
    );
    res.send(table);
  } catch (error) {
    res.json({
      status: 400,
      message: "bad request " + error,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    let table = await Table.destroy({ where: { id } });
    res.send("deleted successfully");
  } catch (error) {
    res.json({
      status: 400,
      message: "bad request " + error,
    });
  }
});

module.exports = router;
