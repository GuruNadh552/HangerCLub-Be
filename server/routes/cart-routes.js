const express = require('express')
const route = express.Router()
const cartController = require('../controller/cart-controller')

req.post('/add',cartController.addItemToCart);
req.get('/cartItems/:id',cartController.getCartItems);
req.delete('/remove/:id',cartController.removeItemFromCart);

module.exports = route;