const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve2"));

/**
 * Promise.all() se resolverá, si y solo si todas las promesas fueron resueltas.
 * Si al menos una promesa es rechazada, Promise.all será rechazada.
 */
Promise.all([promise1, promise2, promise3])
  .then(response => {
    console.log(response);
  })
  .catch((error) => {
    console.error(`Ha ocurrido un error: ${error}`);
  });