const express = require("express");

const router=require('./router/router')
const bodyparser=require("body-parser")
const cookie=require("cookie-parser")
const {append}=require("express/lib/express")
const app=express()
const port=6000
app.use(bodyperser.urlencoded({extends:true}))
app.use(express.json)
app.use(bodyperser.json())
app.use('/',router)
app.listen(port, () => 
console.log(`port number ${port}`))
