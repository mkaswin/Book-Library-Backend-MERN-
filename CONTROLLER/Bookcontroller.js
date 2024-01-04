const mongoose =require ('mongoose')
const bookscehma=require('../SCHEMA/Schemabook')


const bookfn=async(req,res)=>{
    const{Bookname,Authorname,Published,Year,Availability}=req.body


    const bookexist=await bookscehma.findOne({Bookname})


    if (!Bookname || !Authorname || !Published || !Year || !Availability) {
        

        return res.json ({msg:"please fill  form"})

        
    }
    
    else if(bookexist){


        return res.json({msg:'this book is already existing'})

    }

    
    else {

        const printbookdetail =await bookscehma.create({
            Bookname,
            Authorname,
            Published,
            Year,
            Availability
        })
        res.json(printbookdetail)

        
    }
    
}

// inserting table //
const tablebook=async(req,res)=>{
    const books =await bookscehma.find()
    res.json(books)
}

// view in cards //

const view =async (req,res)=>{
    const _id=req.params.id
    const book=await bookscehma.findById(_id)
    res.json(book)

}
 const deletebook =async(req,res)=>{


     const _id=req.params.id
     const delbook=await bookscehma.findByIdAndDelete(_id)
     res.json(delbook)
     
 }
 // update //

 const updatebook=async(req,res)=>{
const _id=req.params.id
const {Bookname,Authorname,Published,Year,Availability}=req.body

const bookupdate =await bookscehma.findByIdAndUpdate(_id,{Bookname,Authorname,Published,Year,Availability})

res.json({msg:"bookk upadated successfully"})
 }

module.exports= {bookfn,tablebook,view,deletebook,updatebook}