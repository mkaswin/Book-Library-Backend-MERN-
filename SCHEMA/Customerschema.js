const mongoose=require('mongoose')
const cstschema = mongoose.Schema({
    Firstname:{type:String},
    
    Mail:{type:String},

    City:{type:String},
    Landmark:{type:String},
    State:{type:String},
    Pincode:{type:Number}



})
const cstmrschema=mongoose.model("Customer",cstschema)
module.exports=cstmrschema