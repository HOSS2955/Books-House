const express = require("express");
const router = express.Router();
const {
  login,
  sendCode,
  forgetPassword,
} = require("../controller/admin.controller");

const { validation } = require("../middelware/validation");
const {
  loginValidation,
  forgetPasswordValidation,
  sendCodeValidation,
} = require("../validation/adminValidation");
const auth = require('../middelware/auth')

router.post("/admin/login", auth,validation(loginValidation), login);
router.post("/admin/sendCode", auth,validation(sendCodeValidation), sendCode);
router.post(
  "/admin/forgetPassword",
  validation(forgetPasswordValidation),
  auth,
  forgetPassword
);
//8925

module.exports = router;
