const express = require('express');
const app = express();
require('./mongo');

app.use(express.json(),express.urlencoded())
app.use('/', require('./routes/routes'));

app.listen(3020,() => {
    console.log('Port is running on PORT ' , 3020);
});