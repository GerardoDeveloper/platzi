const countries = {
  MX: "Mexico",
  CO: "Colombia",
  CL: "Chile",
  PE: "Peru"
}

/**
 * Imprimirá un array en forma de [propiedad, valor]
 *
 * ['MX', 'Mexico']
 * ['CO', 'Colombia']
 * ['CL', 'Chile']
 * ['PE', 'Peru']
 */
console.log(Object.entries(countries));