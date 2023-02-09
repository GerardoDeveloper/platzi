(() => {
  let isEnable = true;
  //  isEnable = 'as'; // Error
  //  isEnable = 1212; // Error
  isEnable = false;

  // Type anotation, buena práctica.
  let isNew: boolean = false;
  console.log('isNew', isNew);

  isNew = true;
  console.log('isNew', isNew);

  const random = Math.random();
  console.log('random', random);
  isNew = random >= 0.5 ? true : false;
  console.log('isNew', isNew);

  // Mala práctica utilizar el objeto Boolean en el tipado.
  const myBoolean: boolean = true;
})();
