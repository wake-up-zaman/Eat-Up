const mongoose=require('mongoose');

const smsSchema=new mongoose.Schema({
    message:{
        type:String,
        required:true  
    }
    
});
module.exports=mongoose.model("SMS",smsSchema)