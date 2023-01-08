const words = ['spray', 'limit', 'elite', 'exuberant'];

// Con for
const newArray = [];

for (let index = 0; index < words.length; index++) {
  const item = words[index];
  if (item.length >= 6) {
    newArray.push(item);
  }
}
console.log('newArray', newArray);
console.log('original', words);

// Con filter

/**
 * Filter, consiste en crear un nuevo array a partir de los elementos originales filtrados mediante una función (callback) que indica la condición a cumplir.
 */
const rta = words.filter(item => item.length >= 6)
console.log('rta', rta);
console.log('original', words);


const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
  {
    customerName: "Nicolas",
    total: 2322,
    delivered: false,
  },
];

const rta3 = orders.filter(item => item.delivered && item.total >= 100)
console.log('rta3', rta3);

// Buscador.
const search = (query) => {
  const arrayResult = orders.filter(item => {
    return item.customerName.includes(query);
  });

  return arrayResult;
}

// console.log(search('Nico'));
console.log(search('hsdjkfhdsj'));