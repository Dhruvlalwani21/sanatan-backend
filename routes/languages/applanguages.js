const express =require('express');
const router = express.Router();
const AppLanguages = require('../../models/applanguage');
const moment = require('moment');

router.get('/',async (req,res)=> {
    try{
        const languages = await AppLanguages.find();
        res.status(201).json(languages);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});

router.post("/add" ,async (req,res)=>{
    try {
        var date=  moment().toString();
        const {status,name,icon} = req.body
        const addlanguage = AppLanguages.create({
            Status: status,
            Name:name,
            Icon:icon,
            Date:date
        });
        res.status(200).json({msg:'Successfully Added'})

    } catch (error) {
        res.status(500).json({message:error.message});
    }
});

router.delete("/:id",async(req,res)=>{
    const _id = req.params.id;
   try {
     const LanguageDelete = await AppLanguages.deleteOne({_id});
     res.status(200).json({msg:"Successfully Deleted"});
   } catch (error) {
    res.status(500).json({message:error.message});
   }
})

router.put("/:id",async(req,res)=>{
    const {
        Name,Status,Icon} = req.body;
    const _id = req.params.id;
       try {
         const UpdateLanguage = await AppLanguages.findByIdAndUpdate(_id,{
         Name:Name,
         Status:Status,
         Icon: Icon,
     })
     res.status(200).json("success")
       } catch (error) {
        res.status(500).json({message:error.message})
       }
})



router.get('/:id',getcat,(req,res)=> {
        res.json(res.languages);
});
async function getcat(req,res,next){
    try{
        const languages = await AppLanguages.findById(req.params.id);
        if(languages==""){
            return res.status(404).json({message:"Not Found"})
        }
        res.languages = languages;
        res.json(res.languages);
    }catch(error){
        return res.status(500).json({message:error.message})
    }
}





module.exports = router;