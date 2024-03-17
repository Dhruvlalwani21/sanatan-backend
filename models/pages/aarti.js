const mongoose = require('mongoose');
const {Schema} = mongoose;


const AartiSchema = new Schema({
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
    Image:{
        type:String
    },
    InnerTitle:{
        type:String
    },
    InnerDescription:{
        type:String
    },
    MiddleTitle:{
        type:String
    },
    MiddleDescription:{
        type:String
    },
    Documents:{
        type: Array
    },
    Audio:{
        type: Array
    },
    Video:{
        type: Array
    }
})

const Aarti = mongoose.model('Aarti',AartiSchema);
module.exports = Aarti;