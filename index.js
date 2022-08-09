require("dotenv").config()
const express = require("express")
const app = express();
const userRouter = require('./routes/userRouter')
const mongoose = require('mongoose');
const adminRouter = require('./routes/adminRouter')
const path = require('path')
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}




mongoose.connect(process.env.MONGO,(err)=>{
    if(err)
        return console.log(err) 
    else
        return console.log("connected")
});
mongoose.Error.messages.general.min= "Voce precisa por pelo menos 5 caracteres "
app.use(cors(corsOptions));
app.use('/',express.static(path.join(__dirname,"../client/build")))

app.use('/user',express.json(),userRouter)
app.use('/admin',express.json(),adminRouter)
app.listen(process.env.PORT,()=>{console.log("running")})