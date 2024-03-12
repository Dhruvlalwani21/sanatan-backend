const mongoose = require('mongoose');
const {Schema} = mongoose;


const AppLanguageSchema = new Schema({
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

const AppLanguage = mongoose.model('AppLanguage',AppLanguageSchema);
module.exports = AppLanguage;