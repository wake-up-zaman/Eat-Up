const mongoose=require('mongoose');

const foodSchema=new mongoose.Schema({
    foodId:{
        type:String,
        required:true  
    },
    restaurantId:{
        type:String,
        required:true 
    },
    foodCategory:{
        type:String,
        required:true 
    },
    name:{
        type:[String],
        required:true 
    },
    img:{
        type:[String],
        required:true 
    },
    description:{
        type:String,
        required:true 

    },
    discount:{
        type:String,
        required:true 

    },
    price:{
        type: Number,
        required:true 

    }
    
});
module.exports=mongoose.model("Food",foodSchema)