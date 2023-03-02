import { Product } from './../models/product.model';
import { Category } from './../models/category.model';

interface CreateProductDto extends Omit<Product, 'id' | 'category'> {
  categoryId: Category['id']; // Acceso a tipado por indice.
}

interface UpdateProductDto extends Partial<CreateProductDto> {}

export { CreateProductDto, UpdateProductDto };
