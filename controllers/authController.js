const jwt = require('jsonwebtoken');

module.exports=async function (req,res,next){
    const token = req.header('authorized-person');
    if(!token){return res.status(401).send("Access denied")
    }
    try {
        const userVerified=jwt.verify(token,process.env.SECRET)
        req.user = userVerified;
        next()
    } catch (error) {
        console.log(error)
        return res.status(401).send("Access denied")
        
    }
}