const mongoose =require('mongoose')
const schemabook =mongoose.Schema({
    Bookname:{type:String},
    Authorname:{type:String},
    Published:{type:String},
    Year:{type:(Number,String)},
    Availability:{type:Boolean}
})
const bookscehma = mongoose.model("BOOK PRPJECT",schemabook)
module.exports=bookscehma
