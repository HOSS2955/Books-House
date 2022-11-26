const jwt = require("jsonwebtoken");
const User = require("../models/admin");
const bcrypt = require("bcryptjs");
const sendEmail = require("../services/email.service");

require("dotenv").config();

//-------------------------------------login


/////////////////////////////////////////////

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).exec();

  if (!user) {
    res.status(404).json({ message: "invalid email account" });
  } else {
    const match = await bcrypt.compare(password, user.password);
    if(!match){
      res.status(500).send("not match")
    }else{

      const refreshToken = jwt.sign({ _id: user._id }, process.env.REFRESH_TOKEN_SECRET,{ expiresIn: "12h" });
        const token = jwt.sign(
          { _id: user._id, isLogged: true },
          process.env.logingtoken,
          { expiresIn: "1h" }
        );
                
        (async ()=>{
          user.refreshToken=[refreshToken]
          await user.save()
        })()

        res.cookie("refreshTokenVal", refreshToken, {
        httpOnly: true,
        sameSite: "None",
        maxAge: 24 * 60 * 60 * 1000,
          });


          res.status(200).json({
            message: "login suceess",
            token,
            user,
            allowedRole: "admin",
          });
    }
    
  }
};

// Confirm email**************************************

const confirmEmail = async (req, res) => {
  try {
    const { token } = req.params;

    const decoded = jwt.verify(token, process.env.emailToken);

    if (!decoded) {
      res.status(400).json({ message: "invalid token" });
    } else {
      const user = await User.findById(decoded._id);

      if (!user) {
        res.status(404).json({ message: "invalid token id" });
      } else {
        if (user.confirmed) {
          res.status(400).json({ message: "you already confirmed " });
        } else {
          await User.findOneAndUpdate({ _id: user.id }, { confirmed: true });

          res.status(200).json({ message: " Done plz login" });
        }
      }
    }
  } catch (e) {
    res.status(500).json({ message: " error confirmed", e });
  }
};

// refresh email*************************************

const refreshEmail = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({ id }).select("confirmEmail email");

  if (!user) {
    res.status(404).json({ message: "invalid account" });
  } else {
    if (user.confirmEmail) {
      res.status(400).json({ message: "already confirmed" });
    } else {
      const token = jwt.sign({ _id: user._id }, process.env.emailToken, {
        expiresIn: 5 * 60,
      });

      const link = `${req.protocol}://${process.env.host}/api/v1/user/confirmEmail/${token}  `;
      const link2 = `${req.protocol}://${req.headers.host}/api/v1/user/refreshEmail/${user._id}  `;
      const message = `<a href=${link}>plz confirm your email </a> <br> <a href=${link2}>resend confirmintion email </a>`;

      sendEmail(user.email, message);
      await User.findByIdAndUpdate({ _id: user.id });

      res.status(400).json({ message: "done check u email" });
    }
  }
};

//-----------------------------------------------------sending code

const sendCode = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    res.status(404).json({ message: "in-valid email" });
  } else {
    const code = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
    const message = `your code is ${code}`;

    await User.findByIdAndUpdate({ _id: user._id }, { code });
    sendEmail(email, message);

    res.status(200).json({ message: "done ! check your email", code });
  }
};

//forget password
const forgetPassword = async (req, res) => {
  const { email, newpassword, code } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    res.status(404).json({ message: "in-valid email" });
  } else {
    if (user.code != code) {
      res.status(404).json({ message: "invalid code" });
    } else {
      const hashPassword = await bcrypt.hash(
        newpassword,
        parseInt(process.env.saltRounds)
      );

      await User.findByIdAndUpdate(
        { _id: user._id },
        { password: hashPassword, code: " " }
      );
      res.json({ message: "done" });
    }
  }
};

module.exports = {
  confirmEmail,
  refreshEmail,
  login,
  sendCode,
  forgetPassword,
};
