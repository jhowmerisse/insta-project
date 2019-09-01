const express = require('express');
const mongoose = require('mongoose');

//cria servidor
const app = express();

mongoose.connect('mongodb+srv://user:user@cluster0-ja2je.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.use(require('./routes'));

app.listen(3333);