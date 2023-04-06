const mongoose=require('mongoose');

const restaurantSchema=new mongoose.Schema({
    restaurantId:{
        type:String,
        required:true  
    },
    img:{
        type:String,
        required:true 
    },
    name:{
        type:String,
        required:true 
    },
    keyWords:{
        type:[String],
        required:true
    },
    location:{
        type:String,
        required:true 
    },
    foodCategories:{
        type:[String],
        required:true
    },
    rating:{
        type:[String],
        required:true 
    },
    address:{
        type:String,
        required:true 

    },
    about:{
        type:String,
        required:true 

    },
    openingTime:{
        type: [String],
        required:true 

    },
    weeklySchedule:{
        type:String,
        required:true
    }
    
});
module.exports=mongoose.model("Restaurant",restaurantSchema)