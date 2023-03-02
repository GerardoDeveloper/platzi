/**
 * Tipado de array común en TS.
 *
 * ? NOTA: En un array tipado no importan las posiciones de los tipos de variables.
 * ! No importa el limite.
 */
const prices: (number | string)[] = [1, 2, 3, ''];
prices.push('231'); // CORRECTO.
prices.push(313); // CORRECTO.

/**
 * Creando tuplas.
 *
 * ? NOTA: En una tupla si importan las posiciones de los tipos de variables.
 * ! Sí importa el limite.
 */
let user: [string, number, boolean];
// user = []; // INCORRECTO
// user = ['test']; // INCORRECTO
// user = [45]; // INCORRECTO
// user = ['test', 32]; // INCORRECTO
user = ['test', 12, true]; // CORRECTO

/**
 * Destructuración de una tupla
 *
 * ? NOTA: Toma el 1er valor, el 2do de user y el 3ro lo ignora.
 */
const [username, age] = user;
console.log(username);
console.log(age);

