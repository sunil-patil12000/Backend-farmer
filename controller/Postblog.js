const Diseschem = require("../Model/Diseschem");

module.exports = async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  try {
    const add = new Diseschem({
      name: req.body.name,
      symptoms: req.body.symptoms,
      treatment: req.body.treatment,
      prevention: req.body.prevention,
      description: req.body.description,
      filename: req.file.filename,
      path: req.file.path,
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
    });
    const add1 = await add.save();

    res.status(201).json(add1);
  } catch (error) {
    res.status(500).json(error);
  }
};
