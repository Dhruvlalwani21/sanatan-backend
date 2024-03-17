const mongoose = require('mongoose');
const uri = "mongodb+srv://sanatandharmaya:N3LJYI12vZcvmspS@sanatandharmaya.oftidvs.mongodb.net/sanatandharama?retryWrites=true&w=majority&appName=sanatandharmaya";
async function connectToMongo(){
    try {
        await mongoose.connect(uri);
        console.log("Connected to db");
    } catch (error) {
        console.log(error);
    }
    }

module.exports = connectToMongo;