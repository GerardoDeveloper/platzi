export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  /**
   * ? El operador '||' en js puede tener algunos problemas o comportamientos extraños cómo, por ej:
   *
   * En js todo lo que sean los siguientes valores, darán como resultados 'false'
   * * 0 === false
   * * '' === false
   * * false === false
   */
  const object = {
    id,
    isNew: isNew || true,
    stock: stock || 10,
  };

  /**
   * Para solucionar este inconveniente, existe el operador '??' y sólo tomorá los valores:
   * * undefined
   * * null
   */
  const object2 = {
    id,
    isNew: isNew ?? true,
    stock: stock ?? 10,
  };

  return object2;
};

const p1 = createProduct(4, true, 65); // CORRECTO.
console.log(p1);

const p2 = createProduct(4, true); // CORRECTO
console.log(p2);

const p3 = createProduct(4, false, 0); // INCORRECTO, en el caso que se use el operador '||'
console.log(p2);