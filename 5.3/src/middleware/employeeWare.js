const jwtAuthorizer = (req,res,next)=>{
    const jwt = require("jsonwebtoken");
    let userToken;
    try{
        userToken = req.headers.authorization.split(" ")[1];
    }
    catch(error){
        res.status(400).json({message:"unauthorized access"})
        return
    }
    require("dotenv").config();
    jwt.verify(userToken,process.env.jwt_secret_key,(err,user)=>{
        if(err){
            console.log("jwt error name",err.name)
            res.status(403).json({message:"invalid token"});
            return
        }
        req.user = user;
        console.log(user)
        next();
    })
}

module.exports = {jwtAuthorizer}