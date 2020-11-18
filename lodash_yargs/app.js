const _= require('lodash');
const argv = require('yargs').argv;

const x = { nombre: 'Oscar' };
const y = { apodo: 'Osky' };
const z = [
    { nombre: 'Mito', apellido: 'Code', edad: 26 },
    { nombre: 'Jaime', apellido: 'Medina', edad: 26 }
];

if (argv.user === 'user' && argv.pass === 'mitocode') {
    const result = _.assign(x, y);
    console.log(result);

    _.times(3, () => {
        console.log('Esto se muestra 3 veces');
    });

    const element = _.find(z, { edad: 26 });
    console.log(element);
} else {
    console.log('Invalid');
}