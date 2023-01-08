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
];

console.log("original", orders);
const rta = orders.map((item) => item.total);
console.log("rta", rta);

// Se agrega un nuevo atributo al objeto, pero modifica el original.
const rta2 = orders.map((item) => {
  item.tax = 0.19;
  return item;
});

console.log("rta2", rta2);
console.log("original", orders); // El array de objetos se modifica.

/**
 * Se agrega un nuevo atributo al objeto, pero se utiliza el "spread operator" (operador de propagación)
 * para resolver el problema del apuntador de memoria de los objetos.
 *
 * Esto es una buena práctica cuado se trabaja con referencias en memorias.
 */
const rta3 = orders.map((item) => {
  return {
    ...item,
    tax: 0.19,
  };
});

console.log("rta3", rta3);
console.log("original", orders); // El array de objeto se mantiene igual