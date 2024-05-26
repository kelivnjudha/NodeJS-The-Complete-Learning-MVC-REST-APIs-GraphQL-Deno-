``` javascript

const express = require('express');

const router = express.Router();

router.get('/', (req,res,next) => {
    res.send('<h1>LANDING PAGE</h1>');
});

router.get('/user', (req, res, next) => {
    res.send('<h1>USER PAGE</h1>');
});

```

In the given code, Even tho the `'/'` `LANDING PAGE` is above the `'/user'` `USER PAGE` since we use `get()`
request, it won't always return the `'/'` page like we used `use()`.