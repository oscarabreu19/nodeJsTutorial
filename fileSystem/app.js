const fs = require('fs');

console.log('Iniciado');
const fileData = fs.readFileSync('./data.txt', 'utf-8');
console.log(fileData);
console.log('Finalizado');