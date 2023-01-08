const letters = ['a', 'b', 'c'];

// map

/**
 * Map, consiste en crear un nuevo array a partir de los elementos originales transformados mediante una función (callback).
 */
const newArrayMap = letters.map(item => item + '++');

// for
const newArrayFor = [];

for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  newArrayFor.push(element + '++');
}

console.log('original', letters);
console.log('newMap', newArrayMap);
console.log('newFor', newArrayFor);