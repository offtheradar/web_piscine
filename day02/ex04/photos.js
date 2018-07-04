const fs = require('fs');
const path = require('path');
if ([process.argv[2]]) { 
    fs.mkdirSync(path.join(__dirname, process.argv[2]), 0777);
}