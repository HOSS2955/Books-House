const express = require("express");
const router = express.Router();
const {
   addBookData,
   getAllBook,
   deleteAllBook,
   getbookByID,
   deleteBook,
   updateBook,
   commentBook
} = require("../controller/book.contorller");
const uploadImage = require("../services/multer.services");
const auth = require("../middelware/auth");

router.get("/book/getall", getAllBook);

router.post("/book/addnewbook", addBookData);
router.post("/book/:id/commentBook" , commentBook);
router.put("/book/updateBook/:id", updateBook);
router.delete("/book/removeAll", deleteAllBook);
router.get("/book/:id", getbookByID);
router.delete("/book/remove/:id", deleteBook);

module.exports = router;
