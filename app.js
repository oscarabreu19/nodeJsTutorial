const os = require('os');
const fs = require('fs');
const mi = require('./mito.js');

// Consume what was expose from the module 'mito.js'
myModule.greet();
console.log(myModule.subscribers);

// Here we can see what is 'module'
// console.log(module);

const result = myModule.addition(3, 4);
console.log(result);

const resultTwo = myModule.additionTwo(8, 4);
console.log(resultTwo);

const resultUnique = myModule.additionUnique(4);
console.log(resultUnique);