const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const Waiter = require("../models/Waiter");
const Table = require("../models/Table");

router.get("/", async (req, res) => {
  try {
    let order = await Order.findAll({ include: [Table, Waiter] });
    res.send(order);
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
    let order = await Order.findAll({
      where: { id },
      include: [Table, Waiter],
    });
    res.send(order);
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
      body: {
        userName,
        userMobile,
        items,
        totalPrice,
        paymentMode,
        tableId,
        waiterId,
      },
    } = req;
    let order = await Order.create({
      userName,
      userMobile,
      items,
      totalPrice,
      paymentMode,
      tableId,
      waiterId,
    });
    res.send(order);
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
      body: {
        UserName,
        UserMobile,
        items,
        totalPrice,
        paymentMode,
        tableId,
        waiterId,
      },
    } = req;
    const {
      params: { id },
    } = req;
    let order = await Order.update(
      {
        UserName,
        UserMobile,
        items,
        totalPrice,
        paymentMode,
        tableId,
        waiterId,
      },
      { where: { id } }
    );
    res.send(order);
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
    let order = await Order.destroy({ where: { id } });
    res.send("deleted successfully");
  } catch (error) {
    res.json({
      status: 400,
      message: "bad request " + error,
    });
  }
});

module.exports = router;
