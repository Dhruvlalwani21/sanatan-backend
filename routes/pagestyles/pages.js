const express =require('express');
const router = express.Router();
const Temple = require('../../models/pages/temples');
const Aarti = require('../../models/pages/aarti');
const Extrapg = require('../../models/pages/extra');
const Scriptures = require('../../models/pages/scriptures');
const Pageblog = require('../../models/pageblog');


router.get('/',async (req,res)=> {
    try{

        const Scripture = await Scriptures.find();
        const Temples = await Temple.find();
        const Aartis = await Aarti.find();
        const Extrapgs = await Extrapg.find();
        const Pageblogs = await Pageblog.find();

        let  data = [...Scripture,...Temples,...Aartis,...Extrapgs,...Pageblogs];
        data.sort((Scripture,Temples,Aartis,Extrapgs,pageblogs)=>Scripture-Temples-Aartis-Extrapgs-Pageblogs);
        // for (i=0;i<Scripture.length;i++){
        //     data[i]=Scripture[i];
        // }
        // for (i=0;i<Temples.length;i++){
        //     data[data.length+i]=Temples[i];
        // }
        // for (i=0;i<Aartis.length;i++){
        //     data[data.length+i]=Aartis[i];
        // }
        // for (i=0;i<Extrapgs.length;i++){
        //     data[data.length+i]=Extrapgs[i];
        // }
        
        res.status(201).json(data);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});





module.exports = router;