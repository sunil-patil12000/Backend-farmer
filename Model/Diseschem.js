const mongoose = require("mongoose");

const dise = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    symptoms: {
      type: String,
      required: true,
    },
    treatment: {
      type: String,
    },
    prevention: {
      type: String,
    },
    description: {
      type: String,
    },
    filename: String,
    path: String,
    originalname: String,
    mimetype: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("diseas", dise);
