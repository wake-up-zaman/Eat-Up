const express = require('express');
const { createUser, deleteUser, getAllUser, getUser, updateUser }=require("../controllers/userController.js");

const router=express.Router();

//CREATE of User
router.post("/", createUser);

//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id", deleteUser);

//GET
router.get("/:id",getUser);

//GET ALL
router.get("/", getAllUser);


module.exports=router;