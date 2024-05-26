const express = require('express');
const path = require('path');

const rootDir = require('./utils/path');
const shopRouter = require('./routers/shop');
const adminRouter = require('./routers/admin');

const app = express();

app.use(adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', 'pageNotFound.html'));
});

app.listen(3000);