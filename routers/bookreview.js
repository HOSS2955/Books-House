const express = require("express");
const router = express.Router();
const {
  addBookReview,
  getBookReviewById,
  getAllBookRewiew,
} = require("../controller/bookreview.controller");
// const auth = require('../middelware/auth')

router.post("/newbookreview", addBookReview);

router.get("/bookreview/getall", getAllBookRewiew);

router.get("/bookreview/:id", getBookReviewById);

module.exports = router;
