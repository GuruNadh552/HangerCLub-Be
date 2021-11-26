const express = require('express')
const route = express.Router()
const orderController = require('../controller/orders-controller')

route.post('/add',orderController.addOrder)

module.exports = route