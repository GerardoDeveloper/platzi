/* =======================================================any====================================================== */
/**
 * Tipo any
 *
 * ! Con el tipo 'any' es casi desactivar el análisis de código estático.
 */
let myAny: any;
myAny = 232; // Correcto
myAny = '232'; // Correcto
myAny = true; // Correcto
myAny = [212, true]; // Correcto
myAny = {}; // Correcto

myAny.loQueSea(); // --> Éste método no existe en realidad, pero typescript no da error y nos lo deja hacer igual.

/**
 * Incluso si tenemos lo siguiente...
 *
 * ? Esto ocuure porque 'myAny' es de tipo 'any', es decir, de cualquier valor y dentro de ese cualquier valor, puede a ver un boolean.
 * ! Por esa razón es peligroso trabajar con 'any'
 */
let isNew: boolean = myAny; // Correcto.

/* =======================================================unknown====================================================== */

/**
 * Tipo unknown
 *
 * ? Nos permite asignarle a una variable diferentes tipos.
 */
let myUnknown: unknown;
myUnknown = 232; // Correcto
myUnknown = '232'; // Correcto
myUnknown = true; // Correcto
myUnknown = [212, true]; // Correcto
myUnknown = {}; // Correcto

/**
 * No nos deja hacer una ejecución de algo sin verificar el tipo de la variable.
 */
// myUnknown.toString(); // INCORRECTO

// Realizando la verificación de tipos antes.
if (typeof myUnknown === 'string') {
  myUnknown.toString(); // CORRECTO
}

let isNewV2: boolean = myUnknown; // INCORRECTO.

if (typeof isNewV2 === 'boolean') {
  let isNewV2: boolean = myUnknown; // CORRECTO.
}

/**
 * Utilizandolo en funciones.
 *
 * ? Se puede utilizar 'unknown' para retornar valores en funciones, esto hará que luego se verifique el tipo del valor retornado por la misma.
 * ? Esto es mejor que utilizar 'any'
 * @param str
 * @returns unknown
 */
const parseToJson = (str: string): unknown => {
  return JSON.parse(str);
}