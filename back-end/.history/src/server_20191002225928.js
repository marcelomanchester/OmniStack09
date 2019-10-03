const express = require('express');
const app = express();
const routes = require('./routes');

app.get('/', (req, res, next) => {
   return res.send('to aqui carai');
})

app.listen(3333);