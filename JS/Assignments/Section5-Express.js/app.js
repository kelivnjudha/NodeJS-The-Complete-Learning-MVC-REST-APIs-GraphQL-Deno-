const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('1st middleware');
    next();
});

app.use('/users',(req, res, next) => {
    res.send('<h1 style="display:flex; justify-content:center">Welcome from users Page<h1>')
});


app.use('/',(req, res, next) => {
    console.log('2nd middleware');
    res.send('<h1 style="display:flex; justify-content:center">Assignment Express.js<h1>');
});


app.listen(3000);