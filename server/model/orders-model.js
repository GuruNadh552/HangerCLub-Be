const userModel = require('./user-model')
const productModel = require('./product-model')
const paymentModel = require('./payment-model')
const mongoose = require('mongoose')
var schema = new mongoose.Schema({
    orderDate : {
        type:String,
    },
    orderedDate : {
        type:String,
    },
    orderStatus : {
        type:String,
    },
    productData : {
        type: mongoose.Schema.Types.ObjectId, ref:'productModel'
    },
    address : {
        address1 : {
            type :String
        },
        adress2 :{
            type :String,
        },
        landmark : {
            type : String,
        },
        nearbyTown :{
            type : String,
        },
        state : {
            type : String
        },
        pincode : {
            type : Number
        }
    },
    userData : { type: mongoose.Schema.Types.ObjectId, ref:'userModel' },
    total : {
        type : Number
    },
    paymentDetails : { type: mongoose.Schema.Types.ObjectId, ref:'paymentModel' },
})

const orderModel = mongoose.model('orderModel',schema);


module.exports = orderModel;