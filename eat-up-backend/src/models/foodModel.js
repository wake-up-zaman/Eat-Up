const mongoose=require('mongoose');

const foodSchema=new mongoose.Schema({
    restaurantId:{
        type:String,
        required:true 
    },
    restaurantName:{
        type:String,
        required:true 
    },
    foodCategory:{
        type:String,
        required:true 
    },
    foodSubCategory:{
        type:String,
        required:true 
    },
    foodName:{
        type:[String],
        required:true 
    },
    foodImg:{
        type:[String],
        required:true 
    },
    foodDes:{
        type:String,
        required:true 

    },
    price:{
        type: String,
        required:true 

    },
    options: [
        { 
          foodName: String,
          foodPrice:String,
        }
      ],
    
});
module.exports=mongoose.model("Food",foodSchema)