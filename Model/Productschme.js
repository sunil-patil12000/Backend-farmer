const mongoose = require("mongoose");

const products = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: String,
    },

    filename: String,
    path: String,
    originalname: String,
    mimetype: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", products);
