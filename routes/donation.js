const express =require('express');
const router = express.Router();
const Donation = require('../models/donation');

router.get('/',async (req,res)=> {
    try{
        const Donation = await Donation.find();
        res.status(201).json(Donation);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});


router.post("/add",async (req,res)=>{
    try {
        const addDonation= await Donation.create(req.body)
        res.status(200).json({msg:"Successfully Added"});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})

router.put("/:id",async(req,res)=>{
    const _id = req.params.id
 try {
        const DonationUpdate = await Donation.findByIdAndUpdate(_id,req.body)
        res.status(200).json({msg:"Successfully Updated"});
 } catch (error) {
    res.status(500).json({message:error.message});
 }
})

router.get('/:id',getDonation,(req,res)=> {
        res.json(res.Blog);
});
async function getDonation(req,res,next){
    try{
        const Donations = await Donation.findById(req.params.id);
        if(!Donations){
            return res.status(404).json({message:"Not Found"})
        }
        res.Donations = Donations;
        res.json(res.Donations);
    }catch(error){
        return res.status(500).json({message:error.message})
    }
}




router.delete("/:id",async(req,res)=>{
    const _id = req.params.id;
   try {
     const Delete = await Donation.deleteOne({_id});
     res.status(200).json({msg:"Successfully Deleted"});
   } catch (error) {
    res.status(500).json({message:error.message});
   }
})



module.exports = router;