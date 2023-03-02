// Nico => [N,i,c,o] => string => string[] // ---> Recibo un string y me devuelve un array.
// [N,i,c,o] => Nico => string[] => string // ---> Recibo un array y me devuelve un string.

/**
 * Realizamos la sobre carga del imput o del tipado de las entradas y las salidas.
 * ! Nada de acerca de como resolver el problema.
 * Sólo realizamos la sobrecarga.
 *
 */
export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // retorna un string.
  } else if (typeof input === 'string') {
    return input.split(''); // retorna un string[]
  } else if (typeof input === 'number') {
    return true; // retorna true
  }
}

const rtaArray = parseStr('Nico');
// Al tener una definición de tipos para las funciones de entradas y salidas, ya no será necessario hacer las validaciones de tipos.
rtaArray.reverse();
console.log('rtaArray', 'Nico =>', rtaArray);

const rtaStr = parseStr(['N', 'i', 'c', 'o']);
rtaStr.toLowerCase();
console.log('rtaStr', "['N','i','c','o'] =>", rtaStr);
