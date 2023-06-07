/**
 * Cuando se utiliza funciones, el orden no altera el resultado,
 * es decir, no importa en el orden que se sean llamadas las funciones,
 * se van a ejecutar sin problemas.
 */
greet(); // Hello word

function greet() {
  let greeting = 'Hello word';
  console.log(greeting);
}

/* =============================================================================== */

var greet = 'Hello word';

(
  () => {
    console.log(greet); // undefined
    var greet = 'Hi';
    console.log(greet); // Hi
  }
)();

/**
 * Esto seria lo  mismo que hacer...
 *
 * ? Esto es porque el Hoisting sucede para la declaración de la variable,
 * ? pero NO para la asignación.
 * ! Para evitar esto, deberias de evitar el uso de 'var'
 */
var greet = 'Hello word';

(
  () => {
    var greet; // <---
    console.log(greet); // undefined
    var greet = 'Hi';
    console.log(greet); // Hi
  }
)();