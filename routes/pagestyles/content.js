const express =require('express');
const router = express.Router();
const Content = require('../../models/pages/chapters');

router.get('/',async (req,res)=> {
    try{
        const Contents = await Content.find();
        res.status(201).json(Contents);
    }catch(error){
        res.status(404).json({message:error.message});
    }
});


router.post("/add/:lang/:id",async (req,res)=>{
    try {
        const {lang,id} = req.params;
        const {Chapters,Audio,Audioop,Text,Textop,Pdfop,Pdf,PdfFile,Video,Videoop} =req.body;
        const  addContent= await Content.create({
            Language:lang,
            ScriptureId:id,
            Chapters:Chapters,
            Video:Video,
            Videoop:Videoop,
            Audio:Audio,
            Audioop:Audioop,
            Text:Text,
            Textop:Textop,
            Pdf:Pdf,
            Pdfop:Pdfop,
            PdfFile:PdfFile
        })
        res.status(200).json({msg:"Successfully Added"});
     
    } catch (error) {
        res.status(404).json({message:error.message});
    }
})


router.put("/:id",async(req,res)=>{
    const _id = req.params.id
    const {Chapters,Audio,Audioop,Text,Textop,Pdfop,Pdf,PdfFile,Video,Videoop} =req.body;
 try {
        const ContentUpdate = await Content.findByIdAndUpdate(_id,{
            Chapters:Chapters,
            Video:Video,
            Videoop:Videoop,
            Audio:Audio,
            Audioop:Audioop,
            Text:Text,
            Textop:Textop,
            Pdf:Pdf,
            Pdfop:Pdfop,
            PdfFile:PdfFile
        })
        res.status(200).json({msg:"Successfully Updated"});
 } catch (error) {
    res.status(500).json({message:error.message});
 }
})

router.get('/:id/:lang',async(req,res)=> {
    const id = req.params.id
    const lang = req.params.lang
    try{
        const Contentdata = await Content.findOne({ScriptureId:id,Language:lang});
        if(!Contentdata){
            return res.status(201).send('notfound')
        }
        else{   
            data = Contentdata;
            return res.status(200).json(data)
    }
    }catch(error){
        return res.status(404).json({message:error.message})
    }
});






module.exports = router;