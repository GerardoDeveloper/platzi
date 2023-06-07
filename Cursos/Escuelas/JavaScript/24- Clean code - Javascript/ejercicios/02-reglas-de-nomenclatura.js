/**
 * Para contribuir a que nuestro código sea limpio hay que nombrar correctamente a nuestras variables funciones y clases,
 * las variables funciones, etc deben ser expresivas, es decir en ingles y camel case,
 * evitar el uso de guiones, guiones bajos y abreviaturas.
 */

// no recomendado
const yyyymmdstr = moment().format("YYYY/MM/DD");

// recomendado
const currentDate = moment().format("YYYY/MM/DD");

/**
 * Evitar nombres con relación a la tecnología (tipo de datos, clases, etc). Ej. “arrayNames” --> “namesList”
 */

// No recomendado
let arrayNames = ["Alex", " Mariana", "Cande"];

// Recomendado
let namesList = ["Alex", " Mariana", "Cande"];

/**
 * Usar lenguaje ubicuo, que es esto? Es aquel que se construye a partir del lenguaje que usan los expertos en el dominio,
 * un lenguaje en común entre los desarrolladores y los interesados.
 */

// no recomendado
getUserInfo();
getClientData();
getCustomerRecord();

// recomendado
getUser();