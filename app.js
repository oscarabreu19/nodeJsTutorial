const os = require('os');
const fs = require('fs');

const cpu = os.cpus();
const sistema = os.platform();
const usuario = os.hostname();

console.log(cpu);
console.log(sistema);
console.log(usuario);

fs.appendFile('public/mitoCode.txt', `Informacion del CPU ${JSON.stringify(cpu)}`, function (error) {
    if (error)
        console.log(`Error '${error}' al crear el archivo`);
});