const mongoose=require ('mongoose')
const clschema = mongoose.Schema({
    Firstname:{type:String},
    Username:{type:String},
    Email:{type:String},
    Role:{type:String},
    Phonenumber:{type:Number},
    Signedstatus:{type:Boolean}

})
const clientschema=mongoose.model("CLient details",clschema)
module.exports=clientschema