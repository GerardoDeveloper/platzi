/**
 *  Función que nunca va a terminar.
 */
const withoutEnd = (): never => {
  while (true) {
    console.log(`Nunca pares de aprender`);

  }
}

/**
 * Funciones que lanzan errores.
 */
const fail = (message: string): never => {
  throw new Error(message);
}

// Como se utiliza

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es un string';
  }

  if (Array.isArray(input)) {
    return 'Es una array'
  }

  return fail('not match');
}

console.log(example('Hola')); // CORRECTO.
console.log(example([1, 2])); // CORRECTO.
console.log(example(12)); // ERROR LANZADO.
