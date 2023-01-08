const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

// Con for

// const newArray = elements; //  --> De esta manera se clona un array, pero con la referencia de memoria del array original puiendoo producir efectoss secundarios.
const newArray = [...elements]; //  --> Para clonar un array sin la referencia de memoria del array original, utilizamos spread operator (operador de propagación)

for (let index = 0; index < othersElements.length; index++) {
  const element = othersElements[index];
  newArray.push(element);
}

console.log('for', newArray); // [1, 1, 2, 2, 3, 3, 4, 4]

// Con concat

/**
 * concat, es inmutable y consiste en crear un nuevo array a partir de la unión de otros valores o arrays especificados como argumentos.
 */
const rta = elements.concat(othersElements);
console.log('concat', rta); // [1, 1, 2, 2, 3, 3, 4, 4]

// Con spread operator (operador de propagación)
const rta2 = [...elements, ...othersElements];
console.log('...', rta2); // [1, 1, 2, 2, 3, 3, 4, 4]

/**
 * ADVERTENCIA: Sí se utiliza spread operator (operador de propagación) con string,
 * el spread operator descompondrá el string en un array. Por lo general, spread operator se aplica sólo con array
 */
const rta3 = [...elements, ...'random'];
console.log('rta3', rta3); // [1, 1, 2, 2, 'r', 'a', 'n', 'd', 'o', 'm']

// Con el método 'push' + spread operator
elements.push(...othersElements);
console.log('elements', elements); // [1, 1, 2, 2, 3, 3, 4, 4]