const express = require('express'); 
const connectToMongo = require('./db');
const cors = require('cors')
const app = express(); 
const bcrypt = require("bcrypt");
const PORT = 4000; 

app.use(express.json())
app.use(cors())
connectToMongo();
app.use(express.static('public'));
app.use('/login', require('./routes/login')); 
app.use('/category/subcategory', require('./routes/subcat')); 
app.use('/category/category', require('./routes/category')); 
app.use('/category/main', require('./routes/maincat')); 
app.use('/pages/extrapages', require('./routes/extrapg')); 
app.use('/pages/scriptures', require('./routes/scriptures')); 
app.use('/pages/content', require('./routes/content')); 
app.use('/pages', require('./routes/pages')); 
app.use('/pages/aarti', require('./routes/aarti')); 
app.use('/pages/temples', require('./routes/temples')); 
app.use('/languages', require('./routes/language')); 
app.use('/applanguages', require('./routes/applanguages')); 
app.use('/uploads/images',require('./routes/upload/imgs'));
app.use('/uploads/audios',require('./routes/upload/audios'));
app.use('/uploads/videos',require('./routes/upload/videos'));
app.use('/uploads/docs',require('./routes/upload/docs'));
app.use("/registeradmin",require('./routes/login'));
app.use("/blogs",require('./routes/blogs'));
app.use("/pages/blog",require('./routes/pageblog'));
app.use("/socials",require('./routes/social'));
app.use("/faqs",require('./routes/faq'));
app.use("/test",require('./routes/test'));


app.listen(PORT,()=>{
	console.log('Connected to server');
})