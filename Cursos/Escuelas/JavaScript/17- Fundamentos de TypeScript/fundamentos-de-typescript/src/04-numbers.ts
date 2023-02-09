(() => {
  // Forma inferida.
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);

  // Utilizando type anotation, explicita
  let customerAge: number = 28;
  //  customerAge = customerAge + '1'; // 281 Incorrecto
  customerAge = customerAge + 1; // 281 // Correcto
  console.log('customerAge', customerAge);

  // Es obligatorio declarar el tipo y un valor a una variable, de lo contrario, marcará error.
  let productInStock: number;
  console.log('productInStock', productInStock);
  if (productInStock > 10) {
    console.log('is greater');
  }

  // Convirtiendo un string a numero.
  let discount = parseInt('100');
  console.log('discount', discount);

  let otherNumber = parseInt('abc');
  console.log('otherNumber', otherNumber); // NaN

  if (discount <= 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }

  // Trabajando con valores hexadecimales. Comienzan con 0x
  let hex = 0xfff;
  console.log('hex', hex);

  // Trabajando con valores binarios. Comienzan con 0b
  let bin = 0b1010; // 10
  console.log('bin', bin);

  // Buena práctica.
  const myNumber: number = 10;

  // Mala práctica. Esto es porque se hace referencia al OBJETO number y no al tipo number.
  const myNumber2: Number = 10;
})();
