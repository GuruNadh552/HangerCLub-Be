const productModel = require('../model/product-model')
const mongoose = require('mongoose')

exports.addNewProduct = (req,res) => {

    const product = new productModel();
    const id = new mongoose.mongo.ObjectId();
    product._id = id;
    product.product_id = id;
    product.product_type = req.body.product_type;
    product.product_name = req.body.product_name;
    product.product_state = req.body.product_state;
    product.isFeatured = req.body.isFeatured;
    product.description = req.body.description;
    product.sale_price = req.body.sale_price;
    product.regular_price = req.body.regular_price;
    product.images.push(req.body.images);
    product.isProductInStock = req.body.isProductInStock;
    product.tags.push(req.body.tags);
    product.product_varints.push(req.body.product_varints);
    product.product_weight = req.body.product_weight;

    product.save(product).then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{res.status(400).send(err)});
}

exports.editProduct = (req,res) => {

}

exports.deleteProduct = (req,res) => {

}


exports.getAllProducts = (req,res) => {
    productModel.find().then(data=>{res.send(data)}).catch(err=>res.status(400).send(err));
}

exports.getProductById = (req,res) => {

}

exports.getProductByProfile = (req,res) => {

}


