// Declaracion de una clase
class User { };

// genera una instancia
// const newUser = new User ();

class user {

  // métodos
  greeting() {
    return "hello";
  }
};

const gndx = new user();
console.log(gndx.greeting());

const bebeloper = new user();
console.log(bebeloper.greeting());


class user {

  // Constructor
  constructor() {
    console.log("Nuevo usuario");
  }

  greeting() {
    return "hello";
  }
}

const david = new user();

// this

class user {

  constructor(name) {
    this.name = name;
  }

  // Metodos
  speak() {
    return "Hello";
  }

  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const ana = new user("Ana");
console.log(ana.greeting());

// setters getters

class user {

  //constructor
  constructor(name, age) {
    this.name = name;
    this.age = age
  }

  // metodos privado
  #speak() {
    return "Hello";
  }

  // método público
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  // metodos privado
  get #uAge() {
    return this.age;
  }

  // metodos privado
  set #uAge(n) {
    this.age = n;
  }
}

const bebeloper1 = new user("david", 15);
console.log(bebeloper1.uAge); // undefined
console.log(bebeloper1.uAge = 20); // 20