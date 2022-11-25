const jwt = require("jsonwebtoken");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const sendEmail = require("../services/email.service");

require("dotenv").config();

// --------------------------------------------------------signUp

const signUp = async (req, res) => {
   try {
      const newUser = new User(req.body);
      const savedUser = await newUser.save();

      const token = jwt.sign({ _id: savedUser._id }, process.env.emailToken, {
         expiresIn: 5 * 60,
      });
      const link = `http://localhost:3000://${req.headers.host}/user/confirmEmail/${token}`;
      const link2 = `http://localhost:3000://${req.headers.host}/user/refreshEmail/${savedUser._id}`;
      const message = `
    <a href=${link}> please confirm your email </a><br>
                   <a href=${link2}> resend confirmation email </a>`;

      console.log(savedUser.email);
      console.log(message);
      console.log(sendEmail(savedUser.email, message));
      sendEmail(savedUser.email, message);
      res.status(201).json({
         message: "please check your email to verify it",
         savedUser,
      });
   } catch (e) {
      if (e.keyValue?.email) {
         res.status(409).json({ message: "email exists" });
      } else {
         res.status(500).json({ message: "Error", e });
      }
   }
};

//-------------------------------------------------------------------refresh token
let refreshTokens = []; //in chach or DB
const tokenRefresher = (req, res) => {
   const refreshToken = req.body.token;
   if (refreshToken == null) return res.status(401);
   if (!refreshTokens.includes(refreshToken)) return res.status(403);
   jwt.verify(refreshToken, process.env.logingtoken, (err, user) => {
      if (err) return res.status(403);
      const accessToken = jwt.sign({ _id: user._id }, process.env.logingtoken);
      res.json({ token: accessToken });
   });
};
//-------------------------------------login
const login = async (req, res) => {
   const { email, password } = req.body;

   const user = await User.findOne({ email });

   if (!user) {
      res.status(404).json({ message: "invalid email account" });
   } else {
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
         res.status(400).json({ message: "email password mismatch" });
      } else {
         const token = jwt.sign(
            { _id: user._id, isLogged: true },
            process.env.logingtoken,
            { expiresIn: "60s" }
         );
         const refreshToken = jwt.sign(
            { _id: user._id },
            process.env.logingtoken
         );
         refreshTokens.push(refreshToken);

         res.status(200).json({
            message: "login suceess",
            token,
            refreshToken,
            user,
            allowedRole: "user",
         });
      }
   }
   res.status(200).json({
      message: "login suceess",
      token,
      refreshToken,
      user,
      allowedRole: "user",
   });
};

// --------------------------------------------------------EmailConfirm

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
               await User.findOneAndUpdate(
                  { _id: user.id },
                  { confirmed: true }
               );

               res.status(200).json({ message: " Done plz login" });
            }
         }
      }
   } catch (e) {
      res.status(500).json({ message: " error confirmed", e });
   }
};

// --------------------------------------------refresh email

const refreshEmail = async (req, res) => {
   const { id } = req.params;

   const user = await User.findOne({ id }).select("confirmEmail email");

   if (!user) {
      res.status(404).json({ message: "Invalid account" });
   } else {
      if (user.confirmEmail) {
         res.status(400).json({ message: "Already confirmed" });
      } else {
         const token = jwt.sign({ _id: user._id }, process.env.emailToken, {
            expiresIn: 5 * 60,
         });

         const link = `${req.protocol}://${req.headers.host}/user/confirmEmail/${token}  `;
         const link2 = `${req.protocol}://${req.headers.host}/user/refreshEmail/${user._id}  `;
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

      res.status(200).json({ message: "done", code });
   }
};

//---------------------------------------------------------forget password
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

// --------------------------------------------------------------------Update profile
const updateProfile = async (req, res) => {
   const { email, newpassword } = req.body;

   const user = await User.findOne({ email });

   if (!user) {
      res.status(404).json({ message: "in-valid email" });
   } else {
      const hashPassword = await bcrypt.hash(
         newpassword,
         parseInt(process.env.saltRounds)
      );
      const match = await bcrypt.compare(hashPassword, user.password);
      // console.log(match);
      // console.log(user.password);
      // console.log(hashPassword);
      if (!match) {
         const code = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);

         await userModel.findByIdAndUpdate(
            { _id: user._id },
            { email, password: hashPassword }
         );

         sendEmail(
            user.email,
            `<P>use this code to update u passowrd ${code} </p>`
         );
         res.status(200).json({ message: "done", code });
      } else {
         res.status(404).json({ message: "sorry same password" });
      }
   }
};

const getMeHandler = (req, res, next) => {
   try {
      const user = res.locals.user;
      res.status(200).json({
         status: "success",
         data: {
            user,
         },
      });
   } catch (err) {
      next(err);
   }
};

//---------------------------------------------------------user avatar

const addProfileAvatar = async (req, res) => {
   try {
      req.user.avatar = req.file.buffer;
      await req.user.save();
      res.status(200).send("image uploaded");
   } catch (e) {
      console.log("nnnn");
      res.status(500).send(e.message);
   }
};

//---------------------- delete user

const deleteUser = async (req, res) => {
   const { _id } = req.user;

   await User.findOneAndDelete({ _id: _id }, { new: true });

   res.json({ message: "done" });
};

const logoutUser = async (req, res) => {
   try {
      const cookies = req.cookies;
      if (!cookies?.jwt) return res.status(204);
      const refreshToken = cookies.jwt;

      // If refresher token exist in database
      const foundUser = await User.findOne({ refreshToken }).exec();
      if (!foundUser) {
         res.clearCookie("jwt", {
            httpOnly: true,
            sameSite: "None",
            secure: true,
         });
         return res.status(204);
      }

      // Delete refresher in database
      foundUser.refreshToken = foundUser.refreshToken.filter(
         (rt) => rt !== refreshToken
      );
      const result = await foundUser.save();
      console.log("deleteddddd", result);

      res.clearCookie("jwt", {
         httpOnly: true,
         sameSite: "None",
         secure: true,
      });
      res.status(204).send("you loged out all tokens");
   } catch (e) {
      res.status(500).send(e);
   }
};
// ---------------------------------get all users
const getUsersData = async (req, res) => {
   try {
      const users = await User.find({});
      if (!users) {
         throw Error("there is no users");
      }
      res.status(200).send(users);
   } catch (error) {
      res.status(500).send(error.message);
   }
};
// ---------------------------------get data of user
const getUserByID = async (req, res) => {
   try {
      const user = await User.findOne({ _id: req.params.id });

      if (!user) {
         return res.send(404).send("Cannot find user !");
      }
      res.status(200).send(user);
   } catch (e) {
      res.status(400).send(e.message);
   }
};

module.exports = {
   confirmEmail,
   refreshEmail,
   login,
   sendCode,
   forgetPassword,
   signUp,
   updateProfile,
   addProfileAvatar,
   deleteUser,
   tokenRefresher,
   logoutUser,
   getMeHandler,
   getUsersData,
   getUserByID,
};
