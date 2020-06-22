const Child = require("../../../models/child");
var { conn } = require("../../../config/mongoose");
const Grid = require("gridfs-stream");
const mongoose = require("mongoose");
const crypto = require("crypto");
const path = require("path");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
Grid.mongo = mongoose.mongo;
var gfs;

conn.once("open", function () {
  gfs = Grid(conn.db);
  gfs.collection("uploads");
});

const storage = new GridFsStorage({
  db: conn,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(12, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});
// sets file input to single file
const singleUpload = multer({ storage: storage }).single("file");

const controller = {
  upload: singleUpload,
  create: async (req, res) => {
    try {
      // console.log(req.file);
      if (req.file) {
        let districtID = mongoose.Types.ObjectId(req.body.districtId);
        let child = await Child.create({
          name: req.body.name,
          sex: req.body.sex,
          motherName: req.body.motherName,
          dateOfBirth: req.body.dateOfBirth,
          fatherName: req.body.fatherName,
          district: districtID,
          imageFileName: req.file.filename,
        });
        res.json({
          success: true,
          status: 200,
          message: "Child Added to database ( with Image )",
          child: child,
        });
      } else {
        let child = await Child.create({
          name: req.body.name,
          sex: req.body.sex,
          motherName: req.body.motherName,
          dateOfBirth: req.body.dateOfBirth,
          fatherName: req.body.fatherName,
          district: districtID,
          imageFileName: "NA",
        });
        res.json({
          success: true,
          status: 200,
          message: "Child Added to database ( No-image )",
          child: child,
        });
      }
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
      let child = await Child.find({})
        .select(["-createdAt", "-updatedAt", "-__v"])
        .populate({
          path: "district",
          select: "name",
          populate: {
            path: "state",
            select: "name",
          },
        })
        .exec();
      res.json({
        success: true,
        status: 200,
        message: "Child Details",
        child: child,
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
      let child = await Child.findById(id)
        .select(["-createdAt", "-updatedAt", "-__v"])
        .populate({
          path: "district",
          select: "name",
          populate: {
            path: "state",
            select: "name",
          },
        })
        .exec();
      res.json({
        success: true,
        status: 200,
        message: "Child Details",
        child: child,
      });
    } catch (error) {
      res.json({
        sucess: false,
        status: 400,
        message: "bad request " + error,
      });
    }
  },
  getImage: async (req, res) => {
    gfs.files.find({ filename: req.params.filename }).toArray((err, files) => {
      if (!files || files.length === 0) {
        return res.status(404).json({
          message: "Could not find file",
        });
      }

      var readstream = gfs.createReadStream({
        filename: files[0].filename,
      });
      res.set("Content-Type", files[0].contentType);
      return readstream.pipe(res);
    });
  },
};

module.exports = controller;
