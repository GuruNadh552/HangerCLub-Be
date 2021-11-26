const categoryModel = require('../model/category-model')
const mongoose = require('mongoose')
exports.addCategory = (req,res) => {
    const id = new mongoose.mongo.ObjectId();
    const categoryData = new categoryModel({
        _id : id,
        categoryId : id,
        categoryName : req.body.categoryName 
    })
    categoryData.save(categoryData).then((data)=>res.send(data)).catch((err)=> res.send(err))
}

exports.getAllCategories = (req,res) => {
    categoryModel.find().then(data=>res.send(data)).catch(err=>res.send(err));
}

exports.deleteCategory = (req,res) => {
    categoryModel.findByIdAndDelete(req.params.id).then(data=>res.send(data)).catch(err=>res.send(err))
}

exports.updateCategory = (req,res) => {
    categoryModel.findByIdAndUpdate(req.params.id,{categoryName:req.body.categoryName},{useFindAndModify:true}).then(data=>res.send(data)).catch(err=>res.send(err))
}
