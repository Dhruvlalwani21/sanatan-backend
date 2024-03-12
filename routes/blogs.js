const express =require('express');
const router = express.Router();
const Blogs = require('../models/blog');
const moment = require('moment');
const Blog = require('../models/blog');

router.get('/',async (req,res)=> {
    try{
        const Blog = await Blogs.find();
        res.status(201).json(Blog);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});


router.post("/add",async (req,res)=>{
    try {
        var date=  moment().toString();
        const {Status,Category,Subcategory,Pagestyle,Cardcolor,Shadowcolor,Shadowx,Shadowy,Shadowx1,Shadowy1,CBlur,Spread,Image,Banner,Title,Description,Gallery} =req.body;
        const  addExtra= await Blogs.create({
            Status:Status,
            Category: Category,
            Subcat: Subcategory,
            Publish:date,
            Pagestyle:Pagestyle,
            Cardcolor:Cardcolor,
            Shadowcolor:Shadowcolor,
            Shadowx:Shadowx,
            Shadowy:Shadowy,
            Shadowx1:Shadowx1,
            Shadowy1:Shadowy1,
            CBlur: CBlur,
            Spread:Spread,
            Image:Image,
            Banner:Banner,
            Title:Title,
            Description:Description,
            Gallery:Gallery
        })
        res.status(200).json({msg:"Successfully Added"});
     
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})


router.put("/:id",async(req,res)=>{
    const { 
        Status,Category,Subcategory,Pagestyle,Cardcolor,Shadowcolor,Shadowx,Shadowy,Shadowx1,Shadowy1,CBlur,Spread,Image,Banner,Title,Description,Gallery} = req.body;
    const _id = req.params.id
 try {
        const BlogsUpdate = await Blogs.findByIdAndUpdate(_id,{
            Status:Status,
            Category: Category,
            Subcat: Subcategory,
            Pagestyle:Pagestyle,
            Cardcolor:Cardcolor,
            Shadowcolor:Shadowcolor,
            Shadowx:Shadowx,
            Shadowy:Shadowy,
            Shadowx1:Shadowx1,
            Shadowy1:Shadowy1,
            CBlur: CBlur,
            Spread:Spread,
            Image:Image,
            Banner:Banner,
            Title:Title,
            Description:Description,
            Gallery:Gallery
        })
        res.status(200).json({msg:"Successfully Updated"});
 } catch (error) {
    res.status(500).json({message:error.message});
 }
})

router.get('/:id',getBlog,(req,res)=> {
        res.json(res.Blog);
});
async function getBlog(req,res,next){
    try{
        const Blog = await Blogs.findById(req.params.id);
        if(!Blog){
            return res.status(404).json({message:"Not Found"})
        }
        res.Blog = Blog;
        res.json(res.Blog);
    }catch(error){
        return res.status(500).json({message:error.message})
    }
}




router.delete("/:id",async(req,res)=>{
    const _id = req.params.id;
   try {
     const Delete = await Blogs.deleteOne({_id});
     res.status(200).json({msg:"Successfully Deleted"});
   } catch (error) {
    res.status(500).json({message:error.message});
   }
})



module.exports = router;