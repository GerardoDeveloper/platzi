export const createProduct = (
  id: string | number,
  isNew: boolean = true, // Asignación de valores por defecto.
  stock: number = 10 // Asignación de valores por defecto.
) => {
  const object = {
    id,
    isNew,
    stock,
  };

  return object;
};

const p1 = createProduct(4, true, 65); // CORRECTO.
console.log(p1);

const p2 = createProduct(4); // CORRECTO
console.log(p2);
