const mongoose=require('mongoose');

const reviewSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true 
    },
    restaurantId:{
        type:String,
        required:true  
    },
    email:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    review:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
    
});
module.exports=mongoose.model("Review",reviewSchema)