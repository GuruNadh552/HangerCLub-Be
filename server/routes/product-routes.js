const express = require('express')
const route = express.Router()
const productController = require('../controller/product-controller')

route.post('/add',productController.addNewProduct)
route.get('/get-products',productController.getAllProducts)




module.exports = route