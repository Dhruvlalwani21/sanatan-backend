const mongoose = require('mongoose');
const {Schema} = mongoose;


const ScripturesSchema = new Schema({

    Status:{
        type:String
    },
    Category:{
        type:String,
        default:"scriptures"
    },
    Subcat:{
        type:String
    },
    Publish:{
        type:Date,
    },
    Pagestyle:{
        type:String
    },
    Cardcolor:{
        type:String
    },
    Cardshadow:{
        type:String
    },
    Shadowx:{
        type:String
    },
    Shadowy:{
        type:String
    },
    Shadowx1:{
        type:String
    },
    Shadowy1:{
        type:String
    },
    Shadowcolor:{
        type:String
    },
    CBlur:{
        type:String
    },
    Spread:{
        type:String
    },
    Title:{
        type:String
    },
    Description:{
        type:String
    },
    Img:{
        type:String
    },
    InnerT:{
        type:String
    },
    InnerD:{
        type:String
    },
    InnerImg:{
        type:String
    },
    IncludeInfo:{
        type: Array
    },
    Availablity:{
        type: Array
    },
    Pdf:{
        type: String
    },
  
})

const Scriptures = mongoose.model('Scriptures',ScripturesSchema);
module.exports = Scriptures;