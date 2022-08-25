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

  create(data) {
    const newPerson = {
      id: casual.uuid,
      ...data // Hace una especie de 'merge', es decir, le concatena el objeto 'data' al objeto que contiene el id dentro.
    };

    this.arrayPerson.push(newPerson);

    return newPerson;
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.arrayPerson);
      }, 5000);
    });
  }

  async findOne(id) {
    const person = this.arrayPerson.find(item => item.id === id);

    if (!person) {
      throw boom.notFound('person not found');
    }

    if (person.isBlocked) {
      throw boom.conflict('person is blocked');
    }

    return person;
  }

  async update(id, changes) {
    const index = this.arrayPerson.findIndex(item => item.id === id); // El método 'findIndex' retorna el indice de un objeto.

    if (index === -1) {
      throw boom.notFound('person not found');
    }

    const person = this.arrayPerson[index];
    this.arrayPerson[index] = {
      ...person,
      ...changes
    };

    return this.arrayPerson[index];
  }

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

module.exports = PersonService;