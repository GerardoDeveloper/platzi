<<<<<<< HEAD
const nombre = process.env.NOMBRE ?? 'Sin nombre';
const web = process.env.MI_WEB ?? 'no tengo web';
=======
let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.MI_WEB || 'no tengo web';
>>>>>>> 54bbc1cb103879394343da2c602350ce61e87571

console.log('Hola '+ nombre);
console.log('Mi web es '+ web);
