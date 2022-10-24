function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(['Angel', 'Juan', 'Víctor', 'Marcos']);
console.log(it.next().value); // Angel
console.log(it.next().value); // Juan
console.log(it.next().value); // Víctor
console.log(it.next().value); // Marcos
console.log(it.next().value); // undefined
console.log(it.next().value); // undefined