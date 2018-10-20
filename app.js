const express = require('express');
const routers = require('./routers.js');

const app = express();

const port = 3000;

app.use('/', routers);

app.listen(port, () => {
    console.log(`api-server-example app listening on port ${port}!`);
});