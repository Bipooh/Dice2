const mainController = require('../controllers/mainController');
const express=require('express')
const router=express.Router()

router.get('/login', mainController.login)
router.get('/register', mainController.register)

module.exports=router