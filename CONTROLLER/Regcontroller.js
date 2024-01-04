const logSchema=require('../SCHEMA/Sign')
const jwt =require('jsonwebtoken')
const bcrypt =require('bcrypt')
 

const Reg = async(req,res)=>{
    const{name,mail,password,confirmpassword}=req.body
     const check =await logSchema.findOne({mail})


     if(!name || !mail || !password){
        return res.json("please fill all the fields")
        

     }
    

     else if(password.length<5)
   return res.json({msg:"password is too... short"})
else if(password !==confirmpassword)
return res.json({msg:"password is not matching re- enter password"})
else if(check){
    return res.json({msg:"athe mail id already existing"})
}
else{
    const salt =await bcrypt.genSalt(9);
    const hash =await bcrypt.hash(password,salt)
    const details=await logSchema.create(
      {
        name,
        mail,
        password:hash
      }
    )
    res.json({details,Token:gentoken(details._id)})
}

}
const log1=async(req,res)=>{
    const {mail,password}=req.body
    const loginuser=await logSchema.findOne({mail})
    if(loginuser&& bcrypt.compareSync(password,loginuser.password)){
        res.json({message:'user login',Token:gentoken(loginuser._id)})
    
    
            
        }
        else{
          res.json({msg:'mail id and password not matching'})

        }
    }
    const gentoken=(id)=>{
      return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1d'})
    }



module.exports={Reg,log1}