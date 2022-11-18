const express = require('express')
const router = express.Router()
const {addHomeData ,getHomeData, updateHomeData} = require('../controller/home.controller');
const auth = require('../middelware/auth')

router.post('/addData',auth,addHomeData)
router.get('/homeData',auth,getHomeData)
router.put('/homeData/update',auth,updateHomeData)


module.exports = router;