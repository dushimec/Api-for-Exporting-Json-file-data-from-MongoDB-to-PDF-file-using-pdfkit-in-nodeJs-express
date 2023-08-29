const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute');
const app = express();

mongoose.connect('mongodb+srv://chriss:dushime@cluster0.xxjvobs.mongodb.net/bigProject?retryWrites=true&w=majority')
.then(() =>{
    console.log('Connected');
})
.catch((err) =>{
    console.log(err);
})

app.use('/',userRoute)

app.listen(3000, () => {
    console.log('Server is running...');
});
