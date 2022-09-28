// VAR

var fistName; // Declación - undefined
fistName = 'Gerardo'; // Asignación
console.log(fistName);

var lastName = 'Ferreyra'; // Declaración y asignación
lastName = 'Pepe' // Reasignando
console.log(lastName);

// LET

let fruit = 'Apple'; // Declaración y asignación
fruit = 'Kiwi'; // Reasignación
console.log(fruit);

let fruit = 'Manzana'; // Error de redeclaración

// CONST

const animal = 'dog'; // Declaración y asignación
animal = 'cat'; // Reasignación.
console.log(animal); // Error de reasignación - TypeError: Assignment to constant variable.

const animal = 'Snike'; // Error de redeclaración.

// En arreglos y objetos la utilización de const es distinto, ya que se apunta a la referencia en memoria del objeto en cuestión.
const vehicles = [];
vehicles.push('Gerardo');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);