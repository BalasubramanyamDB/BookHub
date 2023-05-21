const express = require('express')

const router = express.Router()
const { signupUser , loginUser , checkUser, addFav ,removeFav , getFav } = require('../controllers/userControllers')
//login route
router.post('/login',loginUser)

//signup route
router.post('/signup',signupUser)

//individual user
router.get('/login/:email',checkUser)

router.post('/addfav',addFav)

router.post('/removefav',removeFav)

router.post('/getfav',getFav)

module.exports = router