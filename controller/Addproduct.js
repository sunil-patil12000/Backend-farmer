const Productschme = require("../Model/Productschme");

module.exports = async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  try {
    const add = new Productschme({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      filename: req.file.filename,
      path: req.file.path,
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
    });
    const add1 = await add.save();

    res.status(201).json(add1);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
