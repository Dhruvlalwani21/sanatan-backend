const express =require('express');
const router = express.Router();
const Social = require('../models/social');
const moment = require('moment');

router.get('/',async (req,res)=> {
    try{
        const Socials = await Social.find();
        res.status(201).json(Socials);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});

router.post("/add" ,async (req,res)=>{
    try {
        var date=  moment().toString();

        const addsocial = Social.create({
           Socialmedia:req.body
        });
        res.status(200).json({msg:'Successfully Added'})

    } catch (error) {
        res.status(500).json({message:error.message});
    }
});

router.delete("/:id",async(req,res)=>{
    const _id = req.params.id;
   try {
     const LanguageDelete = await Social.deleteOne({_id});
     res.status(200).json({msg:"Successfully Deleted"});
   } catch (error) {
    res.status(500).json({message:error.message});
   }
})

router.put("/:id",async(req,res)=>{
   const  _id = req.params.id
       try {
         const UpdateLanguage = await Social.findByIdAndUpdate(_id,{
            Socialmedia:req.body
     })
     res.status(200).json("success")
       } catch (error) {
        res.status(500).json({message:error.message})
       }
})



router.get('/:id',getcat,(req,res)=> {
        res.json(res.social);
});
async function getcat(req,res,next){
    try{
        const social = await Social.findById(req.params.id);
        if(social==""){
            return res.status(404).json({message:"Not Found"})
        }
        res.social = social;
        res.json(res.social);
    }catch(error){
        return res.status(500).json({message:error.message})
    }
}





module.exports = router;