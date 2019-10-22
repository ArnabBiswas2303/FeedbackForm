const express = require('express');
const app = express();
const ejs = require('ejs');
const PostHandler = require('./routers/postHandler');
const mongoose = require('mongoose');

app.use(express.static(__dirname + '/public'))

app.use('/posts',PostHandler);

mongoose.connect('mongodb+srv://arnab_biswas:a23031999A@freecodecamp-esmrq.mongodb.net/test?retryWrites=true&w=majority', () => console.log('Connected!'))

app.get('/', (req,res) => {
    res.render('form.ejs');
})

app.listen(3000, (req,res) => {
    console.log("Server running on port 3000 ...");
})