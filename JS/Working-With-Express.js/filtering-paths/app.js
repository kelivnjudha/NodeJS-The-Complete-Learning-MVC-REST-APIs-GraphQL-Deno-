const express = require('express');
const bodyParser = require('body-parser');

const adminRouters = require('./routers/admin');
const shopRouters = require('./routers/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended:false }));
app.use('/admin',adminRouters);
app.use(shopRouters);


app.listen(3000);