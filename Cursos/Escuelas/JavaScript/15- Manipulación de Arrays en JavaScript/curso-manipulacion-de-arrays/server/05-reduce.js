const totals = [1, 2, 3, 4];

let sum = 0;

// Con for
for (let index = 0; index < totals.length; index++) {
  const element = totals[index];
  sum = sum + element;
}

console.log(sum);

// Con reduce

/**
 * Reduce, consiste retornar un solo valor del array iterado a partir de una función (callback).
 */
const rta = totals.reduce((sum, element) => sum + element, 0) //<-- Valor inicial, es decir, es el estado inicial de 'sum'
console.log('rta', rta);