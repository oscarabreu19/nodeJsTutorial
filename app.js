const os = require('os');
const fs = require('fs');
const mi = require('./mito.js');

// Consume what was expose from the module 'mito.js'
mi.greet();
console.log(mi.subscribers);

// Here we can see what is 'module'
console.log(module);