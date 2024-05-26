// const http = require('http'); // We don't need this anymore thanks to express js

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware');
    next(); // next() is a function that allow the request to continue to 'next' middleware
}); // use() function allow you to add middleware functions

app.use((req, res, next) => {
    console.log('THis is another middleware');

})
/**
// create server
const server = http.createServer(app);

// listen on port 3000
server.listen(3000)
 */

// instead of creating server and listening we can do it in one line of code using express.js

app.listen(3000)