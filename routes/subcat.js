const express =require('express');
const router = express.Router();
const SubCategory = require('../models/category/subcat');

router.get('/',async (req,res)=> {
    try{
        const subcategory = await SubCategory.find();
        res.status(201).json(subcategory);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})



router.post('/add',async (req,res)=> {
    try{
        const {parent,name,status,caticon,bannercolor,fontcolor,leftcolor,rightcolor} = req.body;
        const cat = await SubCategory.create({
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

router.get('/:id',getcat,(req,res)=> {
        res.json(res.subcategory);
})
async function getcat(req,res,next){
    try{
        const subcategory = await SubCategory.findById(req.params.id);
        if(!subcategory){
            return res.status(404).json({message:"Not Found"})
        }
        res.subcategory = subcategory;
    }catch(error){
        return res.status(500).json({message:error.message})
    }
}





module.exports = router;