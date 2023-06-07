/**
 * Antes de ES6
 */
function Person(name) {
  this.name = name;
}

// Métodos antes de ES6
Person.prototype.greet = function () {
  return `Hello i am ${this.name}`;
};

var person = new Person("Alex");
console.log(person.name); //> Alex
console.log(person.greet()); //> Alex

/* ======================================================================== */

// ES6:
class Cat {
  constructor(cat) {
    this.name = cat;
  }

  // Métodos en ES6
  greet() {
    return 'Hola! Mis dueñ@s me llaman ' + this.name;
  }
}

const cat = new Cat("Michi");
console.log(cat.name);
console.log(cat.greet());