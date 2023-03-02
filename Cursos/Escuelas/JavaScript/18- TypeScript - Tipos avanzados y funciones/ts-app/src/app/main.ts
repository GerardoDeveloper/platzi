import { addProduct, products, findProducts } from './products/product.service';
import { faker } from '@faker-js/faker';

for (let index = 0; index < 50; index++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.vehicle.color(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    price: parseInt(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    title: 'p1',
    stock: 90,
    categoryId: faker.datatype.uuid(),
  });
}

console.log(products);

findProducts({
  stock: 20,
  color: 'blue',
});
