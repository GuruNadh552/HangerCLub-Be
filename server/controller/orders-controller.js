const ordersModel = require('../model/orders-model')
const mongoose = require('mongoose')

exports.addOrder = (req,res) => {
    const order = new ordersModel({
        orderedDate :  new Date(),
        orderStatus : req.body.status,
        productData : req.body.product_id,
        address1 : req.body.address1,
        address2 : req.body.address2,
        landmark : req.body.landmark,
        nearbyTown : req.body.nearbyTown,
        state : req.body.state,
        pincode : req.body.pincode,
        userData : req.body.userId,
        total : req.body.total,
        paymentDetails : req.body.payment_id,
    })

    order.save(order).then(data=>res.send(data)).catch(err=>res.send(err));

}