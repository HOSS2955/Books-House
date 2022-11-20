const express = require("express");
const router = express.Router();
const {
  signUp,
  login,
  sendCode,
  forgetPassword,
  confirmEmail,
  addProfileAvatar,
  refreshEmail,
} = require("../controller/user.controller");
// const { myMulter, fileValidation, HME } = require('../services/multer.services');
const multer = require("multer");
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

//not done

// Add Avatar

// const uploads = multer({
//     limits: {
//         fileSize: 6000000
//     },
//     fileFilter (req, file, cb) {
//         if (!file.originalname.match(/\.(jpg|jpeg|png|jfif)$/)) {
//             cb(new Error('Please Upload Image'))
//         }
//         cb(null, true)
//     }
// })

router.post(
  "/profile/avatar",
  auth,
  uploads.single("avatar"),
  addProfileAvatar
);

// router.patch('/profile/pic',myMulter('user/profile/pic',fileValidation.image).single('image'),addProfilePic)

// update data -log out - profile pic

module.exports = router;
