(() => {

  // El array sólo soportará tipos de datos number.
  let prices = [1, 2, 2, 1, 1, 212];
  // prices.push('asas'); // Error.
  // prices.push(true); // Error.
  // prices.push({}); // Error.
  prices.push(121212);

  // Inferencia de tipos
  let pricesTwo = [1, 2, 2, 1, 1, 212, 'hola', true];
  prices.push(121212);

  let products = ['hola', true];
  products.push(false);

  // Declaración de array de forma correcta. Forma explicita. NOTA: Todo en js es de tipo Object, por lo que sí se coloca el tipo Object, acetará cualquier tipo de datos.
  let mixed: (number | string | boolean | Object)[] = ['hola', true];
  mixed.push(12);
  mixed.push('as');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  let numbers = [1, 2];
  numbers.map((item) => item * 2);
})();
