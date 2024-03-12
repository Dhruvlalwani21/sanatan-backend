const express =require('express');
const router = express.Router();
const Aarti = require('../models/pages/aarti');
const moment = require('moment');



router.get('/',async (req,res)=> {
    try{
        const aartis = await Aarti.find();
        res.status(201).json(aartis);
    }catch(error){
        res.status(500).json({message:error.message})
    }
});


router.get('/:id',getaarti,(req,res)=> {
    res.json(res.aarti);
});
async function getaarti(req,res,next){
try{
    const aarti = await Aarti.findById(req.params.id);
    if(!aarti){
        return res.status(404).json({message:"Not Found"})
    }
    res.aarti = aarti;
    res.json(res.aarti);
}catch(error){
    return res.status(500).json({message:error.message})
}
}
router.post("/add",async(req,res)=>{
    try {
        var date=  moment().toString();
        const {category,subcategory,pagestyle,cardstyle,status,Cardcolor,cardshadow,shadowcolor,shadowx,shadowy,shadowx1,shadowy1,cblur,spread,image,title,description,innert,mtitle,InnerD,minfo,docs,audio,video
        }= req.body;
        const addaarti = Aarti.create({
            Category:category,
            Subcat:subcategory,
            Publish:date,
            Status:status,
            Pagestyle:"aarti",
            Cardstyle:cardstyle,
            Cardcolor:Cardcolor,
            Cardshadow:cardshadow,
            Shadowx:shadowx,
            Shadowy:shadowy,
            Shadowx1:shadowx1,
            Shadowy1:shadowy1,
            Shadowcolor:shadowcolor,
            CBlur: cblur,
            Spread:spread,
            Title:title,
            Description:description,
            Image:image,
            InnerD:InnerD,
            MiddleT:mtitle,
            MiddleD:minfo,
            Documents:docs,
            Audio:audio,
            Video:video,

        })
        res.status(200).json({msg:"Successfully Added"});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});




router.put("/:id",async(req,res)=>{
    const { 
        Category,Subcat,Status,Cardstyle,Pagestyle,Cardcolor,Cardshadow,Shadowx,Shadowy,Shadowx1,Shadowy1,Shadowcolor,CBlur,Spread,Title,Description,Image,InnerD,MiddleT,MiddleD,Documents,Audio,Video,} = req.body;
    const _id = req.params.id;
   try {
     const UpdateAarti = await  Aarti.findByIdAndUpdate(_id,{ 
      Category: Category,
     Subcat:    Subcat,
     Status:    Status,
     Publish:Publish,
     Pagestyle:    "aarti",
     Cardstyle:    Cardstyle,
     Cardcolor:    Cardcolor,
     Cardshadow:    Cardshadow,
     Shadowx:    Shadowx,
     Shadowy:    Shadowy,
     Shadowx1:    Shadowx1,
     Shadowy1:    Shadowy1,
     Shadowcolor:    Shadowcolor,
     CBlur:    CBlur,
     Spread:    Spread,
     Title:    Title,
     Description:    Description,
     Image:    Image,
     InnerD:    InnerD,
     MiddleT:    MiddleT,
     MiddleD:    MiddleD,
     Documents:    Documents,
     Audio:    Audio,
     Video:    Video,
 })
 res.status(200).json({msg:"Successfully Updated"});
   } catch (error) {
    res.status(500).json({message:error.message});
   }

})

router.delete("/:id",async(req,res)=>{
    const _id = req.params.id;
   try {
     const deleteaarti = await Aarti.deleteOne({_id});
     res.status(200).json({msg:"Successfully Deleted"});
   } catch (error) {
    res.status(500).json({message:error.message});
   }
})



module.exports = router;