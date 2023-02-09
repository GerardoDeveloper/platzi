(() => {
  // Retorno de forma inferida.
  const calculateTotal = (prices: number[]) => {
    let total = 0;

    prices.forEach((item) => {
      total += item;
    });

    return total;
  };

  const rta1 = calculateTotal([1, 2, 4, 5]);
  console.log(rta1);

  // Retorno de forma explicita.
  const calculateTotalV2 = (prices: number[]): number => {
    let total = 0;

    prices.forEach((item) => {
      total += item;
    });

    return total;
  };

  const rta2 = calculateTotalV2([1, 2, 4, 5]);
  console.log(rta2);

  // Funciones sin retornos.
  const calculateTotalV3 = (prices: number[]): void => {
    const rta2 = calculateTotalV2(prices);
    console.log(rta2);
  };

  const rta3 = calculateTotalV3([1, 2, 4, 5]);
  console.log(rta3);
})();
