const express = require('express');
const { createFood, deleteFood, getAllFood, getFood, updateFood }=require("../controllers/foodController.js");

const router=express.Router();

//CREATE of Food
router.post("/", createFood);

//UPDATE
router.put("/:id", updateFood);

//DELETE
router.delete("/:id", deleteFood);

//GET
router.get("/:id",getFood);

//GET ALL
router.get("/", getAllFood);


module.exports=router;