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

router.post("/admin/login", validation(loginValidation), login);
router.post("/sendCode", validation(sendCodeValidation), sendCode);
router.post(
  "/forgetPassword",
  validation(forgetPasswordValidation),
  forgetPassword
);
//8925

module.exports = router;
