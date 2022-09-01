// En el objeto 'global' se encuentran todos los modulos y variables globales.
console.log(global);

// Ubicación de ficheros
console.log(__dirname);
console.log(__filename);

// Timers
console.log(setInterval);
console.log(clearInterval);
console.log(setTimeout);
console.log(clearTimeout);
console.log(setInmediate);

// Modules
console.log(exports);
console.log(module);
console.log(require);

/**
 * Seteando variables globales.
 *
 * NOTA: NUNCA se debe útilizar variables globales (en lo posible)
 *       porque esto da mas problemas que soluciones.
 */
global.test = 'Ejemplo';
console.log(test);
console.log(global.test);
