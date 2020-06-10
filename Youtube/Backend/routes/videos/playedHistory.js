const express = require("express");
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;
const mongoose = require('mongoose');
const playedHistorySchema = {
  title: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  videoId: {
    type: String,
    required: true
  },
}
const PlayedHistory = mongoose.model("playedHistory", playedHistorySchema);

// To get all user played videos
router.get("/", async (req, res, next) => {
  try {
    // let playedVideos = await db().collection("playedVideos").find({}).toArray();
    let playedVideos = await PlayedHistory.find();
    res.json({
      status: true,
      data: playedVideos
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
})

// To post in user played videos
router.post("/", async (req, res, next) => {
  try {
    let { video: { title, img, videoId } } = req.body;
    // let playedVideo = await db().collection("playedVideos").insertOne({ title, img, videoId });
    let playedVideo = await PlayedHistory.create({ title, img, videoId });
    res.json({
      status: true,
      data: playedVideo
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// To clear entire played history
router.delete("/all", async (req, res, next) => {
  try {
    await PlayedHistory.deleteMany();
    res.json({
      status: true,
      message: "Deleted all successfully"
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// To delete one item from played history
router.delete("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    await PlayedHistory.deleteOne({ _id: ObjectID(id) });
    res.json({
      status: true,
      message: "Successfully deleted"
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;