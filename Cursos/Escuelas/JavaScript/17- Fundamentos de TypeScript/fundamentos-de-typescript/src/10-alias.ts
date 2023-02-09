(() => {
  /**
   * Definiendo un tipo alias.
   *
   * ! NOTA: Los alias se definen con el signo =
   */
  type UserID = string | number | boolean;

  function greeting(userId: UserID) {
    return typeof userId === 'string'
      ? console.log('myTextIs (+)>', userId.toLocaleLowerCase())
      : null;
  }

  //? Literal types
  let shirtSize: 'S' | 'M' | 'L' | 'XL';
  shirtSize = 'S'; // Ok
  shirtSize = 'M'; // Ok
  // shirtSize = "s"; // Error


  type TSizes = 'SM' | 'ME' | 'LA' | '2XL';
  let Sizes: TSizes;

  function greet(userId: UserID, size: TSizes) {
    return typeof userId === 'string'
      ? console.log(
          'Ropa: (+)>',
          `usuario: ${userId.toLocaleLowerCase()}`,
          `tamaño: ${size}`
        )
      : null;
  }
  greet('Nicolas', '2XL');
  greet('Molina', 'LA');
})();
