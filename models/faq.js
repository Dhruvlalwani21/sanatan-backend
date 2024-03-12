const mongoose = require('mongoose');
const {Schema} = mongoose;


const FaqsSchema = new Schema({

    Title:{
        type:String
    },
    Description:{
        type:String
    },

})

const Faqs = mongoose.model('Faqs',FaqsSchema);
module.exports = Faqs;