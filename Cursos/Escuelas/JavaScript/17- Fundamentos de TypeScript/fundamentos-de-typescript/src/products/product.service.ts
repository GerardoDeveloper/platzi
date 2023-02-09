import { Product } from './product.model';

const products: Product[] = [];

const addProduct = (data: Product) => {
  products.push(data); // CORRECTO.
  // products.push(41234); // Error, sólo admite parametros de tipo Product
  // products.push('41234'); // Error, sólo admite parametros de tipo Product
};

const calculateStock = (): number => {
  let total: number = 0;

  products.forEach((item) => {
    total += item.stock;
  });

  return total;
};

export { products, addProduct, calculateStock };
