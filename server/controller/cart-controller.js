const cartModel = require('../model/cart-model')

exports.addItemToCart = (req,res) => {

    if(!req.body){
        res.status(400).send({message:"Content Can't be Empty"});
        return;
    }
    const id = new mongoose.mongo.ObjectId();
    const cardItem = new cartModel({
        _id:id,
        cartId:id,
        productData : req.body.productId,
        quantity : req.body.quantity,
        userData : req.body.userId
    })

    cardItem.save(cardItem).then((data)=>res.send(data)).catch(err=>res.status(400).send("Error Occured While Creating"));
}

exports.removeItemFromCart = (req,res) => {
    if(!req.params.id)
        return res.status(400).send("Kindly Send the Cart Id");
    cartModel.findByIdAndDelete(req.params.id).then((data)=>{res.status(200).send(data)}).catch((err)=>res.send(err));
}

exports.getCartItems = (req,res) => {
    if(!req.params.id)
        res.status(400).send("Kindly pAss the User iD")
    cartModel.find({userData:req.params.id}).then(data=>res.send(data)).catch((err)=>res.send(err))
}

exports.updateCartItemQuantity = (req,res) => {
    if(!req.params.id && !req.body.quantity)
        return res.status(401).send({"message":"Kindly Send the Required Fields"});    
    cartModel.findByIdAndUpdate(id,{quantity:req.body.quantity}).then((data)=>res.send(data)).catch(err=>res.send(err));
}