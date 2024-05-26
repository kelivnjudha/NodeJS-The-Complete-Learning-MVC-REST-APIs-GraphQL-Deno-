const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/users',(req, res, next) => {
    res.send('<ul><li>USER1</li><li>USER2</li><li>USER3</li><li>USER4</li></ul>')
})

app.use('/add-user', (req,res,next) => {
    res.send('<form action="/done" method="POST"><input type="text" name="user"><button type="submit">SUBMIT</button></form>')
})

app.use('/done', (req, res, next) => {
    console.log(req.body.user);
    res.redirect('/');
})

app.use('/',(req,res,next) => {
    res.send('<h1>LANDING PAGE</h1>')
})


app.listen(3000);