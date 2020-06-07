const express = require("express");
const router = express.Router();
const Menu = require("../Models/Menu");

router.get("/", async (req, res) => {
  try {
    let menu = await Menu.findAll({});
    res.send(menu);
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
    let menu = await Menu.findAll({ where: { id } });
    res.send(menu);
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
      body: { itemName, cusineName, type, price }
    } = req;
    let menu = await Menu.create({ itemName, cusineName, type, price });
    res.send(menu);
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
      body: { itemName, cusineName, type, price }
    } = req;
    const {
      params: { id }
    } = req;
    let menu = await Menu.update(
      { itemName, cusineName, type, price },
      { where: { id } }
    );
    res.send(menu);
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
    let menu = await Menu.destroy({ where: { id } });
    res.send("deleted successfully");
  } catch (error) {
    res.json({
      status: 400,
      message: "bad request " + error
    });
  }
});

module.exports = router;