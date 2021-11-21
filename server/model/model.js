const mongoose = require('mongoose')
var schema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
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

const userDb = mongoose.model('userDB',schema);

module.exports = userDb;