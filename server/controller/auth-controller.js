    const authModel = require('../model/auth-model')
    var encryptor = require('simple-encryptor')('gurunadh guru guru');
    exports.createUser = (req,res) => {

        if(!req.body){
            res.status(400).send({message:"Content Can't be Empty"});
            return;
        }

        //creating an instance of user to store
        const authData = new authModel({
            name : req.body.name,
            mobile : req.body.mobile,
            password : encryptor.encrypt(req.body.password),
            email : req.body.email,
            status : req.body.status
        })
    
        authData.save(authData).then((data)=>res.send(data)).catch(err=>res.status(400).send("Error Occured While Creating"));
    }

    exports.deleteUser = (req,res) => {
        const id = req.params.id;
        authData.findByIdAndDelete(id).then((resp)=>res.send(resp)).catch(err=>res.send(err));
    }

    exports.updatePassword = (req,res) => {
        let id = req.params.id;
        let previousPassword = req.body.previousPassword;
        let isValid = false;
        authModel.findOne(id).then((data)=>{
            isValid = encryptor.decypt(data.password)==previousPassword;
        }).catch(err=>{
            isValid = false;
            res.status(400).send(err);
        })
        if(isValid)
            authModel.findByIdAndUpdate(id,{password:encryptor.encrypt(req.body.password)},{useFindAndModify:true}).then((resp)=>{
                res.status(400).send(resp?resp:'user not found');
            })
            .catch((err)=>res.status(400).send(err));
    }


    exports.changeEmail = (req,res) => {
        let id = req.params.id;
        authModel.findByIdAndUpdate(id,{email:req.body.email},{useFindAndModify:true}).then((resp)=>{
            res.status(400).send(resp?resp:'user not found');
        })
        .catch((err)=>res.send(err));
    }

    exports.getAllUsers = (req,res) => {
        authModel.find().then((resp)=>res.send(resp)).catch((err)=>res.status(400).send(err));
    }