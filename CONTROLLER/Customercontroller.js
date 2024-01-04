const mongoose=require('mongoose')
const cstmrschema = require('../SCHEMA/Customerschema')
const { clientdlt } = require('./Clientcontroller')
 


 const cstmrfn=async(req,res)=>{
    const {Firstname,Mail,City,Landmark,State, Pincode}=req.body


    const cstmrcheck =await cstmrschema.findOne({Mail})


    if (!Firstname || !Mail || !City || !Landmark || !State || !Pincode)
    return res.json({msg:"Fil the form"})
  
    else if (cstmrcheck){
        return res.json({msg:'One customer already existing'})
    }
    else{
        const customerregister=await cstmrschema.create({
            Firstname,
            Mail,
            City,
            Landmark,
            State,
            Pincode

            

        })
        res.json(customerregister)
    }
}

const customertable =async(req,res)=>{
    const table =await cstmrschema.find()
    res.json(table)
}
const customerview=async(req,res)=>{
    const _id=req.params.id
    const cs =await cstmrschema.findById(_id)
    res.json(cs)
}
const customerdelete=async(req,res)=>{
    const _id=req.params.id
    const csdelete=await cstmrschema.findByIdAndDelete(_id)
    res.json(csdelete)
}
const customerupdate=async(req,res)=>{
    const _id=req.params.id
const {Firstname,Mail, City,Landmark,State,Pincode}=req.body
  const custupdate=await cstmrschema.findByIdAndUpdate(_id,{Firstname,Mail, City,Landmark,State,Pincode})
  res.json({msg:'sucessfully updated customer'})
}


module.exports={customertable,customerview,cstmrfn,customerdelete,customerupdate}