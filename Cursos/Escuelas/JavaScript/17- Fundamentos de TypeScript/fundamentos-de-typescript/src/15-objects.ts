(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  // De está forma tenemos un tipado para product, el cual se puede reutilizar.
  type Product = {
    title: string;
    createAt: Date /* En el caso de las fechas es el ÚNICO caso para utilizar el objeto Date */;
    stock: number;
    size?: Sizes;
  };

  let products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data); // CORRECTO.
    // products.push(41234); // Error, sólo admite parametros de tipo Product
    // products.push('41234'); // Error, sólo admite parametros de tipo Product
  };

  console.log(products);

  // Correcto.
  addProduct({
    title: 'P3',
    createAt: new Date(), /* En el caso de las fechas es el ÚNICO caso para utilizar el objeto Date */
    stock: 1341,
    size: 'XL'
  });

})();