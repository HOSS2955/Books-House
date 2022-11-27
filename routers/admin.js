const express = require("express");
const router = express.Router();
const {
  login,
  sendCode,
  forgetPassword,
  logoutAdmin,
} = require("../controller/admin.controller");

const { validation } = require("../middelware/validation");
const {
  loginValidation,
  forgetPasswordValidation,
  sendCodeValidation,
} = require("../validation/adminValidation");
const auth = require("../middelware/auth");

router.post("/admin/login", validation(loginValidation), login);
router.post("/admin/sendCode", auth, validation(sendCodeValidation), sendCode);
router.post(
  "/admin/forgetPassword",
  validation(forgetPasswordValidation),
  auth,
  forgetPassword
);

router.post("/admin/logout", auth, logoutAdmin);

//8925

module.exports = router;
