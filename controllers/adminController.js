

module.exports = function (req,res){
    if(req.user.admin){
        res.send('Voce chegou aqui')
    }else{
        res.status(400).send("Acess denied")
    }
} 