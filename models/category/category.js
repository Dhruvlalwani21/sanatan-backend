const mongoose = require('mongoose');
const {Schema} = mongoose;


const CategorySchema = new Schema({

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

const Category = mongoose.model('Category',CategorySchema);
module.exports = Category;