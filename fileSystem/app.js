const fs = require('fs');

console.log('Iniciado');

const fileData = fs.readFileSync('./data.txt', 'utf-8');

console.log(fileData);

fs.rename('./data.txt', 'dataRenamed.txt', (error, data) => {
    if (error) throw error;
    console.log('Renamed!');
});

console.log('Finalizado');