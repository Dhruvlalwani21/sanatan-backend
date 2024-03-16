const express = require('express');
const router = express.Router();
const Maincat = require('../../models/category/maincat');



router.get('/',async (req,res)=> {
    try{
        const maincategory = await Maincat.find();
        res.status(201).json(maincategory);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});


router.post('/add',async (req,res)=> {
    try{
        const {name,status,CategoryIn,caticon,bannercolor,fontcolor,leftcolor,rightcolor} = req.body;
        const cat = await Maincat.create({
            CategoryIn:CategoryIn,
            Name:name,
            Status:status,
            Icon:caticon,
            Bannercolor:bannercolor,
            Headfontcolor:fontcolor,
            Colorleft:leftcolor,
            Colorright:rightcolor
        })
        const savecat = cat.save()
        res.status(200).json(savecat);
    }catch(error){
        res.status(500).json({message:error.message})
    }
});

router.put('/:id',async (req,res)=> {
    try{
        const {Name,CategoryIn,Status,Icon,Bannercolor,Headfontcolor,Colorleft,Colorright} = req.body;
        const _id = req.params.id
        const cat = await Maincat.findByIdAndUpdate(_id,{
            Name:Name,
            CategoryIn:CategoryIn,
            Status:Status,
            Icon:Icon,
            Bannercolor:Bannercolor,
            Headfontcolor:Headfontcolor,
            Colorleft:Colorleft,
            Colorright:Colorright
        })
        res.status(200).json("Success");
    }catch(error){
        res.status(500).json({message:error.message})
    }
});
router.get('/:id',getcat,(req,res)=> {
        res.json(res.maincategory);
});
async function getcat(req,res,next){
    try{
        const maincategory = await Maincat.findById(req.params.id);
        if(maincategory == ""){
            return res.status(404).json({message:"Not Found"})
        }
      res.maincategory = maincategory;
      res.json(res.maincategory);
    }catch(error){
        return res.status(500).json({message:error.message})
    }
};


router.delete("/:id",async(req,res)=>{
    const _id = req.params.id;
   try {
     const CatDelete = await Maincat.deleteOne({_id});
     res.status(200).json({msg:"Successfully Deleted"});
   } catch (error) {
    res.status(500).json({message:error.message});
   }
})


module.exports = router;