const mongoose = require('mongoose');
const {Schema} = mongoose;


const scriptureContent = new Schema({

    ScriptureId:{
        type:String
    },
    Language:{
        type:String
    },
    Chapters:{
        type:Array
    },
    Pdf:{
        type:String
    },
    Pdfop:{
        type:String
    },
    PdfFile:{
        type:String
    },
    Video:{
        type:String
    },
    Videoop:{
        type:String
    },
    Audio:{
        type:String
    },
    Audioop:{
        type:String
    },
    Text:{
        type:String 
    },
    Textop:{
        type:String 
    },

})

const Content = mongoose.model('Content',scriptureContent);
module.exports = Content;