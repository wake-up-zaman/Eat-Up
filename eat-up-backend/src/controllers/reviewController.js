const Review=require("../models/reviewModel.js");

const createReview=async (req,res,next)=>{
   const review=new Review(req.body)

   try{
       const savedReview=await review.save()
       res.status(200).json(savedReview)
   }catch(err){
      next(err);
   }
}


const updateReview=async (req,res,next)=>{
   try {
       const updatedReview = await Review.findByIdAndUpdate(
         req.params.id,
         { $set: req.body },
         { new: true }
       );
       res.status(200).json(updatedReview);
     } catch (err) {
       next(err);
     }
}


const deleteReview=async (req,res,next)=>{
   try {
       await Review.findByIdAndDelete(req.params.id);
       res.status(200).json("Review has been deleted.");
     } catch (err) {
       next(err);
     }
}


const getReview=async (req,res,next)=>{
   try{
       const newReview=await Review.findById(
           req.params.id
       );
       res.status(200).json(newReview);
   }
   catch(err){
       next(err);
   }
}


const getAllReview=async (req,res,next)=>{
   const review=req.query;
   try{
       const newReview=await Review.find(review);
       res.status(200).json(newReview);
   }
   catch(err){
       next(err);
   }
}

 module.exports =  {
   createReview,
   updateReview,
   deleteReview,
   getReview,
   getAllReview,
};