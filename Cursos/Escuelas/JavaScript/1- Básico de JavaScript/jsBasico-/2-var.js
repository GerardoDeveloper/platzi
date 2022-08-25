/**
 * Una variable es un lugar en memoria.
 * Es una representación de algún lugar en la memoria para guardar datos.
 *
 *
 * 'nombre' apuntará en algún lugar en la memoria (nosotros no sabemos donde, pero eso no es importante),
 * pero dará la señal de que el = tomará ese string y lo guardará en ese lugar y después si queremos utilizar ese valor,
 * utilizaremos la variable 'nombre' para pedir que nos traigan ese string de memoria.
 */

var nombre = "Diego";

// '=' operador de asignación.

var edad; // Declarar una variable
edad = 30; // Inicializar una variable

/**
 * Aquí la variable seleccionará toda una sección para los elementos del array, y después tendremos acceso a toda la sección destinada en memoria.
 */
var elementos = ['Computadora', 'Celular'];

/**
 * De igual forma para el objeto.
 */
var persona = {
    nombre: "Diego",
    edad: 30
};

/**
 * 'console' es de igual forma una variable que le pertenece al navegador, con cierto espacio en memoria, y con un tipo de comportamiento especial.
 *  Donde Log es un método de la función.
 */
console.log(elementos[2]);