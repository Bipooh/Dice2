const mainController = require('../controllers/mainController');
const controllerProductos = require('../controllers/controllerProductos');
const express=require('express')
const router=express.Router()


router.get('/', mainController.index)
router.get('/login.ejs', mainController.login)
router.get('/register.ejs', mainController.register)
router.get('/productdetails.ejs', controllerProductos.productDetails)
router.get('/cart.ejs', controllerProductos.carrito)

module.exports=router