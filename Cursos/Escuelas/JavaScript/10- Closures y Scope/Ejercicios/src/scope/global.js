// Variables

var a; // Se está declarando.
var a = 'aa'; // Redeclaración.
var b = 'b'; // Declarando y Asignando.
b = 'bb'; // Reasignación.

// Global scope
var fruit = 'Apple'; // Global

function bestFruit() {
  console.log(fruit);
}

bestFruit();

// Otra forma de declarar en un scope global, es asignar el valor de una variable directamente, pero nunca declararla. Por defecto la variable se declarará de forma global.
function countries() {
  country = 'Argentina';
  console.log(country);
}

countries();
console.log(country);