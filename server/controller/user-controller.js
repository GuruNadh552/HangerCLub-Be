const userModel = require('../model/user-model')
const mongoose = require('mongoose')

exports.addUserDetails = (req,res) => {
    const userData = new userModel({
        authData :  req.params.id,
        address : req.body.address,
        sizes : req.body.sizes,
        profile : {
            name : req.body.name,
            size : req.body.sizes,
            gender : req.body.gender
        },
        createdOn : new Date()
    })
    userData.save(userData).then(data=>res.send(data)).catch(err=>res.send(err));
}   

exports.getUserDetails = (req,res) => {
    userModel.find().populate('authData').then((data)=>{
        res.send(data)
    }).catch(err=>res.send(err))
}


exports.addToFavorites = (req,res)=>{
    userModel.findByIdAndUpdate(req.params.id,{product:req.body.pid}).then((data)=>res.send({"message":"Added to Favorites"})).catch((err)=>res.status(409).send("Not Found"))
}