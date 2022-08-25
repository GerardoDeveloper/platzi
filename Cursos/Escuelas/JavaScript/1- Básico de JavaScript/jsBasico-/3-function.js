/**
 * Las funciones son procedimientos, un conjunto de sentencias o pasos que realizarán una tarea o cálculo con ciertos valores.
 * Tenemos dos tipo de funciones en js, 'function declaration' y 'function expression'.
 * El nombre reservado de function y párametros que recibira esa function.
 */


//function declaration Declarativas expresión
function miFuncion() {
    return 3;
}

//mandamos llamar la funcion
miFuncion();

//function Expression (también conocidas como funciones anónimas)
var miFuncion = function (a, b) {
    return a + b;
}

//mandamos llamar la variable como funcion.
miFuncion();


/* ========================================================================================================== */


function saludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`);  // template strings (Plantillas de cadena de texto)
}

// Está funcion recibe 2 parámetros, que se convierten en un placeholder de valores que se pueden utilizar dentro de la función.
function suma(a, b) {
    var resultado = a + b;
    return resultado;
}

// Return, es la forma cómo regresamos un valor con una function.


function suma(a, b) {
    var resultado = a + b;
    return resultado;
}

function suma(a, b) {
    return a + b;
}

suma(20, 30);