const fs = require('fs');

console.log('Start');

fs.appendFileSync('./dataSync.txt', 'This is the content for synchronous example.');

const file = fs.readFileSync('./dataSync.txt', 'utf-8');

console.log(file);

fs.unlinkSync('./dataSync.txt');

console.log('End');