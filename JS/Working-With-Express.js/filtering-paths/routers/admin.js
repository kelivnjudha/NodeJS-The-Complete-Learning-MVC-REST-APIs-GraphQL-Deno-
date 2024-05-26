const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send(`<form action="/admin/reg" method="POST"><input type="text" name="product"><button type="submit">Submit</button></form>`);
});

router.post('/reg', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;