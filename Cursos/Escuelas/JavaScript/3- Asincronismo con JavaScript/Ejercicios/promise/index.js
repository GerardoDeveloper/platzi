/* =========================Promesa sincrona==================== */
const someThingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Excelente');
    } else {
      reject('Todo mal');
    }
  });
};

someThingWillHappen()
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error)
  });

/* ======================Promesa asincrona================== */
const someThingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('OK');
      }, 2000);
    } else {
      const error = new Error('Todo mal!!!');
      reject(error);
    }
  });
};

someThingWillHappen2()
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  })

/* ===================Ejecutar un conjunto de pomesas a la vez ================= */
const promises = [someThingWillHappen(), someThingWillHappen2()];
Promise.all(promises)
  .then(response => {
    console.log('Array of results', response);
  })
  .catch(error => {
    console.error();
  })