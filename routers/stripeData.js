const express = require("express");
const router = express.Router();
const { getStripe } = require("../controller/stripeData.contorller.js");

// PACKAGES
router.get("/getallpayments/packages", getStripe);

module.exports = router;
