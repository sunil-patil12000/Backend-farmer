const Register = require("../Model/RegisterSech");

module.exports = async (req, res) => {
  try {
    const pd = await Register.findOne({ email: req.body.email });
    console.log(pd);

    if (pd === null) {
      const register = new Register({
        fname: req.body.fname,
        lname: req.body.lname,
        p_number: req.body.p_number,
        email: req.body.email,
        password: req.body.password,
      });

      const a = await register.save();
      res.json(a);
    } else {
      res.json({ error: "user Already registered" });
    }
  } catch (error) {
    console.error(error);
  }
};
