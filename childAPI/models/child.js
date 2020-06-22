const mongoose = require("mongoose");

const childSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    motherName: {
      type: String,
      required: true,
    },
    imageFileName: {
      type: String,
      required: false,
    },
    district: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "District",
    },
  },
  {
    timestamps: true,
  }
);

const Child = mongoose.model("Child", childSchema);

module.exports = Child;
