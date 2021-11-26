const mongoose = require('mongoose')
const schema = new mongoose.Schema(
    {
        product_id :{
            type: String
        },
        product_type : {
            type:String
        },
        product_name : {
            type:String
        },
        product_state:{
            type:String
        },
        isFeatured : {
            type:Boolean,
        },
        description : {
            type:String,
        },
        sale_price : {
            type:Number,
        },
        regular_price : {
            type:Number,
        },
        images : {
            type:[String]
        },
        isProductInStock : {
            type:Boolean
        },
        tags:{
            type:[String]
        },
        product_varints: {
            type: [String]
        },
        product_weight : {
            type:Number
        }
    }
)

const productModel = mongoose.model('productModel',schema);

module.exports = productModel;