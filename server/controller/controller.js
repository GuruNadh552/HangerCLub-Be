var userDB = require('../model/model')

//creating and saving a new user
exports.create = (req,res) => {
    if(!req.body){
        res.status(400).send({message:"Content Can't be Empty"});
        return;
    }
    //creating an instance of user to store
    const user = new userDB({
        username : req.body.username,
        password : req.body.password,
        email : req.body.password,
        status : req.body.status
    })

    user.save(user).then((data)=>res.send(data)).catch(err=>res.send("Error Occured While Creating"));
}

//return all users 
exports.find = (req,res) => {
    if(req.query.id) userDB.findById(req.query.id).then((data)=>res.send(data)).catch((err)=>res.send(err));
    else userDB.find().then((resp)=>res.send(resp)).catch((err)=>res.send(err));
}

//update the user
exports.update = (req,res) => {
    if(!req.body){
        res.status(400).send({message:"Content Can't be Empty"});
        return;
    }

    const id = req.params.id;

    userDB.findByIdAndUpdate(id,req.body,{useFindAndModify:true}).then((resp)=>{
        res.send(resp?resp:'No Key Found');
    })
    .catch((err)=>res.send(err));
}

//delete the user 
exports.delete = (req,res) => {
    const id = req.params.id;
    userDB.findByIdAndDelete(id).then((resp)=>res.send(resp)).catch(err=>res.send(err));
}