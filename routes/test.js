const express =require('express');
const router = express.Router();
const Test = require('../models/test.modal');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/test')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+ '-' + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })




router.get('/',async (req,res)=> {
    try{
        const subcategory = await Test.find();
        res.status(201).json(subcategory);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})




router.post('/upload', upload.array('files'), async (req, res) => {
    try {
      const files = req.files.map(file => ({
        Image: file.filename,
      }));
      const {Title} = req.body;
      const savedFiles = await Test.create({
        Title : Title,
        Image : files,
      });
      res.json(savedFiles);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });





module.exports = router;