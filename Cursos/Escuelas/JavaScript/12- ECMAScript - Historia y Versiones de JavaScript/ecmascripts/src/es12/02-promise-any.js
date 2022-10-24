const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve2"));

/**
 * Muestra la 1er promesa que se cumpla, el resto es ignorado.
 */
Promise.any([promise1, promise2, promise3])
  .then(response => {
    console.log(response) // resolve
  })
  .catch(error => {
    console.error(error);
  });