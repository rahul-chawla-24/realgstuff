const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const userSchema = {
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  }
};
const User = mongoose.model("user", userSchema);

router.get('/all', async (req,res,next) => {
try {
    let user = await User.find();
    if(user){
        res.json({
            status: true,
            data: user,
            message: "user found"
          });
    }
    else{
        res.json({
            status: false,
            message : "No user found"
        })
    }
    
} catch (error) {
    console.log(error);
    res.status(400).send(error);
}
});

router.get("/", async (req, res, next) => {
  try {
    let { name, email } = req.body.user;
    let user = await User.findOne({ name, email });
    if (user) {
      res.json({
        status: true,
        data: user,
        message: "user found"
      });
    } else {
      res.json({
        status: false,
        message: "User not found"
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let { name, email, mobile } = req.body.user;
    let user = await User.create({ name, email, mobile });
    res.json({
      status: true,
      data: user,
      message: "User created successfully"
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
