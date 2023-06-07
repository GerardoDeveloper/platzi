// Global
let greeting = "Hello world!";

function greet() {
  console.log(greeting);
}

greet(); // Hello world!


/* ===================================================================================== */

// Ámbito local o de función
let greeting2 = "Hello world!";

function greet2() {
  console.log(greeting2);
  let greeting2 = 'another hello world';
}

greet2(); // ReferenceError: Cannot access 'greeting2' before initialization

/* ===================================================================================== */

// Ámbito de bloque
{
  let greeting = "Hello world!";
  var lang = 'English';
  console.log(greeting); // Hello world!
}

console.log(lang); // English
console.log(greeting); //ReferenceError: greeting is not defined

/* ===================================================================================== */

// Ámbito estático o ámbito lexico
const age = 28;

function printAge() {
  console.log(age);
}

function mainApp() {
  const age = 26;
  printAge();
}

/**
 * Output es: 28, que es el primer valor que se le definió a la variable 'age'
 *
 * Esto pasa porque js es de un ámbito  estático y no dinámico.
 */
mainApp();