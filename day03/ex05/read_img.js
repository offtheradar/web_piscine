const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.sendFile('/Users/yacinesibous/42Projects/web_piscine/day03/img/42.png');
});
app.listen(8080);