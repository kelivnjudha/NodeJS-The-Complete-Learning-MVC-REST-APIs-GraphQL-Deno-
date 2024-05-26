const express = require('express');

const app = express();


app.use('/products', (req, res, next) => { // use(path, callback, [callback]) use() function syntax
    console.log('3nd middleware');
    res.send('<h1 style="width:100%; display:flex; justify-content:center;">Products</h1>')
});


app.use('/', (req, res, next) => {
    console.log('2nd middleware');
    res.send('<h1 style="width:100%; display:flex; justify-content:center;">HI</h1>')
});

app.listen(3000); 