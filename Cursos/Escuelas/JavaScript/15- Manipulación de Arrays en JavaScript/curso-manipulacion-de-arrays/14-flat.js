const matriz = [
  [1, 2, 3],
  [4, 5, 6, [1, 2, [1, 2]]],
  [7, 8, 9]
];

// Con for
const newArray = [];
for (let i = 0; i < matriz.length; i++) {

  const array = matriz[i];

  for (let j = 0; j < array.length; j++) {
    const element = matriz[i][j];
    newArray.push(element);
  }
}

console.log('for', newArray); // [ 1, 2, 3, 4, 5, 6, [ 1, 2, [ 1, 2 ] ], 7, 8, 9 ]

// Con flat

/**
 * flat, consiste en retornar un array donde los sub-arrays han sido aplanados hasta una profundidad especificada.
 * El aplanamiento consiste en transformar un array de arrays a una sola dimensión.
 */
const rta = matriz.flat(3);
console.log('flat', rta); // [1, 2, 3, 4, 5, 6, 1, 2, 1, 2, 7, 8, 9]
