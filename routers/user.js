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
} = require("../controller/user.controller");
const auth = require("../middelware/auth2");
const uploads = require("../services/multer.services");

//done
router.post("/user/signUp", signUp);
router.post("/user/login", login);
router.post("/sendCode", sendCode);
router.get("/user/confirmEmail/:token", confirmEmail);
router.get("/user/refreshEmail/:token", refreshEmail);
router.post("/forgetPassword", forgetPassword);
// router.get("/user/confirmEmail/:token", confirmEmail);
router.post('/profile/avatar',auth, uploads.single('avatar'),addProfileAvatar)
router.patch('/user/updateProfile',auth,updateProfile)
router.delete('/user/deleteUser',auth,deleteUser)
router.get("/user/refreshToken", tokenRefresher);


module.exports = router;
