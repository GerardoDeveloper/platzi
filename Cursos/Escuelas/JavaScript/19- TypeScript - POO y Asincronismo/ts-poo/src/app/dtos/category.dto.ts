import {
  /**
   * Sí el nombre empieza con:
   * * Mayúsculas: Se utiliza para decorador.
   * * Minúsculas: Se utiliza como una función.
   *
   * ! NOTA: Esto ocurre sólo para la librería 'class-validator' para otras, investigar sú implementación.
   */
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  Length,
  validate,
  validateOrReject,
} from 'class-validator';

import { AccessType, Category } from '../models/category.model';

export interface ICreateCategoryDto extends Omit<Category, 'id'> {}

export class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 140)
  name!: string; // Con el sigo ! le indicamos a typescript que más tarde se inicializará la variable.

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'aqw'; // ERROR, pero sólo en tiempo de ejución se verá el error.
    dto.image = 'https://api.escuelajs.co/api/v1/products'; // CORRECTO
    await validateOrReject(dto); // El método 'validateOrReject' realiza las pertinentes validaciones.
  } catch (error) {
    console.log(error);
  }
})();
