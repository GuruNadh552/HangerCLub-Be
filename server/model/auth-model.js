const mongoose = require('mongoose')
var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
})

const authModel = mongoose.model('authModel',schema);

module.exports = authModel;