const fs = require('fs');

console.log('Start');
const fileName = 'newFile.txt';
fs.appendFile(fileName, 'This is the file content to delete', (error) => {
    if (error) {
        throw error;
    } else {
        fs.readFile(fileName, 'utf-8', (error, data) => {
            if (error) {
                throw error;
            } else {
                console.log(data);
                fs.unlink(fileName, (error) => {
                    if (error) throw error;
                });
            }
        });
    };
});

console.log('End');