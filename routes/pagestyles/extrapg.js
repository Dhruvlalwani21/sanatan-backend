const express =require('express');
const router = express.Router();
const Extrapg = require('../../models/pages/extra');
const moment = require('moment');



router.get('/',async (req,res)=> {
    try{
        const Extrapgs = await Extrapg.find();
        res.status(201).json(Extrapgs);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});


router.post("/add",async (req,res)=>{
    try {
        var date=  moment().toString();
        const {status,category,Publish,subcategory,cardstyle,pagestyle,Cardcolor,cshadow,shadowx,shadowy,shadowx1,shadowy1,cblur,spread,title,description} =req.body;
        const  addExtra= await Extrapg.create({
            Status:status,
            Category: category,
            Subcat: subcategory,
            Publish:Publish,
            Cardstyle:cardstyle,
            Pagestyle:"extrapages",
            Cardcolor:Cardcolor,
            Shadowcolor:cshadow,
            Shadowx:shadowx,
            Shadowy:shadowy,
            Shadowx1:shadowx1,
            Shadowy1:shadowy1,
            CBlur: cblur,
            Spread:spread,
            Title:title,
            Description:description
        })
        res.status(200).json({msg:"Successfully Added"});
     
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})


router.put("/:id",async(req,res)=>{
    const { 
        Status,Category,Subcat,Publish,Pagestyle,Cardstyle,Cardcolor,Shadowcolor,Shadowx,Shadowy,Shadowx1,Shadowy1,CBlur,Spread,Title,Description
     } = req.body;
    const _id = req.params.id
 try {
        const ExtrapgUpdate = await Extrapg.findByIdAndUpdate(_id,{
           Status:Status,
           Category:Category,
           Subcat:Subcat,
           Publish:Publish,
           Cardstyle:Cardstyle,
           Pagestyle:"extrapages",
           Cardcolor:Cardcolor,
           Shadowcolor:Shadowcolor,
           Shadowx:Shadowx,
           Shadowy:Shadowy,
           Shadowx1:Shadowx1,
           Shadowy1:Shadowy1,
           CBlur:CBlur,
           Spread:Spread,
           Title:Title,
           Description:Description
        })
        res.status(200).json({msg:"Successfully Updated"});
 } catch (error) {
    res.status(500).json({message:error.message});
 }
})

router.get('/:id',getExtrapg,(req,res)=> {
        res.json(res.extrapg);
});
async function getExtrapg(req,res,next){
    try{
        const extrapg = await Extrapg.findById(req.params.id);
        if(extrapg == ''){
            return res.status(404).json({message:"Not Found"})
        }
        res.extrapg = extrapg;
        res.json(res.extrapg);
    }catch(error){
        return res.status(500).json({message:error.message})
    }
}




router.delete("/:id",async(req,res)=>{
    const _id = req.params.id;
   try {
     const ExtraDelete = await Extrapg.deleteOne({_id});
     res.status(200).json({msg:"Successfully Deleted"});
   } catch (error) {
    res.status(500).json({message:error.message});
   }
})


module.exports = router;