/**
 * Lo que sucede en realidad en el siguiente código,
 * es que la variable 'nameOfDog' se eleva al scope más
 * cercano, que en este caso es el scope global y se asigna
 * a 'undefined'
 */

// EN VARIABLES
//var nameOfDog; // undefined
console.log(nameOfDog);
var nameOfDog = 'Elmo';
console.log(nameOfDog); // Elmo

// EN FUNCIONES

/**
 * Lo que sucede en memoria en realidad es que se eleva a la variable y a la función
 * al scope más cercano (global) y luego se ejecuta.
 */

// var elmo; // undefined

// function nameOfDog() {
//   console.log(`El mejor perrito es ${elmo}`);
// }

nameOfDog();

function nameOfDog() {
  console.log(`El mejor perrito es ${elmo}`);
}

var elmo = 'Elmito';