const express = require('express');
const { createRestaurant, deleteRestaurant, getAllRestaurant, getRestaurant, updateRestaurant }=require("../controllers/restaurantController.js");

const router=express.Router();

//CREATE of Restaurant
router.post("/", createRestaurant);

//UPDATE
router.put("/:id", updateRestaurant);

//DELETE
router.delete("/:id", deleteRestaurant);

//GET
router.get("/:restaurantId",getRestaurant);

//GET ALL
router.get("/", getAllRestaurant);


module.exports=router;