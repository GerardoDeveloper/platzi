import { products, addProduct, calculateStock } from './product.service';

addProduct({
  title: 'P1',
  createAt:
    new Date() /* En el caso de las fechas es el ÚNICO caso para utilizar el objeto Date */,
  stock: 5,
  size: 'XL',
});

addProduct({
  title: 'P2',
  createAt:
    new Date() /* En el caso de las fechas es el ÚNICO caso para utilizar el objeto Date */,
  stock: 2,
  size: 'XL',
});

addProduct({
  title: 'P3',
  createAt:
    new Date() /* En el caso de las fechas es el ÚNICO caso para utilizar el objeto Date */,
  stock: 3,
  size: 'XL',
});

console.log(products);
const totalStock = calculateStock();
console.log(`totalStock: ${totalStock}`);
