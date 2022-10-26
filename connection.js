const {MongoClient}= require("mongodb");


module.exports={
    selectDb:{},
  async connect(){
        try{
           const client=await MongoClient.connect("mongodb+srv://raja:lifeis@cluster0.edzsdqq.mongodb.net/?retryWrites=true&w=majority");
      this.selectDb = client.db("mongoat");
        }catch(err){
            console.log(err)
        }
    }
};