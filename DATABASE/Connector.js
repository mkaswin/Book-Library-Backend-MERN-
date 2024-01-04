const mongoose =require('mongoose')
const connection=async(req,res)=>{
    try{
        const connect=await mongoose.connect("mongodb+srv://Aswin:ormayilla@cluster0.x0ieylm.mongodb.net/?retryWrites=true&w=majority",{
            useNewUrlParser:true
        })
        console.log("Database connected");

    }
    catch (error){
        console.log(`error:${error}`);
        process.exit
    }
}
module.exports =connection