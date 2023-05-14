const Order = require("../Model/Order");

module.exports = async (req, res) => {
 

  try {
    const newOrder = new Order({
      lid: req.body.lid,

      fname: req.body.fname,
      lname: req.body.lname,
      phone: req.body.phone,
      address: req.body.address,
      pincode: req.body.pincode,
      email: req.body.email,
      products: req.body.products,
      total: req.body.total,
    });

    const savedOrder = await newOrder.save();

    res.status(200).json(savedOrder);
  } catch (error) {}
};
