const Order = require("../Model/Order");

module.exports = async (req, res) => {
 try {
  
  const data = await Order.find();

  res.status(200).json(data);
 } catch (error) {
  
  console.error(error);

 }
};
