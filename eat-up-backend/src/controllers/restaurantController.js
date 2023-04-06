const Restaurant=require("../models/restaurantModel.js");

const createRestaurant=async (req,res,next)=>{
   const restaurant=new Restaurant(req.body)

   try{
       const savedRestaurant=await restaurant.save()
       res.status(200).json(savedRestaurant)
   }catch(err){
      next(err);
   }
}


const updateRestaurant=async (req,res,next)=>{
   try {
       const updatedRestaurant = await Restaurant.findByIdAndUpdate(
         req.params.id,
         { $set: req.body },
         { new: true }
       );
       res.status(200).json(updatedRestaurant);
     } catch (err) {
       next(err);
     }
}


const deleteRestaurant=async (req,res,next)=>{
   try {
       await Restaurant.findByIdAndDelete(req.params.id);
       res.status(200).json("Restaurant has been deleted.");
     } catch (err) {
       next(err);
     }
}


const getRestaurant=async (req,res,next)=>{
   try{
       const newRestaurant=await Restaurant.findById(
           req.params.id
       );
       res.status(200).json(newRestaurant);
   }
   catch(err){
       next(err);
   }
}


const getAllRestaurant=async (req,res,next)=>{
   const restaurant=req.query;
   try{
       const newRestaurant=await Restaurant.find(restaurant);
       res.status(200).json(newRestaurant);
   }
   catch(err){
       next(err);
   }
}

 module.exports =  {
   createRestaurant,
   updateRestaurant,
   deleteRestaurant,
   getRestaurant,
   getAllRestaurant,
};