const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("<html><body>Hello</body></html>");
});
app.listen(8080);