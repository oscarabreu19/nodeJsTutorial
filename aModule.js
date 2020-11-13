module.exports = {
    subscribers: 22000, // Expose to variable
    additionUnique: a => a + 10,
    additionTwo: (a, b) => a + b,
    addition: (a, b) => {
        return a + b;
    },
    greet: () => {  // Expose to function
        console.log('Suscribete al canal');
    }
};