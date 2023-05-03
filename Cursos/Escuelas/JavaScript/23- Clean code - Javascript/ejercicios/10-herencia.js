/**
 * Antes de ES6
 */

// Clase padre
function Person(name) {
  this.name = name;
}

// Métodos antes de ES6
Person.prototype.greet = function () {
  return `Hello i am ${this.name}`;
};

// Clase hija
function Developer(name) {
  this.name = name;
}

// Herencia antes de ES6
Developer.prototype = Object.create(Person.prototype)

// Creación de un nuevo método
Developer.prototype.writeCode = function (coffee) {
  if (coffee) {
    console.log(`Estoy trabajando en un nuevo feature`);
  } else {
    console.log(`Necesito un cafe.`);
  }
}

// Utilizando la herencia prototipal
var developer = new Developer('Gerardo');
console.log(developer.greet()); // <-- Herencia -  Hello i am Gerardo.
developer.writeCode(); // Necesito un cafe.

/* ======================================================================== */

/**
 * En ES6
 */

//Clase padre
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hola, mi nombre es ${this.name}`);
  }
}

//Clase hija
class Developer extends Person {
  constructor(name) {
    super(name);
  }
  writeCode(coffee) {
    coffee ? console.log("Estoy desarrollando una nueva feature") : console.log("Necesito más café...")
  }
}

const developer = new Developer('Gerardo');
developer.greet(); // Hola, mi nombre es Gerardo
developer.writeCode(); // Necesito más café...