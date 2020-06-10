const express = require("express");
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;
const mongoose = require('mongoose');
const bookmarkedHistorySchema = {
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
const BookmarkedHistory = mongoose.model("bookmarkedHistory", bookmarkedHistorySchema);


// To get all user played videos
router.get("/", async (req, res, next) => {
  try {
    let bookmarkedVideos = await BookmarkedHistory.find({});
    res.json({
      status: true,
      data: bookmarkedVideos
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
    let bookmarkedVideo = await BookmarkedHistory.create({ title, img, videoId });
    res.json({
      status: true,
      data: bookmarkedVideo.ops[0]
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// To clear entire played history
router.delete("/all", async (req, res, next) => {
  try {
    await BookmarkedHistory.deleteMany();
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
    let bookmarkedVideos = await BookmarkedHistory.deleteOne({ _id: ObjectID(id) });
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