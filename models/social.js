const mongoose = require('mongoose');
const {Schema} = mongoose;


const SocialSchema = new Schema({

    Socialmedia:{
        type:Array
    },

})

const Social = mongoose.model('Social',SocialSchema);
module.exports = Social;