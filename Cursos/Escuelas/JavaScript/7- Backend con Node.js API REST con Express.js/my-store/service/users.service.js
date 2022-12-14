const casual = require('casual');

class UserService {
  /**
   * Esta clase define toda la lógica de negocio, es decir, el manejo transaccional.
   */

  constructor() {
    this.arrayProducts = [];
    this.generate();
  }

  /**
   * Genera 100 productos.
   */
  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.arrayProducts.push({
        id: casual.uuid,
        name: casual.name,
        lastName: casual.last_name,
        old: casual.integer(18, 60),
      });
    }
  }

  create() {

  }

  /**
   * Retorna la lista de productos.
   * @returns array
   */
  find() {
    return this.arrayProducts;
  }

  findOne(id) {
    return this.arrayProducts.find(item => item.id === id);
  }

  update() {

  }

  delete() {

  }
}

// Exportación de clase.
module.exports = UserService;