const express =require('express');
const router = express.Router();
const Category = require('../models/category/category');

router.get('/',async (req,res)=> {
    try{
        const category = await Category.find();
        res.status(201).json(category);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


router.get('/find/:main',async (req,res)=> {
    try{
        const {main} = req.params
        const category = await Category.find({Parent:main});
        res.status(201).json(category);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})




router.post('/add',async (req,res)=> {
    try{
        const {parent,name,status,caticon,bannercolor,fontcolor,leftcolor,rightcolor} = req.body;
        const cat = await Category.create({
            Parent:parent,
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


router.put("/:id",async(req,res)=>{
    const {
        Parent,Name,Status,Icon,Bannercolor,Headfontcolor,Colorleft,Colorright,} = req.body;
    const _id = req.params.id
       try {
         const UpdateCategory = await Category.findByIdAndUpdate(_id,{
         Parent:Parent,
         Name:Name,
         Status:Status,
         Icon: Icon,
         Bannercolor:Bannercolor,
         Headfontcolor:Headfontcolor,
         Colorleft:Colorleft,
         Colorright:Colorright,
     })
     res.status(200).json("success")
       } catch (error) {
        res.status(500).json({message:error.message})
       }
})

router.get('/:id',getcat,(req,res)=> {
        res.json(res.category);
})
async function getcat(req,res,next){
    try{
        const category = await Category.findById(req.params.id);
        if(!category){
            return res.status(404).json({message:"Not Found"})
        }
        res.category = category;
        res.json(res.category);
    }catch(error){
        return res.status(500).json({message:error.message})
    }
}


router.delete("/:id",async(req,res)=>{
    const _id = req.params.id;
   try {
     const CatDelete = await Category.deleteOne({_id});
     res.status(200).json({msg:"Successfully Deleted"});
   } catch (error) {
    res.status(500).json({message:error.message});
   }
})




module.exports = router;