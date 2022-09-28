pi = 3.141516;
console.log(pi); // Muestra el valor de 'pi', esto ocurre por el hoisting (elevación de variable)

'use strict'
pi = 3.141516;
console.log(pi); // ReferenceError: pi is not defined

// Dentro de funcions el modo estricto
function myFunction() {
  'use strict'

  return pi = 3.1416; // ReferenceError: pi is not defined
}

console.log(myFunction());