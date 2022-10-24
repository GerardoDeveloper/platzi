var lastName = 'Gerardo'; // declarando y asignando.
lastName = 'Ariel'; // reasignando.
console.log(lastName);

let fruit = 'Apple'; // declarando y asignando.
fruit = 'Kiwi'; // reasignando.
console.log(fruit);

const animal = 'Dog'; // declarando y asignando.
animal = 'Cat'; // reasignando.
console.log(animal); // TypeError: Assignment to constant variable.

const fruits = () => {
  if (true) {
    var fruit1 = 'Apple'; // function scope
    let fruit2 = 'Kiwi'; // block scope
    const fruit3 = 'Banana'; // block scope
  }

  console.log(fruit1); // Apple
  console.log(fruit2); // ReferenceError: fruit2 us not defined.
  console.log(fruit3); // ReferenceError: fruit3 us not defined.
}

fruit();