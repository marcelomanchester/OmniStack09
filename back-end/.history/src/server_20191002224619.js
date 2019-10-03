const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
   return res.send('to aqui carai');
})

app.listen(3333);