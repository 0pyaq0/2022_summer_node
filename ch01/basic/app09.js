const fs = require('fs');
fs.readFile('./ch01/app01.js', (err, data) => {
    if(err) {
        throw err;
    }
    console.log(data.toString());
});