// Parámetro: number
function getDouble(number) {
  return number * 2;
}

/**
 * !NOTA:
 * ! - Se recomienda no superar los 3 argumentos por función,
 * !   Esto es para complir la limitación de que la función sólo debe tener
 * !   una responsabilidad.
 * ! - También para que el código sea más legible.
 */

// Argumento: 10
getDouble(10);

// Parámetro por default
function greet(person = 'extraño') {
  console.log("Hola " + person);
}
greet("Carina"); // "Hola Carina"
greet(); // "Hola extraño"

/**
 * Rest Operator o Spread Operator
 */

// Sin rest
function add(x, y) {
  console.log(x + y);
}

add(10, 5); // 15

// Con rest
function add(...args) {
  console.log(args.reduce((prev, current) => prev + current, 0));
}

add(1, 5, 5, 2, 1, 1); // 15

// El parámetro rest debe ser el último.
function add(x, y, ...args) {
  console.log(args);
}

add(1, 5, 5, 2, 1, 1); // [ 5, 2, 1, 1 ]

// Clonar objetos y array
const numbersA = [1, 2, 3];
const clonedNumbers = [...numbersA];
console.log(clonedNumbers) // [1, 2, 3]

const numbersB = [4, 6, 8]
const totalNumbers = [...numbersA, ...numbersB];
console.log(totalNumbers); // [ 1, 2, 3, 4, 6, 8 ]

// Object
const cource = {
  title: 'Jvascript',
  content: 'Todo lo que se necesita',
};

const courdeCloned = Object.assign({}, ...cource); // Antes de ES6
const spreadCourseCloned = {...cource}; // spread operator
console.log(spreadCourseCloned); // { title: 'Jvascript', content: 'Todo lo que se necesita' }