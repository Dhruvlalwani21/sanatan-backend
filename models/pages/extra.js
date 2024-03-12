const mongoose = require('mongoose');
const {Schema} = mongoose;


const ExtrapgSchema = new Schema({

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
        default: Date.now
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

})

const Extrapg = mongoose.model('Extrapg',ExtrapgSchema);
module.exports = Extrapg;