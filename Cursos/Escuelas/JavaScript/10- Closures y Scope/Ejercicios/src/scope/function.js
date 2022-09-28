function greeting() {

  // 'userName' será accesible dentro de toda la función.
  let userName = 'Gerardo';
  console.log(userName);

  if (userName === 'Gerardo') {
    console.log(`Hello ${userName}`);
  }
}

greeting();

// Sí se quiere acceder desde fuera de la función a la variable 'userName' dará un error. 'ReferenceError: userName is not defined'
console.log(userName);