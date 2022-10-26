const express = require("express");
 const router = express.Router();
const employDetails=require("../employdetails/employeModule");
 router.get("/get",employDetails.getEmploye)

 router.put("/update/:id",employDetails.updateEmploye);


 router.post("/create",employDetails.creatEmploye);


 router.delete("/delete",employDetails.deleteEmploye);


 module.exports=router;