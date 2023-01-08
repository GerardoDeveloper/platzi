/**
 * sort, consiste en ordenar un array a partir de los valores Unicode de los caracteres y
 * este retorna un array con la misma referencia en memoria que el original.
 *
 * NOTA: Si la función comparativa retorna un número mayor que 0, entonces el primer elemento
 *       se sitúa antes que el segundo. Si es menor que 0, entonces el segundo elemento se sitúa
 *       antes que el primero.
 *       Esto es importante, ya que ordenar los elementos por el valor Unicode provoca resultados inesperados.
 */
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

/**
 * Si ordenas un array de números, provoca un ordenamiento inesperado porque ordena por el valor Unicode de los caracteres del número.
 * Para arreglar este comportamiento, es necesario utilizar la siguiente función comparativa:

 * - De manera ascendente (a, b) => a - b
 * - De manera descendente (a, b) => b - a
 */
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a, b) => b - a);
console.log(numbers);

/**
 * Si ordenas un array de palabras, puede ordenar correctamente por el valor Unicode de los caracteres de la palabra. Sin embargo,
 * en algunos navegadores o entornos de ejecución (como Node) puede que esto falle, por lo tanto, debes utilizar la función 'localeCompare'.
 * Ten en cuenta que las mayúsculas, minúsculas y caracteres con tilde tienen un valor Unicode diferente, por lo que debes asegurarte
 * que todas las palabras estén en la misma condición.
 */
const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
words.sort((a, b) => a.localeCompare(b)); // --> Ejecuta el código en la configuración de idioma local del dispositivo.
console.log(words);

/**
 * Cuando necesites ordenar un array de objetos, compara una propiedad de tipo numérica de la misma forma que el ordenamiento de números,
 * ya sea de manera descendente o ascendente.
 */
const orders = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

orders.sort((a, b) => b.total - a.total);
console.log(orders);