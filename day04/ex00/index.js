const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.sendFile('/Users/yacinesibous/42Projects/web_piscine/day03/ex06/login.html');
});
app.get('/login', (req, res) => {
    var username = req.body.username;
    var password = req.body.passwd;
    if (req.body.submit == "ok") {
        res.send("<html><body>OK</body></html>");
    } else {
        res.send("<html><body>Error</body></html>")
    }
});
app.listen(8080);