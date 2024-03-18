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
app.use('/category/subcategory', require('./routes/category/subcat')); 
app.use('/category/category', require('./routes/category/category')); 
app.use('/category/main', require('./routes/category/maincat')); 
app.use('/pages/extrapages', require('./routes/pagestyles/extrapg')); 
app.use('/pages/scriptures', require('./routes/pagestyles/scriptures')); 
app.use('/pages/content', require('./routes/pagestyles/content')); 
app.use('/pages', require('./routes/pagestyles/pages')); 
app.use("/pages/blog",require('./routes/pagestyles/pageblog'));
app.use('/pages/aarti', require('./routes/pagestyles/aarti')); 
app.use('/pages/temples', require('./routes/pagestyles/temples')); 
app.use('/languages', require('./routes/languages/language')); 
app.use('/applanguages', require('./routes/languages/applanguages')); 
app.use("/blogs",require('./routes/blogs/blogs'));
app.use('/uploads/images',require('./routes/upload/imgs'));
app.use('/uploads/audios',require('./routes/upload/audios'));
app.use('/uploads/videos',require('./routes/upload/videos'));
app.use('/uploads/docs',require('./routes/upload/docs'));
app.use("/registeradmin",require('./routes/login'));
app.use("/socials",require('./routes/social'));
app.use("/faqs",require('./routes/faq'));
app.use("/test",require('./routes/test'));
// Login route
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (user) {
      res.status(200).json({ message: 'Login successful', user });
    } else {
      res.status(400).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


app.listen(PORT,()=>{
	console.log('Connected to server');
})
