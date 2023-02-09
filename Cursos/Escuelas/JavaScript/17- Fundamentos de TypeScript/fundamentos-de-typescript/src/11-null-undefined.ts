(() => {
  // Ambos tipos de datos, es decir, undefined y null, no entran dentro de los conjuntos de datos de TypeScript.
  let myNumber: number = undefined;
  let myString: string = null;

  // Amos datos quedan como tipo 'any' a pesar que son asignado en null y undefined.
  let myNull = null;
  let myUndefined = undefined;

  // Forzando a una variable ser de tipo null y undefined.
  let myNull2: null = null;
  let myUndefined2: undefined = undefined;

  // Útilizando union type
  let myNumber2: number | null = null;
  myNumber2 = 123;

  let myString2: string | undefined = undefined;
  myString2 = 'ewtwe';

  // Ejemplo 1
  function hi(name: string | null) {
    let hello = 'Hola ';

    if (name) {
      hello += name;
    } else {
      hello += 'noBody';
    }

    console.log(hello);
  }

  // Ejemplo 2
  function hi2(name: string | null) {
    let hello = 'Hola ';

    /**
     * El signo ? evalua la expresión, en el caso que de null, ejecuta el or.
     */
    hello += name?.toLocaleUpperCase() || 'noBody';

    console.log(hello);
  }

  hi('gerardo');
  hi(null);

  hi2('gerardo');
  hi2(null);
})();
