/**
 * Arrays:
 *
 * Lista de elementos, generalmento del mismo tipo.
 * Se recomienda usar el nombre de la variable en plural.
 */

// No recomendado
const user = ["Alex", "Mariana", "Jessica"];

// Regular
const userList = ["Alex", "Mariana", "Jessica"];

// Bueno
const users = ["Alex", "Mariana", "Jessica"];

// Excelente
const userNames = ["Alex", "Mariana", "Jessica"];

//Booleanos:

/**
 * Booleanos:
 *
 * Sólo tiene 2 valores, true o false.
 * Se recomienda utilizar ciertos prefijos para identificar las variables: is(¿es?), has(¿tiene?), can(¿puede?).
 */

// No recomendado
const valid = true;
const read = false;
const color = true;

// Recomendado
const isValid = true;
const canRead = false;
const hasColor = true;

/**
 * Numbers:
 *
 * Se recomienda prefijos que hagan referencia a que la variable contiene números como:
 *  - max.
 *  - min.
 *  - total.
 * Son autodescriptivas y también hablan de lo que hace el código.
 */

// No recomendado
const users = 15;

// Recomendado
const maxUsers = 50;
const minUsers = 10;
const totalUsers = 15;

// Funciones: representan una acción.
// Se recomienda que inicien con un verbo, seguido de un sustantivo, por ejemplo: get como verbo y name como sustantivo.
// Deben ser concisos y estar en camelCase.

/**
 * Funciones:
 *
 * - Representan una acción.
 * - Se recomienda que inicien con un verbo, seguido de un sustantivo, por ejemplo: 'get' como verbo y 'name' como sustantivo.
 * - Deben ser concisos y estar en camelCase.
 */

// No recomendado
createUserIfNotExist();
updateUserIfNotEmpty();
sendEmailIfIsValid();

// Recomendado
createUser();
updateUser();
sendEmail();

/**
 * - Funciones de acceso, modificación o predicado.
 * - Se recomienda añadir el prefijo de get, set o is.
 */

// Ejemplo
getUser();
setUser();
isValidUser();

/**
 * Clases
 *
 * - Para nombrar clases se recomienda utilizar sustantivos, por ejemplo: 'user' o 'userProfile',
 *   pero se debe evitar utilizar nombres genéricos como: 'data' o 'manager',
 *   porque esto puede llevar a que estas clases tengan más de una sola responsabilidad.
 * - Según el principio de responsabilidad único tanto una clase como una función deben ser responsables de una sola acción.
 */

// No recomendado
class Data { }
class Manager { }
class Info { }

// Recomendado
class User { }
class UserProfile { }
class Account { }