const Register = require('../Model/RegisterSech');
const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
    const { email } = req.body;
    console.log(email);

    try {
        const user = await Register.findOne({ email: email });

        if (!user) {
            res.status(400).json({
                error: "User not found",
            });
            return;
        }
        console.log(user);



        const transporter = nodemailer.createTransport({

            service: 'Gmail',
            auth: {
                user: 'spcomputersmlp@gmail.com',
                pass: 'zzvajjkrijiieyqb',
            },
        });


        const mailOptions = {
            from: 'your-email@gmail.com',
            to: email,
            subject: 'New Password',
            text: `Your new password is: ${user.password}`,
        };


        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.status(500).send('Failed to send the password update email');
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).send('New password sent successfully');
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Internal server error',
        });
    }
};

