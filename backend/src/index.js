const express = require('express');

//cria servidor
const app = express();

//midleware
app.get('/', (req, res) => {
    return res.send(`Hello ${req.query.name}`);
});

app.listen(3333);