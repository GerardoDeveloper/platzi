(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  // Función normal.
  function createProductToJson(
    title: string,
    createAt: Date /* En el caso de las fechas es el ÚNICO caso para utilizar el objeto Date */,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createAt,
      stock,
      size,
    };
  }

  // Invocación de la función.
  const product1 = createProductToJson('P1', new Date(), 12, 'XL');
  console.log(product1);
  console.log(product1.title);
  console.log(product1.size);
  console.log(product1.createAt);

  // Arrow functions.
  const createProductToJsonV2 = (
    title: string,
    createAt: Date /* En el caso de las fechas es el ÚNICO caso para utilizar el objeto Date */,
    stock: number,
    size?: Sizes /* Este parámetro será opcional. */
  ) => {
    return {
      title,
      createAt,
      stock,
      size,
    };
  };

  const product2 = createProductToJsonV2('P2', new Date(), 5);
  console.log(product2);
  console.log(product2.title);
  console.log(product2.size);
  console.log(product2.createAt);
})();
