const Diseschem = require("../Model/Diseschem");



module.exports = async (req, res) => {
 try {
  
  const data = await Diseschem.find();

  res.status(200).json(data);
  console.log(data);
 } catch (error) {
  
  console.error(error);

 }
};
