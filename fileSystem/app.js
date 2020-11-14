const fs = require('fs');

console.log('Start');

const fileData = fs.readFileSync('./data.txt', 'utf-8');

console.log(fileData);

fs.appendFile('./data.txt', '\nThis is a new text!', (e) => {
    if(e) console.log(e);
    console.log('Appended new text!');
});

console.log('End');