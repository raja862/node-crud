const express=require("express");
const employeRouter=require("./router/employerouter");
const mongo=require("./connection");
mongo.connect()
const app=express()
app.use(express.json());  //parse req.body to send clint to server

app.use("/",(req,res,next)=>{
    console.log("i am middelwar")
    let auth={authorised:true}
        
    if (auth.authorised){
        next()
    }else{
        res.send({msg:"you are not authorised"})
    }
})
app.use("/employerouter",employeRouter);
    



app.listen(3001);