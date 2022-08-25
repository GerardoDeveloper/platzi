const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => {
        resolve('Do Something Async')
      }, 3000)
      : reject(new Error('Test Error'))
  })
}

/* =======Sin capturación de errores======== */
const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
}

/* =======Con capturación de errores======== */
const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  } catch (error) {
    console.error(error);
  }
}