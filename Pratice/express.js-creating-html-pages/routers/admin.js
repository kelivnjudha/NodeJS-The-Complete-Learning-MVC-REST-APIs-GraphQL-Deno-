const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const rootDir = require('../utils/path');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended:false }));

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'form.html'));
});

router.post('/reg', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;