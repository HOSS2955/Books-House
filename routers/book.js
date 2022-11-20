const express = require('express')
const router = express.Router()
const {addBookData ,getAllBook,deleteAllBook, getbookByID} = require('../controller/book.contorller');
const auth = require('../middelware/auth')

router.post('/book/newbook',addBookData)
router.get('/book/getall',auth,getAllBook)
router.get('/book/:id',auth,getbookByID)
router.delete('/book/removeAll',auth,deleteAllBook)


module.exports = router;