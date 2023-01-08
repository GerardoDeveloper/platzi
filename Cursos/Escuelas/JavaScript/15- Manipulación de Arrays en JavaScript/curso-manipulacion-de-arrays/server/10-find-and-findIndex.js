const numbers = [1, 30, 49, 29, 10, 13];

// Con for
let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 302323) {
    rta = element;
    break;
  }
}

console.log('for', rta);

// Con find

/**
 * Find y FindIndex, consisten en encontrar el primer elemento de un array que cumpla con la condición especificada en la función (callback).
 *
 * DIFERENCIAS ENTRE 'find' Y 'filter'
 *
 * - find: Sólo retorna un objecto que cumpla con la condición. También devuelve 1 sólo elemento, es decir, devuelve únicamente el primer elemento que cumple la condición.
 * - filter: Devuelve un array con todos los elementos que cumplen con la condición.
 * - findIndex: Devuelve la posición del elemento según la codición. -1 si la condición no se cumple.
 */
const rta2 = numbers.find(item => item === 302323)
console.log('find', rta2);

const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const rta3 = products.find(item => item.id === '🍔')
console.log('find', rta3);

const rta4 = products.findIndex(item => item.id === '🍔')
console.log('findIndex', rta4);