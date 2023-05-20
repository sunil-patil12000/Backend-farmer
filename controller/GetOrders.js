const Order = require("../Model/Order");

module.exports = async (req, res) => {
  let id = req.body.lid;

  const data = await Order.find({ lid: id });

  res.status(200).json(data);
};
