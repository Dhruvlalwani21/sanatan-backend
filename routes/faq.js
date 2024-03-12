const express =require('express');
const router = express.Router();
const Faq = require('../models/faq');
const moment = require('moment');

router.get('/',async (req,res)=> {
    try{
        const faqs = await Faq.find();
        res.status(201).json(faqs);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});

router.post("/add" ,async (req,res)=>{
    try {
        var date=  moment().toString();
        const {Title,Description} =req.body;
        const AddFaq = Faq.create({
           Title:Title,
           Description:Description
        });
        res.status(200).json({msg:'Successfully Added'})

    } catch (error) {
        res.status(500).json({message:error.message});
    }
});

router.delete("/:id",async(req,res)=>{
    const _id = req.params.id;
   try {
     const FaqsDelete = await Faq.deleteOne({_id});
     res.status(200).json({msg:"Successfully Deleted"});
   } catch (error) {
    res.status(500).json({message:error.message});
   }
})

router.put("/:id",async(req,res)=>{
   const  _id = req.params.id
       try {
         const FaqUpdate = await Faq.findByIdAndUpdate(_id,{
            Faqs:req.body
     })
     res.status(200).json("success")
       } catch (error) {
        res.status(500).json({message:error.message})
       }
})



router.get('/:id',getcat,(req,res)=> {
        res.json(res.Faq);
});
async function getcat(req,res,next){
    try{
        const Faqs = await Faq.findOne({id:1});
        if(Faqs==""){
            return res.status(404).json({message:"Not Found"})
        }
        res.Faq = Faqs;
        res.json(res.Faq);
    }catch(error){
        return res.status(500).json({message:error.message})
    }
}





module.exports = router;