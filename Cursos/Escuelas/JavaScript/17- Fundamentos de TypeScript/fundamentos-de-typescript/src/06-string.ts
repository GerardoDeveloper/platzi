(() => {
  // Declaración de string utilizando comillas simples.
  let productTitle = 'My amazing product';
  // productTitle = null; // Error.
  // productTitle = () => {}; // Error.
  // productTitle = 123; // Error.
  productTitle = 'My amazing product changed';
  console.log('productTitle', productTitle);

  // Declaración de string utilizando comillas dobles.
  const productDescription = "I'm bla bla ba bla bl s asasas";
  console.log('productDescription', productDescription);

  let productPrice = 100;
  let isNew: boolean = false;

  // Declaración de string utilizando comillas backticks.
  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;

  console.log(summary);

  // Mala práctica declarar el tipo con el objeto String.
  const myString: String = '';
})();
