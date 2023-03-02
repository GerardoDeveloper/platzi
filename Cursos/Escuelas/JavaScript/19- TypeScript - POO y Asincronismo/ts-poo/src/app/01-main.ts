import axios from 'axios';
import { Product } from './models/product.model';

(async () => {
  /**
   * 1ra forma de tipar un método.
   *
   * ? Ventajas: De esta forma se puede tipar hacia afuera, es decir, cuando se llame la función vamos a tener acceso a todas las propidedades.
   * ? Desventajas: No permite realizar una logica de negocio dentro de la función.
   *
   */
  // async function getProducts(): Promise<Product[]> {
  //   const { data } = await axios.get('https://api.escuelajs.co/api/v1/products');
  //   return data;
  // }

  /**
   * 2da formade tipar un método.
   *
   * ? Ventajas: Permite obligar el tipado (sí la librería no soporta la 1ra forma) tando por fuera como por dentro del método.
   */
  // async function getProducts() {
  //   const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
  //   const data = rta.data as Product[]; // Fuerza el tipado hacia afuera y hacia adentro del método.
  //   return data;
  // }

  /**
   * 3ra forma de tipar un método.
   *
   * ? Ventajas:
   *   * Permite realizar una logica de negocio dentro de la función.
   *
   * ! NOTA: Este es el método recomendado para realizar el tipado de una solicitud (sí es soportado por la librería que se este utilizando).
   */
  async function getProducts() {
    const { data } = await axios.get<Product[]>(
      'https://api.escuelajs.co/api/v1/products'
    );
    return data;
  }

  const products = await getProducts();
  console.log(products.map((item) => `${item.id} - ${item.title}}`));
})();
