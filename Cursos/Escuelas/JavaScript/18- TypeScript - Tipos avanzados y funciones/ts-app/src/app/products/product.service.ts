import { Product } from './product.model';
import {
  CreateProductDto,
  UpdateProductDto,
  FindProductDto,
} from './product.dto';
import { faker } from '@faker-js/faker';

const products: Product[] = [];

const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };

  products.push(newProduct);

  return newProduct;;
};

/**
 * Actualiza un producto.
 * @param id Id del producto. NOTA: Sí queremos btener el tipo de dato dinámicamente, podemos acceder al tipado por indice 'Product['id']'
 * @param changes Cambios a realizar.
 * @returns Product
 */
const updateProduct = (id: Product['id'], changes: UpdateProductDto): Product => {
  const index = products.findIndex((item) => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes, // Sí solo se aplica el cambio de change, a va sobrescribir todo el objeto, por ello se obtienen los datos previos antes 'prevData'. NOTA: Esto se hace sólo en memoria, en bbdd no.
  };

  return products[index];
};

const deleteProduct = (id: string) => {
  // code
};

const findProducts = (dto: FindProductDto): Product[] => {
  // dto.color = 'blue'; // INCORRECTO, los campos son de sólo lectura y no permiten ser modificados.
  // dto.tags = []; // INCORRECTO.

  // Sí no se utiliza 'ReadonlyArray' si tiene acceso a los métodos que mutanal array original.
  // dto.tags?.pop();
  // dto.tags?.push('fgd');

  return products;
};

export { products, addProduct, findProducts };
