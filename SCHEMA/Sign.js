const mongoose =require('mongoose')
const Regschema =mongoose.Schema({
    name:{type:String},
    mail:{type:String},
    password:{type:String},
    confirmpassword:{type:String}
    
})
const logSchema=mongoose.model("Login detail",Regschema)
module.exports=logSchema