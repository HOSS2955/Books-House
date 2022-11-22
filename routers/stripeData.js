const express = require("express");
const router = express.Router();
const {
   getStripe,
   getStripeOrders,
} = require("../controller/stripeData.contorller.js");

// PACKAGES
router.get("/getallpayments/packages", getStripe);
// ORDERS
router.get("/getallpayments/orders", getStripeOrders);

module.exports = router;
