const pets = ['cat', 'dog', 'bat'];

// Con for
let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if (element === 'dog') {
    includeInArray = true;
    break;
  }
}

console.log('for', includeInArray);

// Con includes

/**
 * includes, determina si un array o string incluye un determinado elemento. Devuelve true o false, si existe o no respectivamente.
 */
const rta = pets.includes('dog')
console.log('includes', rta);