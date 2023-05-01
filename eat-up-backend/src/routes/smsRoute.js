const express = require('express');
const { createSms}=require("../controllers/smsController.js");

const router=express.Router();

//CREATE of Sms
router.post("/", createSms);

// //UPDATE
// router.put("/:id", updateSms);

// //DELETE
// router.delete("/:id", deleteSms);

// //GET
// router.get("/:id",getSms);

// //GET ALL
// router.get("/", getAllSms);


module.exports=router;