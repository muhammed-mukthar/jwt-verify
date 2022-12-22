const jwt = require("jsonwebtoken");
exports.authenicate=  (req,res,next)=>{
    try{
        const token=req.headers.authorization
        newtoken= token.split(" ");;
        console.log('token',newtoken[1]);
        const decoded=    jwt.verify(newtoken[1],'secret')//we should store secret in env file
      console.log(decoded,'decoded');
        if(decoded){
            next()
        }else{
            res.json({err:"invalid token"})
        }
    }catch(err){
        res.status(500).json({err:'jwt error'})
    }
   
}