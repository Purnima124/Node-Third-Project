const knex=require("../model/conection")
const post_tables=(req,res)=>{
    const data={
        user_id:req.userdata.user_id,
        post_id:req.body.post_id,
        title:req.body.title,
        text:req.body.text
    }
    knex("post_tables"),insert(data),then(()=>{
        res.send({message:"data post successfully"})
        console.log("data inserted")
    }).catch((err)=>{
        res.send({message:"data dose not inserted",message:err})
    })
}
module.exports=(post_tables)