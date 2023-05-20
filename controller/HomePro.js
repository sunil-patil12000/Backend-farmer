const Productschme = require("../Model/Productschme");


module.exports = async (req, res) => {
 try {
  
  const data = await Productschme.find().limit(5);

  res.status(200).json(data);
  console.log(data);
 } catch (error) {
  
  console.error(error);

 }
};
