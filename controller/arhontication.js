const jwt=require("jsonwebtoken")
const cookies=require("cookei-parser")
const auth=(req,res,next)=>{
    try{
        var token=req.cookies.user
        console.log(token)
        var decode=jwt.verify(token,"purnimakumari")
        req.userdata=decode
        // console.log(userdata)
    next()
    }catch(err){
        res.status(400).json({
            err:"invalid token"
        })
        console.log(err)
    }
}

module.exports={auth}