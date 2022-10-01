function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();

// Obtenemos los valores
console.log(g.next().value); // 1er elemento.
console.log(g.next().value); // 2do elemento.
console.log(g.next().value); // 3er elemento.


function* iterate(array) {
  for (let value of array) {
    yield value
  }
}

const arrayIterator = iterate(['oscar', 'omar', 'ana', 'lucia', 'juan']);

console.log(arrayIterator.next().value);
console.log(arrayIterator.next().value);
console.log(arrayIterator.next().value);
console.log(arrayIterator.next().value);
console.log(arrayIterator.next().value);
console.log(arrayIterator.next().value);