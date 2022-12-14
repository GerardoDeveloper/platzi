const express = require('express');
const UserService = require('./../service/users.service');

const router = express.Router();
const service = new UserService();

// Parámetros tipo query
router.get('/', (request, response) => {
  const { limit, offset } = request.query; // ---> Obtiene los parámetros tipo query.

  // Valida si vienen parámetros.
  if (limit && offset) {
    const data = {
      limit,
      offset
    };

    response.json(data);
  } else {
    response.send('No hay parámetros');
  }
});

// POST
router.post('/', (request, response) => {
  const body = request.body; // Desde el objeto 'body' sacamos todo el cuerpo de la petición que se haga desde el cliente.
  const data = {
    message: "created",
    data: body
  };

  response.json(data);
});

// PUT
router.put('/:id', (request, response) => {
  const { id } = request.params; // --> Obtenemos los parámetros.
  const body = request.body; // ---> Sacamos el cuerpo de la petición.
  const data = {
    id,
    message: "update put",
    data: body
  };

  response.json(data);
});

// PATCH
router.patch('/:id', (request, response) => {
  const { id } = request.params; // ---> Obtenemos los parámetros.
  const body = request.body; // ---> Sacamos el cuerpo de la petición.
  const data = {
    id,
    message: "update patch",
    data: body
  };

  response.json(data);
});

// DELETE
router.delete('/:id', (request, response) => {
  const { id } = request.params; // ---> Obtenemos los parámetros.
  const data = {
    id,
    message: "deleted"
  };

  response.json(data);
});

// Exportamos las rutas.
module.exports = router;