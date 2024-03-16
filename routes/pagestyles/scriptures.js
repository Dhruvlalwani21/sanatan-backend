const express =require('express');
const router = express.Router();
const Scriptures = require('../../models/pages/scriptures');
const moment = require('moment');


router.get('/',async (req,res)=> {
    try{
        const scriptures = await Scriptures.find();
        res.status(201).json(scriptures);
    }catch(error){
        res.status(500).json({message:error.message})
    }
});


router.post("/add",async (req,res)=>{
    try {
        var date=  moment().toString();
        const {category,subcategory,pagestyle,cardstyle,Publish,stauts,Cardcolor,cardshadow,shadowcolor,shadowx,shadowy,shadowx1,shadowy1,cblur,spread,Img,title,description,InnerT,InnerD,InnerImg,IncludeInfo,available ,pdf  ,chapters } = req.body;
        const Addscripture = Scriptures.create({
            Status:stauts,
            Category: category,
            Subcat: subcategory,
            Publish:Publish,

            Cardstyle:cardstyle,
            Pagestyle:"scriptures",
            Cardcolor:Cardcolor,
            Cardshadow:cardshadow,
            Shadowcolor:shadowcolor,
            Shadowx:shadowx,
            Shadowy:shadowy,
            Shadowx1:shadowx1,
            Shadowy1:shadowy1,
            CBlur: cblur,
            Spread:spread,
            Img:Img,
            Title:title,
            Description:description,
            InnerT:InnerT,
            InnerD:InnerD,
            InnerImg:InnerImg,
            IncludeInfo:IncludeInfo,
            Availablity:available,
            Pdf:pdf,
            Chapters:chapters,
        }).then((result)=>{res.status(200).json(result)}).catch((e)=>{
            res.status(500).json({message:error.message});
        })
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})


router.get('/:id',async(req,res)=> {
    try{
        const scripture = await Scriptures.findById(req.params.id);
        if(scripture !==''){
            res.scripture = scripture;
            res.json(res.scripture);
        }else{
        return res.status(404).json({message:"Not Found"})
    }
    }catch(error){
        return res.status(500).json({message:error.message})
    }

});


router.put("/:id",async(req,res)=>{
    const { 
        Status,Category,Subcat,Pagestyle,Cardcolor,Cardstyle,Cardshadow,Shadowcolor,Shadowx,Shadowy,Shadowx1,Shadowy1,CBlur,Spread,Img,Title,Description,InnerT,InnerD,InnerImg,IncludeInfo,Availablity,Pdf,Chapters,
    } = req.body;
    const _id =req.params.id;
  try {
    const UpdateScripture =  await Scriptures.findByIdAndUpdate(_id,{
    Status: Status,
    Category:  Category,
    Subcat:  Subcat,
    Cardstyle:  Cardstyle,
    Publish:Publish,
    Pagestyle:  "scriptures",
    Cardcolor:  Cardcolor,
    Cardshadow:  Cardshadow,
    Shadowcolor:  Shadowcolor,
    Shadowx:  Shadowx,
    Shadowy:  Shadowy,
    Shadowx1:  Shadowx1,
    Shadowy1:  Shadowy1,
    CBlur:  CBlur,
    Spread:  Spread,
    Img:  Img,
    Title:  Title,
    Description:  Description,
    InnerT:  InnerT,
    InnerD:  InnerD,
    InnerImg:  InnerImg,
    IncludeInfo: IncludeInfo,
    Availablity:Availablity,
    Pdf: Pdf,
    Chapters: Chapters,  
      })
      res.status(200).json({msg:"Successfully Updated"});
  } catch (error) {
    return res.status(500).json({message:error.message})
  }
})


router.delete("/:id",async(req,res)=>{
    const _id = req.params.id;
   try {
     const ScriptureDelete = await Scriptures.deleteOne({_id});
     res.status(200).json({msg:"Successfully Deleted"});
   } catch (error) {
    res.status(500).json({message:error.message});
   }
})


module.exports = router;