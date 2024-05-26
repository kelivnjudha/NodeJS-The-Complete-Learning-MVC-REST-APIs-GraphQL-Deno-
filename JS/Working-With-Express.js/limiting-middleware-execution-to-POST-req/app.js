const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/reg" method="POST"><input type="text" name="product"><button type="submit">SUBMIT</button></form>');
});

// use() will allow both POST and GET requests
app.use('/reg', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});


// get() will only allow GET requests
app.get('/reg', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

// post() will only allow POST requests
app.post('/reg', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})


app.use('/', (req, res, next) => {
    res.send('<h1>Landing Page</h1>');
});

app.listen(3000);
