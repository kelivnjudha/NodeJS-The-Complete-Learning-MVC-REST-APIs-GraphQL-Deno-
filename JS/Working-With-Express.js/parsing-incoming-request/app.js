const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false})); // this body-parser will only parse requests sent through a form

app.use('/add-product', (req,res,next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">ADD PRODUCT</button></form>');
});

app.use('/product', (req, res, next) => { // right now this method would also execute for incoming GET request.
    console.log(req.body); // we only want to listen to a POST request, See in (limiting-middleware-execution-to-POST-req) folder
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    res.send('<h1 style="display:flex; justify-content:center;">Landing Page</h1>');
});

app.listen(3000);
