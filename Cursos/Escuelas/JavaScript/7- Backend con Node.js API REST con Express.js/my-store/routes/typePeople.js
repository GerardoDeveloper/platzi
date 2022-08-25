const express = require('express');
const TypePersonService = require('./../service/typePeople.service');
const validatorHandler = require('../middleware/validator.handler');
const { createTypePeopleSchema, updateTypePeopleSchema, getTypePeopleSchema } = require('../schemas/typePerson.schema');

const router = express.Router();
const service = new TypePersonService();

//==========================================================================================================
// GET
// Retornar una lista de tipos de personas.
router.get('/', (request, reponse) => {
  const data = service.find();
  reponse.json(data);
});

//==========================================================================================================
// Recibir 1 parámetro y devolver un tipo de persona en particular.
router.get('/:id', validatorHandler(getTypePeopleSchema, 'params'), (request, reponse) => {
  /**
   *Recogemos el id mandado por parámetro.
   */

  // 1ra forma
  // const id = request.params.id;

  // 2da forma con ES6.
  const { id } = request.params; // Esto permite capturar de todos los parámetros que estan dentro de 'params', en este caso obtiene sólo el id.
  const data = service.findOne(id);

  reponse.json(data);
});

//==========================================================================================================
// Recibir más de 1 parámetro o comunmente llamados parámetros query.
router.get('/:typePeopleId/people/:peopleId', (request, reponse) => {
  const { typePeopleId, peopleId } = request.params; // Esto permite capturar de todos los parámetros que estan dentro de 'params' obtiene sólo el id.
  const data = [
    {
      typePeopleId,
      peopleId,
      typePeople: 'Obsesivas'
    }
  ];

  reponse.json(data);
});

//==========================================================================================================
// POST
router.post('/', validatorHandler(createTypePeopleSchema, 'body'), (request, response) => {
  const body = request.body; // Sacamos el cuerpo de la petición.
  const data = {
    message: "created",
    data: body
  };

  response.json(data);
})

//==========================================================================================================
// PUT
router.put('/:id', validatorHandler(updateTypePeopleSchema, 'params'), validatorHandler(createTypePeopleSchema, 'body'), (request, response) => {
  const { id } = request.params;
  const body = request.body; // Sacamos el cuerpo de la petición.
  const data = {
    id,
    message: "update put",
    data: body
  };

  response.json(data);
});

//==========================================================================================================
// PATCH
router.patch('/:id', validatorHandler(updateTypePeopleSchema, 'params'), validatorHandler(createTypePeopleSchema, 'body'), (request, response) => {
  const { id } = request.params;
  const body = request.body; // Sacamos el cuerpo de la petición.
  const data = {
    id,
    message: "update patch",
    data: body
  };

  response.json(data);
});

//==========================================================================================================
// DELETE
router.delete('/:id', (request, response) => {
  const { id } = request.params;
  const data = {
    id,
    message: "deleted"
  };

  response.json(data);
});

// Exportamos las rutas.
module.exports = router;