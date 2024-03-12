const mongoose = require('mongoose');
const uri = "mongodb+srv://dhruvlalwani004:fMlrd6XVtw0Q0zvh@mongodata.5xpiwnh.mongodb.net/sanatan?retryWrites=true&w=majority";
async function connectToMongo(){
    try {
        await mongoose.connect(uri);
        console.log("Connected to db");
    } catch (error) {
        console.log(error);
    }
    }

module.exports = connectToMongo;