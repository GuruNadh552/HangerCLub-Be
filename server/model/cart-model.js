const userModel = require('./user-model')
const productModel = require('./product-model')
const mongoose = require('mongoose')
var schema = new mongoose.Schema({
    cartId : {
        type:String
    },
    productData : {
        type: mongoose.Schema.Types.ObjectId, ref:'productModel'
    },
    quantity : {
        type:Number,
    },
    userData : { type: mongoose.Schema.Types.ObjectId, ref:'userModel' },
})

const cartModel = mongoose.model('cartModel',schema);


module.exports = cartModel;