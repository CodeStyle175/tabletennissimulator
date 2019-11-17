const express = require('express');

const app = express();

app.use("/static", express.static('./static/'));

app.get('/', function(req, res) {
    res.sendFile('/index.html', { root: __dirname });
});

app.listen(8080);
