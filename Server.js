const express=require('express')
const env =require('dotenv')
 const connection= require('./DATABASE/Connector')
 const cors =require('cors')
const router = require('./ROUTER/Router')

 const app =express()
 app.use(express.json())
 connection();
 app.use(
    cors()

 )
 env.config()
 app.use("/",router)
 app.get("/",(req,res)=>{
    res.send("API IS RUNNING")
 })
 const explore =process.env.explore||4000
 app.listen(explore,console.log(`SERVER IS RUNNING ${explore}`));

