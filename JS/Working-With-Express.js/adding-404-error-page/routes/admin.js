const express = require('express');

const router = express.Router();
const submitUrl = '/reg'

router.get('/add-product', (req, res, next) => {
    res.send(`<form action="${submitUrl}" method="POST"><input type="text" name="product"><button type="submit"</button><form>`)
});

router.post(submitUrl, (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;