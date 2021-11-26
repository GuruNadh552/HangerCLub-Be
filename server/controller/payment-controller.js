const paymentModel = require('../model/payment-model')
const mongoose = require('mongoose')

exports.addPaymentDetails = (req,res) => {
    const id = new mongoose.mongo.ObjectId();
    const payment = new paymentModel({
        _id : id,
        paymentId : id,
        paymentDate : new Date(),
        paymentStatus : req.body.paymentStatus,
        orderDetails : req.params.id
    })

    payment.save(payment).then(data=>res.send(data)).catch(err=>res.send(err))
}

exports.updatePaymentDetails = (req,res) => {
    const payment = {
        paymentStatus : req.body.paymentStatus,
        orderDetails : req.body.orderId
    }
    paymentModel.findByIdAndUpdate(req.params.id,payment).then(data=>res.send(data)).catch(err=>res.send(err));
}

exports.deletePaymentDetails = (req,res) => {
    paymentModel.findByIdAndDelete(req.params.id).then((data)=>res.send(data)).catch(err=>res.send(err))
}

exports.getPaymentDetails = (req,res) => {
    paymentModel.find().then(data=>res.send(data)).catch(err=>res.send(err))
}