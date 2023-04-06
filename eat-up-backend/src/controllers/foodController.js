const Food=require("../models/foodModel.js");

const createFood=async (req,res,next)=>{
   const food=new Food(req.body)
   try{
       const savedFood=await food.save()
       res.status(200).json(savedFood)
   }catch(err){
      next(err);
   }
}


const updateFood=async (req,res,next)=>{
   try {
       const updatedFood = await Food.findByIdAndUpdate(
         req.params.id,
         { $set: req.body },
         { new: true }
       );
       res.status(200).json(updatedFood);
     } catch (err) {
       next(err);
     }
}


const deleteFood=async (req,res,next)=>{
   try {
       await Food.findByIdAndDelete(req.params.id);
       res.status(200).json("Food has been deleted.");
     } catch (err) {
       next(err);
     }
}


const getFood=async (req,res,next)=>{
   try{
       const newFood=await Food.findById(
           req.params.id
       );
       res.status(200).json(newFood);
   }
   catch(err){
       next(err);
   }
}


const getAllFood=async (req,res,next)=>{
   const food=req.query;
   try{
       const newFood=await Food.find(food);
       res.status(200).json(newFood);
   }
   catch(err){
       next(err);
   }
}

 module.exports =  {
   createFood,
   updateFood,
   deleteFood,
   getFood,
   getAllFood,
};