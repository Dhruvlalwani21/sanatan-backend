const express =require('express');
const router = express.Router();
const Temple = require('../../models/pages/temples');
const moment = require('moment');


router.get('/',async (req,res)=> {
    try{
        const Temples = await Temple.find();
        res.status(201).json(Temples);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});


router.post("/add" ,async (req,res)=>{
    try {
    const {
        category,Publish,subcategory,pagestyle,publish,status,cardstyle,Cardcolor,Cardshadow,shadowcolor,shadowx,shadowy,shadowx1,shadowy1,cblur,spread,Image,InnerImg,title,description,InnerT,InnerD,Gallery,Sociallinks,Timmings,location,lat,long,street,postcode,country,city,state,air,airlabel,road,roadlabel,train,trainlabel,audio,video,docs
    } = req.body;
    var date=  moment().toString();
        const addtemple = Temple.create({
            Category:category,
            Subcat:subcategory,
            Status:status,
            Publish:date,
            Pagestyle:"Temple",
            Cardcolor:Cardcolor,
            Cardstyle:cardstyle,
            Cardshadow:Cardshadow,
            Shadowcolor:shadowcolor,
            Shadowx:shadowx,
            Shadowy:shadowy,
            Shadowx1:shadowx1,
            Shadowy1:shadowy1,
            CBlur: cblur,
            Spread:spread,
            Title:title,
            Location:location,
            Description:description,
            Image:Image,
            InnerImg:InnerImg,
            InnerT:InnerT,
            InnerD:InnerD,
            Sociallinks:Sociallinks,
            Gallery:Gallery,
            Timmings:Timmings,
            Street:street,
            Lat:lat,
            Long:long,
            Postcode:postcode,
            Country:country,
            City:city,
            State:state,
            Train:train,
            Train:trainlabel,
            Air:air,
            Airlabel:airlabel,
            Road:road,
            Roadlabel:roadlabel,
            Document:docs,
            Audio:audio,
            Video:video,
        });
        
        res.status(200).json({msg:"Successfully Added"});
    } catch (error) {
        res.status(500).json({message:error.message}); 
    }
})



router.get('/:id',getTemple,(req,res)=> {
        res.json(res.temple);
});
async function getTemple(req,res,next){
    try{
        const temple = await Temple.findById(req.params.id);
        if(!temple){
            return res.status(404).json({message:"Not Found"})
        }
        res.temple = temple;
        res.json(res.temple);
    }catch(error){
        return res.status(500).json({message:error.message})
    }
}



router.put("/:id",async(req,res)=>{
    const {Category,Subcat,Status,Publish,Cardstyle,Cardcolor,Cardshadow,Shadowcolor,Shadowx,Shadowy,Shadowx1,Shadowy1,CBlur,Spread,Title,Location,Description,Image,InnerImg,InnerT,InnerD,Sociallinks,Gallery,Timmings,Street,Lat,Long,Postcode,Country,City,State,Train,Trainlabel,Air,Airlabel,Road,Roadlabel,Document,Audio,Video,
                } = req.body;

                const _id = req.params.id;

  try {
      const UpdateTemple =  await Temple.findByIdAndUpdate(_id,{
      Category: Category,
      Subcat: Subcat,
      Status:    Status,
      Publish:Publish,
      Pagestyle:    "temples",
      Cardstyle:    Cardstyle,
      Cardcolor:    Cardcolor,
      Cardshadow:    Cardshadow,
      Shadowcolor:    Shadowcolor,
      Shadowx:    Shadowx,
      Shadowy:    Shadowy,
      Shadowx1:    Shadowx1,
      Shadowy1:    Shadowy1,
      CBlur:    CBlur,
      Spread:    Spread,
      Title:    Title,
      Location:    Location,
      Description:    Description,
      Image:    Image,
      InnerImg:    InnerImg,
      InnerT:    InnerT,
      InnerD:    InnerD,
      Sociallinks:    Sociallinks,
      Gallery:    Gallery,
      Timmings:    Timmings,
      Street:    Street,
      Lat:    Lat,
      Long:    Long,
      Postcode:    Postcode,
      Country:    Country,
      City:    City,
      State:    State,
      Train:    Train,
      Trainlabel:    Trainlabel,
      Air:    Air,
      Airlabel:    Airlabel,
      Road:    Road,
      Roadlabel:    Roadlabel,
      Document:    Document,
      Audio:    Audio,
      Video:Video
  })
  res.status(200).json({msg:"Successfully Updated"});
  } catch (error) {
    return res.status(500).json({message:error.message})
  }
})




router.delete("/:id",async(req,res)=>{
    const _id = req.params.id;
   try {
     const TempleDelete = await Temple.deleteOne({_id});
     res.status(200).json({msg:"Successfully Deleted"});
   } catch (error) {
    res.status(500).json({message:error.message});
   }
})

module.exports = router;