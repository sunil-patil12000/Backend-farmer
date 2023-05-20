let Adloginschme = require("../Model/Adloginschme");

module.exports = async (req, res) => {
    if (req.body.username && req.body.password) {
        let username = req.body.username;
        let password = req.body.password;
        let data = await Adloginschme.findOne({ email: username });
        if (data) {
            if (data.password == password) {
                res.status(200).json(data);

            }
            else {
                res.status(401).json({ message: "Wrong Password" });
            }
        }
        else {
            res.status(401).json({ message: "Wrong Username" });
        }
    }
};
