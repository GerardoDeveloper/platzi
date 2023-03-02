// Nico => [N,i,c,o] => string => string[] // ---> Recibo un string y me devuelve un array.
// [N,i,c,o] => Nico => string[] => string // ---> Recibo un array y me devuelve un string.

/**
 * ! La sobrecarga de funciones sólo funcionan con tipo 'function' y no con 'arrow function'.
 *
 */
function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // retorna un string.
  } else {
    return input.split(''); // retorna un string[]
  }
}

const rtaArray = parseStr('Nico');
// rtaArray.reverse(); // ERROR

/**
 * ? Typescript no puede saber que tipo de valor es devuelto en la variable 'rtaArray' ya que la función puede devolver dos tipos diatintos.
 * ? Para solucionar esto, se debe validar el resultado de la variable 'rtaArray' preguntando de que tipo es la misma.
 */
if (Array.isArray(rtaArray)) {
  rtaArray.reverse(); // Sí es un tipo array, ya se pueden acceder a todos sus métodos y propiedades.
}

console.log('rtaArray', 'Nico =>', rtaArray);

const rtaStr = parseStr(['N', 'i', 'c', 'o']);
// rtaStr.toLowerCase(); // ERROR

if (typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
}

console.log('rtaStr', "['N','i','c','o'] =>", rtaStr);
