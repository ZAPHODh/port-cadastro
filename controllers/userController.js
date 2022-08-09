const userSchema = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {loginValidate,registerValidate} = require('./validate')

const userController={

    register:async function(req,res){

        let {error} = registerValidate(req.body);
        if(error){return res.status(400).send(error.message)}
                
        const selectedUser= await userSchema.findOne({email:req.body.email});
        if(selectedUser){
            return res.status(400).send("Email já cadastrado")
        }
        const user  = new userSchema({
            name:req.body.name,
            age:req.body.age,
            email:req.body.email,
            password:bcrypt.hashSync(req.body.password),
        })
        try{
            const savedUser = await user.save();
            console.log(savedUser)
            res.send(savedUser);
        }catch(error){
            console.log(error)
            console.log('error');
            res.status(400).send('Não podemos lhe cadastrar.')
        }
        
    },
    login: async function(req,res){
        const {error} = loginValidate(req.body)
        if(error){return  res.status(400).send(error)}
        const selectedUser= await userSchema.findOne({email:req.body.email});
        if(!selectedUser){
            return res.status(400).send("Email ou senha inválidos")
        }
        const matchPassword= bcrypt.compareSync(req.body.password,selectedUser.password )
        if(!matchPassword) return res.status(400).send("Email ou senha inválidos")

        const token = jwt.sign({_id:selectedUser._id},process.env.SECRET)
        
        res.header('authorized-person',token)
        res.send("User logged")    
    }
}
module.exports = userController;