const mongoose = require('mongoose');
const {Schema} = mongoose;


const MaincatSchema = new Schema({

    CategoryIn:{
        type:String
    },
    Name:{
        type:String
    },
    Status:{
        type:String
    },
    Icon:{
        type:String
    },
    Bannercolor:{
        type:String
    },
    Headfontcolor:{
        type:String
    },
    Colorleft:{
        type:String
    },
    Colorright:{
        type:String
    },
  
})

const maincat = mongoose.model('maincat',MaincatSchema);
module.exports = maincat;