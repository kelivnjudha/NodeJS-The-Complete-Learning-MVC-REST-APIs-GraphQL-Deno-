const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1>Landing Page Test</h1>');
});

router.use((req, res, next) => {
    res.status(404).send('<h1>PAGE NOT FOUND</h1>');
});

module.exports = router;