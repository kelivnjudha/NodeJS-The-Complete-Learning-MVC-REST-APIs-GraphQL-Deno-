// import express
const express = require('express');

const app = express();

app.use((req, res, next) => { // use() allow you to add middleware functions
    console.log('middle level 1');
    next(); // function to let the request continue to next middleware
});

app.use((req, res, next) => {
    console.log('middleware level 2');
    res.send('<h1>Testing Express.JS</h1>');
});

app.listen(3000);