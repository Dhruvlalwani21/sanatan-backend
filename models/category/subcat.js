const mongoose = require('mongoose');
const {Schema} = mongoose;


const SubcatSchema = new Schema({

    Parent:{
        type:String
    },
    Name:{
        type:String
    },
    Status:{
        type:String
    },
    Description:{
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

const Subcat = mongoose.model('Subcat',SubcatSchema);
module.exports = Subcat;