const bodyParser = require('body-parser');
const express = require('express');

const shopRouters = require('./routers/shop'); 
const adminRouters = require('./routers/admin')
const app = express();

app.use(bodyParser.urlencoded({ extended:false }));

app.use(shopRouters);
app.use(adminRouters);

app.listen(3000);