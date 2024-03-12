const mongoose = require('mongoose');
const {Schema} = mongoose;


const PageBlogSchema = new Schema({

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
    Image:{
        type:String
    },
    Banner:{
        type:String
    },
    Title:{
        type:String
    },
    Description:{
        type:String
    },
    Gallery:{
        type:Array
    },

})

const PageBlog = mongoose.model('PageBlog',PageBlogSchema);
module.exports = PageBlog;