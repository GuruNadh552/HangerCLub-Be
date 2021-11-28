const express = require('express')
const route = express.Router()
const authController = require('../controller/auth-controller')

/**
 * Authentication Routes
 */

route.post('/create',authController.createUser);
route.delete('/delete/:id',authController.deleteUser);
route.put('/change-email/:id',authController.changeEmail);
route.put('/update-password/:id',authController.updatePassword);
route.get('/users',authController.getAllUsers);


module.exports = route