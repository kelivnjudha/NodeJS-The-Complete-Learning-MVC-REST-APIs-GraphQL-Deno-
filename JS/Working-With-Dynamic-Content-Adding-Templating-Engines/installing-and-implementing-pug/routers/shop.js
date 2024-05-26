const express = require('express');
const path = require('path');

const rootDir = require('../utils/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/',(req, res, next) => {
    if(adminData.adminData){
        console.log(adminData.adminData);
    }
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop');
});

module.exports = {router};