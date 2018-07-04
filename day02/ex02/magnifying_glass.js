var fs = require('fs');
var data = fs.readFileSync(process.argv[2],'utf-8');
var new_file = data.replace('/<a href=*>*</a>/g',function(x){return x[1].toUpperCase();});
console.log(new_file);