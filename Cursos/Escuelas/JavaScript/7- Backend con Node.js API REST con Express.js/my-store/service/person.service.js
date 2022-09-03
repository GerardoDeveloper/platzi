const casual = require('casual');
const boom = require('@hapi/boom'); // librería que nos permite manejar los errores de forma más sencilla.

class PersonService {
  /**
   * Esta clase define toda la lógica de negocio, es decir, el manejo transaccional.
   */

  constructor() {
    this.arrayPerson = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.arrayPerson.push({
        id: casual.uuid,
        name: casual.name,
        lastName: casual.last_name,
        old: casual.integer(18, 60),
        isBlocked: casual.boolean,
      });
    }
  }

  /**
   * Crea una nueva persona.
   */
  create(data) {
    const newPerson = {
      id: casual.uuid,
      ...data // Hace una especie de 'merge', es decir, le concatena el objeto 'data' al objeto que contiene el id dentro.
    };

    this.arrayPerson.push(newPerson);

    return newPerson;
  }

  /**
   * Retorna la lista de productos.
   * @returns Promise
   */
  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.arrayPerson);
      }, 5000);
    });
  }

  /**
   * Devuelve una persona según su id.
   * @param {string} id
   * @returns
   */
  async findOne(id) {
    const person = this.arrayPerson.find(item => item.id === id);

    if (!person) {
      throw boom.notFound('person not found');
    }

    // Chequeamos sí esta bloqueado.
    if (person.isBlocked) {
      throw boom.conflict('person is blocked');
    }

    return person;
  }

  /**
   * Actualiza los datos de una persona.
   * @param {string} id Id de la persona que se quiere editar.
   * @param {*} changes
   * @returns
   */
  async update(id, changes) {
    const index = this.arrayPerson.findIndex(item => item.id === id); // El método 'findIndex' retorna el indice y/o posisión de un objeto dentro de un array.

    if (index === -1) {
      throw boom.notFound('person not found');
    }

    const person = this.arrayPerson[index];
    this.arrayPerson[index] = {
      ...person, // Almacenamos la información anterior, es decir, la persistimos.
      ...changes // Aplicamos los nuevos cambios.
    };

    return this.arrayPerson[index];
  }

  /**
   * Elimina una persona.
   * @param {string} id
   * @returns
   */
  async delete(id) {
    const index = this.arrayPerson.findIndex(item => item.id === id); // El método 'findIndex' retorna el indice de un objeto.

    if (index === -1) {
      throw boom.notFound('person not found');
    }

    // El método 'splice' nos permite enviarle como 1er parámetro una pocisión la cual queremos eliminar y como 2do parámetro recibe cuantos elementos queremos eliminar a partir de esa pocisión.
    this.arrayPerson.splice(index, 1);

    return { "id deleted": id };
  }
}

// Exportación de la clase.
module.exports = PersonService;