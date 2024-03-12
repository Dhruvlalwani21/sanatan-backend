const express =require('express');
const router = express.Router();
const Admin = require('../models/admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET ='Dh$sanatandharmaya';

router.post("/",async (req,res)=>{
  try {
    const {email,password} =req.body;
   
        return res.status(200).send({
          token: 'Dharmayasanatan@gmail.com'
        })}catch(error){
    res.status(500).send({
      message: "Error creating user",
      error,
    });
  }
})


router.post("/register", async (req, res) => {
  const {email,password} =req.body;

  try {
   const salt =await bcrypt.genSalt(10);
    const secpass = await bcrypt.hash(password,salt);
    createadmin = await Admin.create({

      email: email,
      password:secpass,
    })
     const newadmin= createadmin.save();
     const data={
      admin :email
     }
     const authtoken = jwt.sign(data,JWT_SECRET);
    res.status(200).json({authtoken});
    // const data={
    //  email:req.body.email,
    //  password:req.body.password 
    // }
    // const authtoken = jwt.sign(data,JWT_SECRET)
    // res.json({authtoken})

  }catch(error){
    res.status(500).send({
      message: "Error creating user",
      error,
    });
  }

})
module.exports = router;