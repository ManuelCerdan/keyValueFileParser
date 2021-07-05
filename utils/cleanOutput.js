const fs = require('fs');
const path = require('path');

const directory = 'data/output';

// Lo lanzamos de forma asincrona
fs.readdir(directory, (err, files) => {
    if (err) throw err;

    for (const file of files) {
        fs.unlink(path.join(directory, file), err => {
        if (err) throw err;
        });
    }
});


