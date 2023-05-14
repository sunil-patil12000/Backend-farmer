const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema(
  {
    lid: {
      type: String,
      required: true,
    },
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    products: {
      type: Array,
      default: [],
      required: true,
    },
    total: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", Schema);
