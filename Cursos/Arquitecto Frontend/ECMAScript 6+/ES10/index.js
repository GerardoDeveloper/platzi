let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

/**
 * Crea una nueva matriz con todos los elementos de sub-array concatenados recursivamente hasta la profundidad 
 * especificada.
 */
console.log(array.flat());//Nos mostrará el array como fue almacenado.
/**
 * IMPRIME EN CONSOLA.
 * 
 * [1, 2, 3, [1, 2, 3, [1, 2, 3]]]
 */



console.log(array.flat(2));//El párametro especifica la profundidad del arreglo que se quiere imprimir.
/**
 * IMPRIME EN CONSOLA.
 *
 * [
 *  1, 2, 3, 1, 2,
 *  3, 1, 2, 3
 * ]
 */


 //flatMap, nos permite mapear cada elemento, después pasarle una función luego mostrarlo.
 let array2 = [1, 2, 3, 4, 5];
 console.log(array2.flatMap(value => [value, value + 2]));

 /**
  * IMPRIMIRÁ EN CONSOLA.
  *
  * [
  *   1, 2, 2, 4, 3,
  *   6, 4, 8, 5, 10
  * ]
  */


  /**
   * 'trimStart()' nos permite eliminar los espacios en blanco al inicio de un string.
   */
  let hello = '          hello word';
  console.log(hello.trimStart());

  /**
   * 'trimEnd()' nos permite eliminar los espacios en blanco al final de un string.
   */
  let hello2 = 'hello word          ';
  console.log(hello2.trimEnd());

  /**
   * Podemos pasar el valor de error de forma obcional a nuestro catch.
   */
  try {
    
  } catch (error) {//ANTES
    error;
  }

  try {
    
  } catch {//ES10
    error;//De esta forma estará disponible dentro del bloque de código, no es necesario su declaración.
  }

  /**
   * Object.fromEntries, transforma en 'clave - valor' en un objeto.
   */
  let entries = [["name", "Gerardo"], ["age", 32]];
  console.log(Object.fromEntries(entries));

  /**
   * IMPRIMIRÁ EN CONSOLA
   * 
   * {name: 'Gerardo', age: 32}
   */



   /**
    * OBJETO DE TIPO SíMBOLO
    * 
    * Nos permite acceder a una descripción de un objeto de tipo 'Symbol'
    */
    let mySymbol = 'My symbol';
    let symbol = Symbol(mySymbol);
    console.log(symbol.description);

    //IMPRIMIRÁ EN CONSOLA
    /**
     * My symbol
     */