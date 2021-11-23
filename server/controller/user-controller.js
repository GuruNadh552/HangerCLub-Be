const userModel = require('../model/user-model')
const mongoose = require('mongoose')

exports.addUserDetails = (req,res) => {
    const userData = new userModel({
        _id:mongoose.Schema.Types.ObjectId,
    })
    userData.save(userData).then(data=>res.send(data)).catch(err=>res.send(err));
}

exports.getUserDetails = (req,res) => {
    userModel.find().populate('authData').then((data)=>{
        res.send(data)
    }).catch(err=>res.send(err))
}