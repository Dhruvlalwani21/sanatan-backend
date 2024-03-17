const mongoose = require('mongoose');
const {Schema} = mongoose;


const DonationSchema = new Schema({

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
    Goal:{
        type:String
    },
    Img:{
        type:String
    },
    Banner:{
        type:String
    },
    BasicAmounts:{
        type:Array
    },
    Gallery:{
        type:Array
    },
  
  
})

const Donation = mongoose.model('Donation',DonationSchema);
module.exports = Donation;