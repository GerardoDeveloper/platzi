const casual = require('casual');
const boom = require('@hapi/boom'); // librería que nos permite manejar los errores de forma más sencilla y facíl.

class TypePersonService {
  /**
   * Esta clase define toda la lógica de negocio, es decir, el manejo transaccional.
   */

  constructor() {
    this.arrayTypePerson = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.arrayTypePerson.push({
        id: casual.uuid,
        name: casual.name,
        lastName: casual.last_name,
        old: casual.integer(18, 60),
        isBlocked: casual.boolean,
      });
    }
  }

  create(data) {
    const newTypePerson = {
      id: casual.uuid,
      ...data // Hace una especie de 'merge', es decir, le concatena el objeto 'data' al objeto que contiene el id dentro.
    };

    this.arrayTypePerson.push(newTypePerson);

    return newTypePerson;
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.arrayTypePerson);
      }, 5000);
    });
  }

  findOne(id) {
    const typePerson = this.arrayTypePerson.find(item => item.id === id);

    if (!typePerson) {
      throw boom.notFound('type person not found');
    }

    if (typePerson.isBlocked) {
      throw boom.conflict('type person is blocked');
    }

    return typePerson;
  }

  update(id, changes) {
    const index = this.arrayTypePerson.findIndex(item => item.id === id); // El método 'findIndex' retorna el indice de un objeto.

    if (index === -1) {
      throw boom.notFound('type person not found');
    }

    const typePerson = this.arrayTypePerson[index];
    this.arrayTypePerson[index] = {
      ...typePerson,
      ...changes
    };

    return this.arrayTypePerson[index];
  }

  delete(id) {
    const index = this.arrayTypePerson.findIndex(item => item.id === id); // El método 'findIndex' retorna el indice de un objeto.

    if (index === -1) {
      throw boom.notFound('type person not found');
    }

    // El método 'splice' nos permite enviarle como 1er parámetro una pocisión la cual queremos eliminar y como 2do parámetro recibe cuantos elementos queremos eliminar a partir de esa pocisión.
    this.arrayTypePerson.splice(index, 1);

    return { "id deleted": id };
  }
}

module.exports = TypePersonService;