const clientschema =require('../SCHEMA/Schemaclient')


const clientfn=async(req,res)=>{
    const {Firstname,Username,Email,Signedstatus,Role,Phonenumber}=req.body
    

    const clientcheck =await clientschema.findOne({Email})

    if (!Firstname ||  !Username || !Email || !Signedstatus ||  !Role || !Phonenumber ){

           return res.json({msg:"fill the form"})


    }
    else if(clientcheck){
        return res.json({msg:'one user already existing with same mail id'})
    }
    else{
        const clientregister=await clientschema.create({

          Firstname,
          Username,
          Email,
          Signedstatus,
          Role,
          Phonenumber

        })
        res.json(clientregister)

        


    
}}
const clinttable=async(req,res)=>{
    const table=await clientschema.find()
    res.json (table)
}
const clietview =async (req,res)=>{
    const _id=req.params.id
    const cl =await clientschema.findById(_id)
          res.json(cl)
}
const clientdlt=async(req,res)=>{
    const _id=req.params.id
const cldelete = await clientschema.findByIdAndDelete(_id)
res.json(cldelete)
}
const clientupdate =async (req,res)=>{
    const _id =req.params.id
    const {Firstname,Username,Email,Signedstatus,Role,Phonenumber}=req.body
        const clupdate =await clientschema.findByIdAndUpdate(_id,{Firstname,Username,Email,Signedstatus,Role,Phonenumber})
        res.json({msg:"successfully updated client"})

}
module.exports={clientdlt,clientfn,clientupdate,clietview,clinttable}