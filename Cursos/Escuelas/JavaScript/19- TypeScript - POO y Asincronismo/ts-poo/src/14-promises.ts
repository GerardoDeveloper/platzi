import axios from 'axios';

(async () => {
  function delay(time: number) {
    const promise = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('string');
      }, time);
    });
    return promise;
  }

  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise; // Retorna una Promise de forma explicita.
  }

  async function getProductsAsync() {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  }

  console.log('---'.repeat(10)); // 'repeat' repite la cadena tantas veces se le indique por parámetro.
  const rta = await delay(3000);
  console.log(rta);

  console.log('---'.repeat(10));
  const products = await getProducts();
  console.log(products.data);

  const productsv2 = await getProductsAsync();
  console.log(productsv2);
})();
