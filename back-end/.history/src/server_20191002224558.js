const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.send('to aqui carai');
})

app.listen(3333);