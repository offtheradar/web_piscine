const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.sendFile('/Users/yacinesibous/42Projects/web_piscine/day03/ex06/login.html');
});
app.post('/login', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    if (username == "zaz" && password == "Ilovemylittleponey") {
        res.sendFile("/Users/yacinesibous/42Projects/web_piscine/day03/img/42.png");
    } else {
        res.send("<html><body>That area is accessible for members only.</body></html>")
    }
});
app.listen(8080);