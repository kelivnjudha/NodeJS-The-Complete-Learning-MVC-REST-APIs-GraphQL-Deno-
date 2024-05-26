const express = require('express');
const path = require('path');
const fs = require('fs');

const rootDir = require('../utils/path');
const router = express.Router();

router.get('/add-products', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'addProducts.html'));
});

router.post('/reg', (req, res, next) => {
    console.log(req.body);
    fs.writeFileSync('products.txt', req.body.Product);
    res.redirect('/');
});

module.exports = router;