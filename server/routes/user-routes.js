const express = require('express')
const route = express.Router()
const userController = require('../controller/user-controller')


route.post('/add-details/:id',userController.addUserDetails);
route.get('/get-details',userController.getUserDetails);

module.exports = route