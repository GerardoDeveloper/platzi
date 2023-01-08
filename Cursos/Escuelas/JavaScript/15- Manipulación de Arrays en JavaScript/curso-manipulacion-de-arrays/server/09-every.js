const numbers = [1, 30, 39, 29, 10, 13];

// Con for
let rta = true;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element >= 40) {
    rta = false
  }
}

console.log('for', rta);

// Con every

/**
 * Every consiste retornar un valor lógico verdadero si todos los elementos cumplen con la condición establecida en la función (callback).
 */
const rta2 = numbers.every(item => item <= 40)
console.log('rta2', rta2);


const team = [
  {
    name: "Nicolas",
    age: 16,
  },
  {
    name: "Andrea",
    age: 18,
  },
  {
    name: "Zulema",
    age: 22,
  },
  {
    name: "Santiago",
    age: 10,
  },
];

const teamMenor = team
  .map(key => key.age)
  .every(age => age >= 15);
  // Se pueden concatenar métodos, esto es la salida de uno es la entrada de información del otro. Siempre el método final devolverá su valor a la variable.

console.log(`teamMenor: ${teamMenor}`);