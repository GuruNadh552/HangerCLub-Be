const express = require('express')
const route = express.Router()
const paymentController = require('../controller/payment-controller');


route.post('/add/:id',paymentController.addPaymentDetails)
route.get('/get',paymentController.getPaymentDetails)
route.put('/update',paymentController.updatePaymentDetails)
route.delete('/delete/:id',paymentController.deletePaymentDetails)

module.exports = route;