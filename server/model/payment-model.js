const mongoose = require('mongoose')
var schema = new mongoose.Schema({
  paymentId : {
      type:String
  },
  paymentDate : {
      type:String
  },
  paymentStatus : {
      type:String
  },
  orderDetails : {
    type : mongoose.Schema.Types.ObjectId, ref:'orderModel'
  }
})

const paymentModel = mongoose.model('paymentModel',schema);


module.exports = paymentModel;