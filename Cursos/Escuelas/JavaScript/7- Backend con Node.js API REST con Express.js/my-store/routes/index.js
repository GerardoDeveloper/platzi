/**
 * Este script centraliza todas las rutas de manera modular.
 */

const express = require('express'); // importa el modulo de express.

// Importamos todos los router.
const homeRouter = require('./home.js');
const peopleRouter = require('./people.js');
const typePeopleRouter = require('./typePeople.js');
const usersRouter = require('./users.js');


// Definimos los endpoint.
function routerApi(app) {
  const router = express.Router(); // Creamos los routes.
  app.use('/api/v1', router); // Creamos una ruta global para todos los endpoint que será común a todas.
  router.use('/', homeRouter); // home.
  router.use('/people', peopleRouter); // lista todas las personas personas.
  router.use('/typePeople', typePeopleRouter); // Obtiene un producto de una categoria especifica.
  router.use('/users', usersRouter); // Lista todos los parámetros tipo query.

  /**
   * Sí se quiere sacar una versión 2 de la api, sólo deberíamos hacer lo siguiente.
   *
   * const router = express.Router();
     app.use('/api/v2');
     router.use('/', otherRouter);
     ...etc
   */
}

// Exportamos la función.
module.exports = routerApi;