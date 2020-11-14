const fs = require('fs');

console.log('Start');

const fileData = fs.readFileSync('./data.txt', 'utf-8');

console.log(fileData);

fs.appendFile('./data.txt', '. This is a new text!', (e) => {
    if(e) throw e;
    console.log('Appended new text!');
});

console.log('End');