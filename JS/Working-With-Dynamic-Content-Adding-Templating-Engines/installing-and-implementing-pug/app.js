const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const admin = require('./routers/admin');
const shop = require('./routers/shop');
const rootDir = require('./utils/path');

const app = express();

app.set('view engine', 'pug'); // It's only for pug
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', admin.router);
app.use(shop.router);

app.listen(3000);