const fs = require('fs');

setInterval(() => {
    fs.unlink('./sam1.txt', (err) => {
        if(err) {
            console.error(err);
        }
    });
}, 500);