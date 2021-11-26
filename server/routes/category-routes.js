const express = require('express')
const route = express.Router()
const categoryController = require('../controller/category-controller')

route.post("/add",categoryController.addCategory)
route.get('/get-allcategories',categoryController.getAllCategories)
route.delete('/delete/:id',categoryController.deleteCategory)
route.put('/update/:id',categoryController.updateCategory)


module.exports = route