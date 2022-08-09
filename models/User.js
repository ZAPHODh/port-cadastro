const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name:{type:String,required:[true,"Voce precisa por o nome"],minlength:3,maxlength:50},
    age:{type:Number,required:true,min:1,max:110},
    email:{type:String,required:true,minlength:3,maxlength:50},
    password:{type:String,required:true,minlength:6,maxlength:100},
    createdAt:{type:Date,default:Date.now}

})

module.exports = mongoose.model('User',userSchema)