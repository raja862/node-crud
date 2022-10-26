 
const mongo=require("../connection");
 const {ObjectId}=require("mongodb");
 module.exports.getEmploye=async(req,res,)=>{
try{
 const employeDatas=  await mongo.selectDb.collection("employe").find().toArray();
 res.send(employeDatas)
}catch(err){
    console.log(err)
    res.status(500).send(err);
}
};
module.exports.updateEmploye=async(req,res)=>{
    try{
    const id=req.params.id;
  const updateEmployee= await mongo.selectDb.collection("employe").findOneAndUpdate({_id: ObjectId(id)},{$set:{...req.body}},{returnDocument:'after'});
  res.send(updateEmployee)
    }catch(err){
       console.error(err) 
       res.status(500).send(err)
    }
}
module.exports.creatEmploye=async(req,res)=>{
    try{
     const insertResponse=  await mongo. selectDb.collection("employe").insertOne(req.body);
     res.send(insertResponse);
    
    }catch(err){
        console.error(err);
        res.status(500).send(err);
    }
};
module.exports.deleteEmploye=async(req,res)=>{
    try{
const id=req.params.id;
const deletedData=await mongo.selectDb.collection("employe").remove({_id:ObjectId(id)})
res.send(deletedData)
    }catch(err){
        console.error(err);
        res.status(500).send(err);
    }
};