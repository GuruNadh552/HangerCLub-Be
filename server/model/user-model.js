const authModel = require('./auth-model')
const mongoose = require('mongoose')
var schema = new mongoose.Schema({
    authData : { type: mongoose.Schema.Types.ObjectId, ref:'authModel' },
    address : {
        type:String,
    },
    sizes : {
        type:String
    },
    profiles : [
        {
            name : String,
            size : String,
            gender : String
        }
    ]
})

const userModel = mongoose.model('userModel',schema);

// userModel.find().populate('authData').then((res)=>console.log("Completed"));

module.exports = userModel;