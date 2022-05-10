const exports=require('express')
const bcrypt=require("bcrypt")
const jwt=require('jsonwebtoken')
const knex=require('../model/conection')

const singup=(req,res)=>{
    const hash=bcrypt.hashSync(req.body.password,10)
    const data={
        name:req.body.name,
        password:hash,
        Email_id:req.body.Email_id
    }
    knex("data_meraki").insert(data).then(()=>{
        res.send({message:"data post successfully"})
        console.log("data inserted")
    }).catch((err)=>{
        console.log("data does not inserted")
    })
}

const login=(req,res)=>{
    knex.from('data_meraki').select("*").where('Email_id',"=",req.body.Email_id)
    .then((details)=>{
        if(details.length===0){
            res.send({massage:'user not exist'})
        }else{
            var compare=bcrypt.compareSync(req.body.password.details[0].password)
            if (compare===false){
                res.send({massage:'invalid Email/password'})
            }else{
                const token=jwt.sing({id:details[0].id},"purnimakumari",{expiresIn:"90h"})
                console.log(token)
                res.cookies('user',token)
                res.send({massage:'login succesfully',
                data:details,
                token:token})
            }
        }
    })
}
const logout=(req,res)=>{
    res.ClearCookies("token")
    res.send({massage:"you have logged successfully"})
}
module.exports={singup,login,logout}