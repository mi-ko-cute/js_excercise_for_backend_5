const express = require('express');
const router = require('./router/index.js');

const app = express();
const PORT = 3001;

app.use('/pages', router);
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});