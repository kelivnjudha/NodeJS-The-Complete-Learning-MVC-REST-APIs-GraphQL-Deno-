const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const adminRouter = require('./routers/admin');
const shopRouter = require('./routers/shop');
const rootDir = require('./utils/path');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRouter);
app.use(shopRouter);
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})

app.listen(3000);