const authModel = require('./auth-model')
const mongoose = require('mongoose')
var schema = new mongoose.Schema({
    authData : { type: mongoose.Schema.Types.ObjectId, ref:'authModel' }
})

const userModel = mongoose.model('userModel',schema);

// userModel.find().populate('authData').then((res)=>console.log("Completed"));

module.exports = userModel;