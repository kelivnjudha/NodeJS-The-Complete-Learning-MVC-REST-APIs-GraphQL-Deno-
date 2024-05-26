const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware');
    next(); // next() is a function that allow the request to continue to 'next' middleware
}); // use() function allow you to add middleware functions

app.use((req, res, next) => {
    console.log('THis is another middleware');
    res.send('<h1>HELLO FROM EXPRESS</h1>');// send() funciton from express allow to send responses
})

// create server

const server = http.createServer(app);

// listen on port 3000
server.listen(3000)