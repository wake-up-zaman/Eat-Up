const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    customerName:{
        type:String,
        required:true  
    },
    phoneNumber:{
        type:String,
        required:true  
    }
});
module.exports=mongoose.model("User",userSchema)