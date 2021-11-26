const mongoose = require('mongoose')
const orderModel = require('./orders-model')
var schema = new mongoose.Schema({
  categoryId : {
      type:String
  },
  categoryName : {
      type:String
  }
})

const categoryModel = mongoose.model('categoryModel',schema);


module.exports = categoryModel;