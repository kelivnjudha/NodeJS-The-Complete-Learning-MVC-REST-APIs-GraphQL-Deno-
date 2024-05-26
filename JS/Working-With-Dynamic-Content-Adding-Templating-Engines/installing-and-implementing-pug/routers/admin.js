const express = require('express');
const path = require('path');

const rootDir = require('../utils/path');


const router = express.Router();

const adminData = [];

router.get('/add-products', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'addProduct.html'));
});

router.post('/reg', (req, res, next) => {
    const item = req.body.Products
    if(item){
        adminData.push({Product : item});
    }
    console.log(item)
    res.redirect('/');
});

module.exports = {router, adminData};