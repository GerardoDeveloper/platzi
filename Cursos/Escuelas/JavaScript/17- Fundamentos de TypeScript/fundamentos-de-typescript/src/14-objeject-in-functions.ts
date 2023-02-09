(() => {
  const login = (data: { email: string; password: number }) => {
    console.log(data.email, data.password);
  };

  login({email: 'email@gmail.com', password: 25562});

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let products: any[] = [];

  const addProduct = (data: {
    title: string,
    createAt: Date /* En el caso de las fechas es el ÚNICO caso para utilizar el objeto Date */,
    stock: number,
    size: Sizes,
  }) => {
    products.push(data)
  };

  console.log(products);

})();