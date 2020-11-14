const fs = require('fs');

console.log('Iniciado');
fs.readFile('./data.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(`Error ${error}`);
        return;
    }
    console.log(data);
});
console.log('Finalizado');