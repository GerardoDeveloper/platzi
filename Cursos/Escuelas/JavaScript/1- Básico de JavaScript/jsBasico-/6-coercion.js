/* ===============================La forma de convertir un type a otro: Coercion============================== */

/* ==================Implicit Coercion================= */

var a = 20;

var b = a + "";

console.log(b); // Imprimirá 20, pero de tipo string.

// Más ejemplos

var a = [1, 2];
var b = [3, 4];

/**
 * En este ejemplo, por la concatenación, ambos arrays son obligados a convertirse en strings, y luego se juntan.
 */
a + b

/* ==================Explicit coercion================ */

var c = String(a);
console.log(c); // string

var d = Number(c);
console.log(d); // number

// Otro ejemplo

var a = 30;
var b = a.toString();

var c = "100";
var d = + c; // Unary operator '+' de forma explícita convierte a número

// Más ejemplos

var num1 = "3.14";
var num2 = 5 + +num1;

/**
 * Number + Number = Number
 * Number + String = String
 * String + Number = String
 * String + String = String
 */


// Todos las propiedades de valor, son strings