const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false})); // Use it to make an error goes away, but IDK what it mean

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">ADD</button></form>');
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});


app.use('/', (req, res, next) => {
    res.send('<h1>Landing Page</h1>')
});

app.listen(3000);