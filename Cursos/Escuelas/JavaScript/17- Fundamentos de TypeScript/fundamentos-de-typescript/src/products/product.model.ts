type Sizes = 'S' | 'M' | 'L' | 'XL';

// De está forma tenemos un tipado para product, el cual se puede reutilizar.
type Product = {
  title: string;
  createAt: Date /* En el caso de las fechas es el ÚNICO caso para utilizar el objeto Date */;
  stock: number;
  size?: Sizes;
};

export { Sizes, Product };
