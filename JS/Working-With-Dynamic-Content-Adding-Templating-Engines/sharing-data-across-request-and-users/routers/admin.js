const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const rootDir = require('../utils/path');
const exp = require('constants');
const { title } = require('process');

const router = express.Router();

const products = [];

router.get('/add-products', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'addProduct.html'));
});

router.post('/reg', (req, res, next) => {
    let item = req.body.Products;
    if(item){
        products.push({Product: item})
    }
    res.redirect('/');
});


exports.router = router;
exports.products = products;