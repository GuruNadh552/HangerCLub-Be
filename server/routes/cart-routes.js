const express = require('express')
const route = express.Router()
const cartController = require('../controller/cart-controller')

route.post('/add',cartController.addItemToCart);
route.get('/cartItems/:id',cartController.getCartItems);
route.delete('/remove/:id',cartController.removeItemFromCart);

module.exports = route;