const express = require("express");
const router = express.Router();
const {
  signUp,
  login,
  sendCode,
  forgetPassword,
  confirmEmail,
  addProfileAvatar,
  updateProfile,
  refreshEmail,
  deleteUser,
  tokenRefresher,
  logoutUser
} = require("../controller/user.controller");
//
const auth = require("../middelware/auth2");
const uploads = require("../services/multer.services");


const authController = require('../controller/auth.controller');

router.post('/user/authLogin', authController.handleLogin);

//done
router.post("/user/signUp", signUp);
router.post("/user/login", login);
router.post("/sendCode",auth, sendCode);
router.get("/user/confirmEmail/:token", confirmEmail);
router.get("/user/refreshEmail/:token", refreshEmail);
router.post("/forgetPassword",auth, forgetPassword);
// router.get("/user/confirmEmail/:token", confirmEmail);
router.post('/profile/avatar',auth, uploads.single('avatar'),addProfileAvatar)
router.patch('/user/updateProfile',auth,updateProfile)
router.delete('/user/deleteUser',auth,deleteUser)
router.get("/user/refreshToken", tokenRefresher);
router.delete('/user/logout',auth,logoutUser)


module.exports = router;