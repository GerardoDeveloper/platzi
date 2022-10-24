const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Promesa resuelta');
    } else {
      reject('Se rechazo la promesa');
    }
  });
}

anotherFunction().then(response => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});