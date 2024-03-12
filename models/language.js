const mongoose = require('mongoose');
const {Schema} = mongoose;


const LanguageSchema = new Schema({

    Status:{
        type:String
    },
    Name:{
        type:String
    },
   
    Icon:{
        type:String
    },
    Date:{
        type:String
    },

})

const Language = mongoose.model('Language',LanguageSchema);
module.exports = Language;