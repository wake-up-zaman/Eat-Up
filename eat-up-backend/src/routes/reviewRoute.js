const express = require('express');
const { createReview, deleteReview, getAllReview, getReview, updateReview }=require("../controllers/reviewController.js");

const router=express.Router();

//CREATE of Review
router.post("/", createReview);

//UPDATE
router.put("/:id", updateReview);

//DELETE
router.delete("/:id", deleteReview);

//GET
router.get("/:id",getReview);

//GET ALL
router.get("/", getAllReview);



module.exports=router;