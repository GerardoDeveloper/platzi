interface BaseModel {
  readonly id: string; // Propiedad de sólo lectura.
  readonly createdAt: Date; // Propiedad de sólo lectura.
  updatedAt: Date;
}

export { BaseModel };
