const mongoose = require('mongoose');
const {Schema} = mongoose;


const TempleSchema = new Schema({

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
    Location:{
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
    InnerImg:{
        type:String
    },
    InnerDescription:{
        type :String
    },
    Gallery:{
        type:String
    },
    Sociallinks:{
        type: Array
    },
    Timmings:{
        type: Array
    },
    Street:{
        type: String
    },
    Lat:{
        type: String
    },
    Long:{
        type: String
    },
    Postcode:{
        type: String
    },
    Country:{
        type: String
    },
    State:{
        type: String
    },
    City:{
        type: String
    },
    Train:{
        type:String
    },
    TrainLabel:{
        type:String
    },
    Air:{
        type:String
    },
    AirLabel:{
        type:String
    },
    Road:{
        type:String
    },
    RoadLabel:{
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

const Temple = mongoose.model('Temple',TempleSchema);
module.exports = Temple;