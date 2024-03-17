const mongoose = require('mongoose');
const {Schema} = mongoose;


const ScripturesSchema = new Schema({

    Category:{
        type:String
    },
    Subcategory:{
        type:String
    },
    Pagestyle:{
        type:String
    },
    Cardstyle:{
        type:String
    },
    Status:{
        type:Number,
    },
    Publish:{
        type:Date,
    },
    CardColor:{
        type:String
    },
    CardShadow:{
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
    ShadowColor:{
        type:String
    },
    Blur:{
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
    InnerTitle:{
        type:String
    },
    InnerDescription:{
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