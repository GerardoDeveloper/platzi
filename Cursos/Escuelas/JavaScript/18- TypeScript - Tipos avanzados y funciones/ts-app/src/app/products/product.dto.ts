import { Product } from './product.model';

/**
 * Se crea una nueva interface y se extiende del nuevo tipo Omit<Product> porque se necesita crear un atributo en particular
 * que no lo tiene Product.
 *
 * ! NOTA: Omit podemos omitir propiedades, campos o llaves.
 */
interface CreateProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string; // Como este campo no está dentro de Product, se necesita crear el nuevo tipo a partir de Product, entonces se extiende con un campo más.
}

/**
 * Al contrario de Omit, con Pick podemos crear propiedades, campos o llaves que necesitemos en un objeto.
 */
type example = Pick<Product, 'color' | 'description'>;

/* ============================================================================================================ */

/**
 * 'Partial' lo que hace es poner todos los campos como opcionales.
 */
// interface UpdateProductDto extends Partial<Product> {}

/**
 * Sí queremos que sólo algunos campos sean opcionales y otros no, reutilizamos la interface 'CreateProductDto' en 'Partial'
 */
interface UpdateProductDto extends Partial<CreateProductDto> {}

// Sí queremos todas las propiedades como requerido, utilizamos 'Required'
type exampleRequired = Required<Product>;

/* ============================================================================================================ */

/**
 * Sólo coloca todos los campos como opcionales.
 */
// interface FindProductDto extends Partial<Product> {}

/**
 * Sí deseamos hacer que todos los campos sean de sólo lectura y además que sean opcionales, fucionamos 'Readonly' con 'Partial'
 */
interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  // Le reasignamos un nuevo tipado a 'tags' de tipo 'ReadonlyArray<string>' y para que no se pueda realizar una reasignación de valores, aplicamos 'readonly'
  readonly tags: ReadonlyArray<string>;
}

// Sí queremos todas las propiedades como readonly, utilizamos 'Readonly'
type exampleReadonly = Readonly<Product>;

export { CreateProductDto, UpdateProductDto, FindProductDto };
