//FUNCIÓN CON PROMESA
const helloWord = () => {
  return new Promise((resolve, reject) => {
    (true)//if
      ? setTimeout(() => resolve('hello word'), 3000)//Si el valor es verdadero.
      : reject(new Error('Test error'))//Si el valor es falso.
  })
}

//FUNCIÓN ASINCRONA.
helloAsync = async () => {
  const hello = await helloWord();//Llamará a la función que tiene la promesa, esperará el tiempo asignado
  console.log(hello);//Luego imprimirá en consola.
}

//LLAMAR NUESTRA FUNCIÓN Async.
helloAsync();


//TRABAJAR EL Async y el Await DE FORMA CORRECTA.
const anotherFuction = async () => {
  try {
    const hello = await helloWord();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFuction();