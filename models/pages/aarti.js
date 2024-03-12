const mongoose = require('mongoose');
const {Schema} = mongoose;


const AartiSchema = new Schema({

    Status:{
        type:String
    },
    Category:{
        type:String
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
    Image:{
        type:String
    },
    InnerD:{
        type:String
    },
    MiddleT:{
        type:String
    },
    MiddleD:{
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