// Reading File Synchronously

var fs = require('fs');

var data = fs.readFileSync('Text.txt', 'utf8');
console.log(data);